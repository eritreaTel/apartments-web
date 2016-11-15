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

const onBookNowClicked = function (apartmentId) {
	Actions.bookApartmentClicked({apartmentId});
	Actions.setRoute('/guest-houses');
}

const onKeepSearchingClicked = function () {
	Actions.goBackToSearch(null);
	Actions.setRoute('/guest-houses');
}

const onReviewApartmentClicked = function () {
	console.log('Review apartment clicked');
}

const ApartmentPrice = function(props) {
	return (
		<div className="mg-single-room-price">
			<div className="mg-srp-inner">
			{ApplicationHelper.formatCurrency(props.pricePerDay)}<sup>.00</sup><span>/Night</span>
			</div>
		</div>
	);
}

const AmenitiesAndControlButtons = function(props) {
	return (
		<div className="col-md-5 mg-room-fecilities">
			<h2 className="mg-sec-left-title">Apartment Amenities</h2>
			<Amenities amentiesToDisplay="8" amenities={props.apartment.amenities} outerDivClass="row" innerDivClass="col-sm-6" />
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

					{props.apartment.long_description}
				</div>
			</div>
		</div>
	);
}

const ApartmentReviewSection = function (props) {
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
					<ApartmentReviews apartmentReviews = {props.apartmentReviews} />
					<ApartmentReviewForm/>
				</div>
			</div>
		</div>
	);
}

const ApartmentReviews = function (props) {
	const styledReview = props.apartmentReviews && props.apartmentReviews.map(review => {
		return 	<div className="media" key={review.id}>
					<div className="media-left">
						<Anchor><img className="media-object" src= {assetPath("images/review.png")} alt="..."/></Anchor>
					</div>
					<div className="media-body">
						<h4 className="media-heading">{review.full_name}</h4>
						<div className="mg-media-user-rating">
							<span className="mg-rs-icon">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o"></i>
							</span>
						</div>
						<div className="media-date">{DateHelper.formatDate(review.created_at, 'D MMM, YYYY')}</div>
						<p>{review.comment}</p>
					</div>
				</div>
		});

		return (
			<div className="col-md-7">
				<div className="mg-reviews">
					{styledReview}
				</div>
			</div>
		);
}

class ApartmentReviewForm extends React.Component {

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
		return (
			<div className="col-md-5">
				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Location:</div> <div id="mg-star-position" className="starrr"></div>
						<input type="hidden" id="mg-star-position-input"/>
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Comfort:</div> <div id="mg-star-comfort" className="starrr"></div>
						<input type="hidden" id="mg-star-comfort-input"/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Price:</div> <div id="mg-star-price" className="starrr"></div>
						<input type="hidden" id="mg-star-price-input"/>
					</div>
					<div className="col-xs-6 mg-star-rating">
						<div className="mg-star-rating-title">Quality:</div> <div id="mg-star-quality" className="starrr"></div>
						<input type="hidden" id="mg-star-quality-input"/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<input type="text" className="form-control" placeholder="Your Name"/>
					</div>
					<div className="col-md-6">
						<input type="text" className="form-control" placeholder="Your Email"/>
					</div>
				</div>

				<textarea className="form-control" placeholder="Your Comment" rows="5"></textarea>
				<input onClick={() => {onReviewApartmentClicked()}} type="submit" value="Submit Review" className="btn btn-dark pull-right"/>
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

	render() {
		const {store : {apartment}} = this.props;

		return (
			<ApartmentBody>
				<PageTitle parentClassName="mg-page-title parallax">
					<h2>{apartment.title}</h2>
					<p>{apartment.short_description}</p>
				</PageTitle>

				<ApartmentPrice pricePerDay = {apartment.price_per_day} />
				<ApartmentMiddleSection apartment={apartment} />
				<ApartmentReviewSection apartmentReviews={apartment.apartmentReviews} />
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
				<SvgImage name="dark-sun"/> Loading
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