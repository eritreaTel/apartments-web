const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');
const Amenities = require('../components/apartment/amenties');
const Anchor = require('../components/shared/anchor');
const PageTitle = require('../components/shared/pageTitle');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const withDataLoaded = require('../components/with_data_loaded')
const {assetPath} = require('../helpers/asset_helper');
const DateHelper = require('../helpers/date_helper');
const CookiesHelper  = require('../helpers/cookies_helper');
const Slider = require('react-slick');

import MDSpinner from "react-md-spinner";
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
const Constants = require('../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';

const onBookNowClicked = function (apartmentId) {
	Actions.bookApartmentClicked({apartmentId});
	Actions.setRoute('/guest-houses');
}

const onKeepSearchingClicked = function () {
	Actions.goBackToSearch(null);
	Actions.setRoute('/guest-houses');
}

const onReviewApartmentClicked = function (e, ratingInfo) {
	let email = e.refs.email.value;
	let full_name = e.refs.full_name.value;
	let comment = e.refs.comment.value;
	let apartmentReviewInfo = {...ratingInfo, email, full_name, comment};

	let isProcessing = {reviewAnApartment: true};
	Actions.setIsProcessing(isProcessing);

	let createApartmentReviewsPromise = Actions.saveApartmentReview(apartmentReviewInfo);

	createApartmentReviewsPromise.then(response => {
		if (response.status == 'fail') {
			NotificationManager.error(response.error, 'Apartment Review', Constants.ERROR_DISPLAY_TIME);
		} else {
			NotificationManager.success('Thank you for your review.', 'Apartment Review', Constants.SUCCESS_DISPLAY_TIME);
		}

		isProcessing.reviewAnApartment = false;
		Actions.setIsProcessing(isProcessing);
	});
}

const ApartmentPrice = function(props) {
	return (
		<div>
			<div className="mg-single-room-price">
				<div className="mg-srp-inner-price-per-day">
					{ApplicationHelper.formatCurrency(props.apartment.price_per_day)}<sup>.00</sup><span>/Night</span>
				</div>
			</div>
			<div className="mg-single-room-price">
				<div className="mg-srp-inner-price-per-week">
					{ApplicationHelper.formatCurrency(props.apartment.price_per_week)}<sup>.00</sup><span>/Week</span>
				</div>
			</div>
			<div className="mg-single-room-price">
				<div className="mg-srp-inner-price-per-month">
					{ApplicationHelper.formatCurrency(props.apartment.price_per_month)}<sup>.00</sup><span>/Month</span>
				</div>
			</div>
		</div>
	);
}

const AmenitiesAndControlButtons = function(props) {
	return (
		<div className="col-md-5 mg-room-fecilities">
			<h2 className="mg-sec-left-title">Apartment Amenities</h2>
			<Amenities amentiesToDisplay="10" amenities={props.apartment.amenities} outerDivClass="row" innerDivClass="col-sm-6" />
			<div className="row">
				<div className="col-md-6">
					<Anchor onClick={() => onKeepSearchingClicked()} className="btn btn-dark">Keep Searching</Anchor>
				</div>
				<div className="col-md-6">
					<Anchor onClick = {() => {onBookNowClicked(props.apartment.id)}} className=" pull-left btn btn-main btn-next-tab">Book Now</Anchor>
				</div>
			</div>

		</div>
	);
}

const ApartmentDescription = function(props) {
	return(
		<div className="row">
			<div className="col-md-12">
				<div className="mg-single-room-txt">
					<h2 className="mg-sec-left-title">Apartment Description</h2>
					<div dangerouslySetInnerHTML={{__html: props.apartment.long_description}}></div>
				</div>
			</div>
		</div>
	);
}

class ApartmentReviewSection  extends React.Component {
	render() {
		return (
			<div className="mg-single-room-review-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-12 clearfix">

							<div className="mg-sm-full-rating">
								<h2 className="mg-sec-left-title">Apartment Reviews</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<ApartmentReviews apartmentReviews = {this.props.apartmentReviews} />
						<ApartmentReviewForm isProcessing={this.props.isProcessing} user={this.props.user} apartment={this.props.apartment}/>
					</div>
				</div>
			</div>
		);
	}
}

class ApartmentReviews extends React.Component {
	render () {

		let	styledReview = this.props.apartmentReviews && this.props.apartmentReviews.map(review => {
					return 	<div className="media" key={review.id}>
								<div className="media-left">
									<Anchor><img className="media-object" src= {assetPath("images/review.png")} alt="..."/></Anchor>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{review.full_name}</h4>
									<div className="mg-media-user-rating">
										<StarRatingComponent edit={false} name="overall_rating" starCount={5} value={Math.ceil(review.average_rating)} emptyStarColor={"#d3d3d3"} />
									</div>
									<div className="media-date">{DateHelper.formatDate(review.created_at, 'D MMM, YYYY')}</div>
									<p>{review.comment}</p>
								</div>
							</div>
		});

		styledReview = this.props.apartmentReviews && this.props.apartmentReviews.length ==0 ? 'Please be the first one to review this apartment' : styledReview  ;


		return (
			<div className="col-md-7">
				<div className="mg-reviews">
					{styledReview}
				</div>
			</div>
		);
	}
}

class ApartmentReviewForm extends React.Component {

	constructor() {
		super();

		this.state = {
			location_rating: 0,
			comfort_rating: 0,
			price_rating: 0,
			quality_rating: 0
		};
	}

	componentWillMount() {
		Actions.getAuthenticatedUser();
	}

	onLocationStarClick(nextValue, prevValue, name) {
		if (name =='location_rating') {
			this.setState({location_rating: nextValue});
		} else if(name =='comfort_rating') {
			this.setState({comfort_rating: nextValue});
		} else if(name =='price_rating') {
			this.setState({price_rating: nextValue});
		} else if(name =='quality_rating') {
			this.setState({quality_rating: nextValue});
		}
	}

	render() {
		const loggedIn = (!!CookiesHelper.getSessionCookie());
		const {location_rating, comfort_rating, price_rating, quality_rating } = this.state;
		let {apartment, user, isProcessing} = this.props;
		let apartment_id = apartment.id;
		let user_id = null, email = '', full_name = '';
		if (loggedIn && user) {
			user_id = user.id;
			email = user.email;
			full_name = user.first_name + ' ' + user.last_name;

		}
		let ratingInfo = {location_rating, comfort_rating, price_rating, quality_rating, apartment_id, user_id};

		let spinnerClassName = (isProcessing.reviewAnApartment == true) ? 'margin-left-20' : 'margin-left-20 hide';
		let disableInput   		= (isProcessing.reviewAnApartment == true ) ? true : false;
		let disableExistingInput = isProcessing.reviewAnApartment == true || loggedIn;
		let buttonClassname  	= (isProcessing.reviewAnApartment == true) ? 'btn btn-dark pull-left disabled' : 'btn btn-dark pull-left';
		let editStars 			= (isProcessing.reviewAnApartment == true) ? false : true;



		return (
			<div className="col-md-5">
				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Location: </div>
						<StarRatingComponent name="location_rating" editing={editStars} starCount={5} value={location_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Comfort:</div>
						<StarRatingComponent name="comfort_rating" editing={editStars} starCount={5} value={comfort_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Price:</div>
						<StarRatingComponent name="price_rating" editing={editStars} starCount={5} value={price_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Quality:</div>
						<StarRatingComponent name="quality_rating" editing={editStars} starCount={5} value={quality_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<input ref='full_name' value={full_name} type="text" className="input-with-validation form-control" disabled={disableExistingInput} placeholder="Your Name *"/>
					</div>
					<div className="col-md-6">
						<input ref='email' type="text" value={email} className="input-with-validation form-control" disabled={disableExistingInput} placeholder="Your Email *"/>
					</div>
				</div>

				<textarea ref='comment' className="input-with-validation form-control" disabled={disableInput} placeholder="Your Comment *" rows="5"></textarea>

				<input onClick={() => {onReviewApartmentClicked(this, ratingInfo)}} type="submit" value="Submit Review" className={buttonClassname}/>
				<MDSpinner ref='footer_spinner' className={spinnerClassName} />
			</div>
		);
	}
}

class ApartmentGalleries extends React.Component {

	render() {
		let sliderProps = {
			arrows    : true,
			autoplay  : false,
			dots : true,
			slidesToShow : 1,
			slidesToScroll : 1,
			infinite : true
		}

		const {galleries} = this.props;
		const styledImages = galleries && galleries.map(gallery => {
			return 	<img key={gallery.id} src={assetPath(gallery.full_image)} alt={gallery.caption}/>;
		});

		return (
			<div className="col-md-7">
				<Slider {...sliderProps}>
					{styledImages}
				</Slider>
			</div>
		)
	}

}

const ApartmentMiddleSection = function (props) {
	return (
		<div className="mg-single-room">
			<div className="container">
				<div className="row">
					<ApartmentGalleries galleries = {props.apartment.galleries} />
					<AmenitiesAndControlButtons apartment={props.apartment} />
				</div>
				<ApartmentDescription apartment={props.apartment} />
			</div>
		</div>
	);
}

const ApartmentBody = function (props) {
	return (
		<div>
			{props.children}
		</div>
	);
}


class ApartmentPage extends React.Component {

	componentWillMount() {
		const {store : {apartment}} = this.props;
		let apartmentId = apartment.id;
		Actions.getAuthenticatedUser();
	}

	render() {
		const {store : {apartment, user, apartmentReviews, isProcessing}} = this.props;
		let guestHouseName = apartment.guestHouse.name;

		return (
			<ApartmentBody>
				<PageTitle parentClassName="mg-page-title parallax">
					<h2>{guestHouseName}</h2>
					<h3>{apartment.title}</h3>
					<p>&nbsp;</p>
				</PageTitle>

				<ApartmentPrice apartment = {apartment} />
				<ApartmentMiddleSection apartment={apartment} />
				<ApartmentReviewSection isProcessing={isProcessing} user={user} apartment={apartment} apartmentReviews={apartmentReviews} />
			</ApartmentBody>
		);
	}
};


const WithUserLoaded = withDataLoaded({
	WithData: ApartmentPage,
	WithoutData: () => (
	<ApartmentBody >
		<PageTitle parentClassName="mg-page-title parallax">
			<div className='load-spin'>
				<MDSpinner />
			</div>
		</PageTitle >
	</ApartmentBody>
	),
	data: [
		{
			storeKeys: ['apartment'],
			loadDataFn: ({view : {apartmentId}}) => Actions.getApartment({apartmentId}),
			alwaysLoad : true
		},
		{
			storeKeys: ['apartmentReviews'],
			loadDataFn: ({view : {apartmentId}}) => Actions.getApartmentReviews({apartmentId}),
			alwaysLoad : true,
			checkDataFn: ({apartmentReviews}) => apartmentReviews != null
		}
	]
});

module.exports = WithUserLoaded;