const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');
const Amenities = require('../components/apartment/amenties');
const Anchor = require('../components/shared/anchor');
const PageTitle = require('../components/shared/pageTitle');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const withDataLoaded = require('../components/with_data_loaded')
const {assetPath} = require('../helpers/asset_helper');
const GalleryHelper=  require('../helpers/gallery_helper');
const DateHelper = require('../helpers/date_helper');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import MDSpinner from "react-md-spinner";
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

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

	let createApartmentReviewsPromise = Actions.saveApartmentReview(apartmentReviewInfo);

	createApartmentReviewsPromise.then(response => {
		if (response.status == 'fail') {
			NotificationManager.error(response.error, 'Apartment Review', 3000);
		} else {
			NotificationManager.success('Thank you for your review.', 'Apartment Review');
		}
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
						<ApartmentReviewForm user={this.props.user} apartment={this.props.apartment}/>
					</div>
				</div>
			</div>
		);
	}
}

const ApartmentReviews = function (props) {
	console.log('list of all reviews');
	console.log(props.apartmentReviews);
	let thereAreReviews = true;// props.apartmentReviews && props.apartmentReviews.length > 0 && props.apartmentReviews[0].length > 0;
	let styledReview;

	if (thereAreReviews) {
		styledReview = props.apartmentReviews.map(review => {
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
	} else {
		styledReview = 'Please be the first one to review this apartment';
	}

	return (
		<div className="col-md-7">
			<div className="mg-reviews">
				{styledReview}
			</div>
		</div>
	);
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

	componentDidMount() {
		/*
		 * Single room review ratting
		 */
		$('#mg-star-position').on('starrr:change', function(e, value){
			$('#mg-star-position-input').val(value);
		});

		$('#mg-star-comfort').on('starrr:change', function(e, value){
			$('#mg-star-comfort-input').val(value);
		});

		$('#mg-star-price').on('starrr:change', function(e, value){
			$('#mg-star-price-input').val(value);
		});

		$('#mg-star-quality').on('starrr:change', function(e, value){
			$('#mg-star-quality-input').val(value);
		});
	}

	render() {
		const {location_rating, comfort_rating, price_rating, quality_rating } = this.state;
		let {apartment, user} = this.props;
		let apartment_id = apartment.id;
		let user_id = null; let email = null;
		if (user) {
			user_id = user.id;
			email = user.email;
		}
		let ratingInfo = {location_rating, comfort_rating, price_rating, quality_rating, apartment_id, user_id};

		return (
			<div className="col-md-5">
				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Location: </div>
						<StarRatingComponent name="location_rating" starCount={5} value={location_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Comfort:</div>
						<StarRatingComponent name="comfort_rating" starCount={5} value={comfort_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Price:</div>
						<StarRatingComponent name="price_rating" starCount={5} value={price_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Quality:</div>
						<StarRatingComponent name="quality_rating" starCount={5} value={quality_rating} emptyStarColor={"#d3d3d3"} onStarClick={this.onLocationStarClick.bind(this)} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
					<Validate validators={[ValidationHelper.isRequired]}>
						<input ref='full_name' type="text" className="input-with-validation form-control" placeholder="Your Name *"/>
					</Validate>
					</div>
					<div className="col-md-6">
						<Validate validators={[ValidationHelper.isRequired]}>
							<input ref='email' type="text" value={email} className="input-with-validation form-control" placeholder="Your Email *"/>
						</Validate>
					</div>
				</div>
				<Validate validators={[ValidationHelper.isRequired]}>
					<textarea ref='comment' className="input-with-validation form-control" placeholder="Your Comment *" rows="5"></textarea>
				</Validate>
				<input onClick={() => {onReviewApartmentClicked(this, ratingInfo)}} type="submit" value="Submit Review" className="btn btn-dark pull-right"/>
			</div>
		);
	}
}

class ApartmentGalleries extends React.Component {

	componentDidMount() {
		GalleryHelper.reRenderGalleries();
	}

	render(){
		const {galleries} = this.props;
		const styledFullLi = galleries && galleries.map(gallery => {
			return 	<li key={gallery.id}><img src={assetPath(gallery.full)} alt={gallery.caption}/></li>;
		});

		const styledThumbLi = galleries && galleries.map(gallery => {
			return 	<li key={gallery.id * 2}><img src={assetPath(gallery.thumb)} alt={gallery.caption}/></li>;
		});

		return (
			<div className="col-md-7">
				<div className="mg-gallery-container">
					<ul className="mg-gallery" id="mg-gallery">
						{styledFullLi}
					</ul>

					<ul className="mg-gallery-thumb" id="mg-gallery-thumb">
						{styledThumbLi}
					</ul>
				</div>
			</div>
		);}

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
		Actions.getApartmentReviews({apartmentId})
		Actions.getAuthenticatedUser();
	}

	render() {
		const {store : {apartment, user, apartmentReviews}} = this.props;

		console.log('inside render');
		console.log(apartmentReviews);

		return (
			<ApartmentBody>
				<PageTitle parentClassName="mg-page-title parallax">
					<h2>{apartment.title}</h2>
					<p>{apartment.short_description}</p>
				</PageTitle>

				<ApartmentPrice apartment = {apartment} />
				<ApartmentMiddleSection apartment={apartment} />
				<ApartmentReviewSection user={user} apartment={apartment} apartmentReviews={apartmentReviews} />
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
			loadDataFn: ({view : {apartmentId}}) => Actions.getApartment({apartmentId})
		}
	]
});

module.exports = WithUserLoaded;