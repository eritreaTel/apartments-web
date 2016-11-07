const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');
const Amenities = require('../components/apartment/amenties');
const Anchor = require('../components/shared/anchor');
const PageTitle = require('../components/shared/pageTitle');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const withDataLoaded = require('../components/with_data_loaded')
const Moment = require('moment');


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
			<Amenities amenities={props.amenities} outerDivClass="row" innerDivClass="col-sm-6" />
			<Anchor className="btn btn-main btn-next-tab">Select This Room</Anchor>
			<Anchor className="btn btn-link">Keep Searching <i className="fa fa-angle-double-left"></i></Anchor>
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
	const styledReview = props.apartmentReviews.map(review => {
		return 	<div className="media">
					<div className="media-left">
						<Anchor><img className="media-object" src="images/review.png" alt="..."/></Anchor>
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
						<div className="media-date">{Moment(review.created_at).format('D MMM, YYYY')}</div>
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

const ApartmentReviewForm = function () {
	return (
		<div className="col-md-5">
			<div className="row">
				<div className="col-xs-6 mg-star-rating">
					<div className="mg-star-rating-title">Position:</div> <div id="mg-star-position" className="starrr"></div>
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
			<input type="button" value="Submit Review" className="btn btn-dark pull-right"/>
		</div>
	);
}

const ApartmentGalleries = function (props) {
	const styledFullLi = props.galleries.map(gallery => {
		return 	<li><img src={gallery.full} alt={gallery.caption}/></li>;
	});

	const styledThumbLi = props.galleries.map(gallery => {
		return 	<li><img src={gallery.thumb} alt={gallery.caption}/></li>;
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
	);
}

const ApartmentMiddleSection = function (props) {
	return (
		<div className="mg-single-room">
			<div className="container">
				<div className="row">
					<ApartmentGalleries galleries = {props.apartment.galleries} />
					<AmenitiesAndControlButtons amenities={props.apartment.amenities} />
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
		const apartment = this.props.apartment;
		return (
			<ApartmentBody>
				<PageTitle parentClassName="mg-page-title parallax">
					<h2>{apartment.title}</h2>
					<p>{apartment.short_description}</p>
				</PageTitle>

				<ApartmentPrice pricePerDay = {apartment.price_per_day} />
				<ApartmentMiddleSection apartment={apartment} />
				<ApartmentReviewSection apartmentReviews={this.props.apartmentReviews} />
			</ApartmentBody>
		);
	}
};


function getDefaultProps() {
	let props = {
		apartment : {
			"id": 1,
			"user_id": 1,
			"guest_house_id" : 1,
			"title" : "Super Deluxe",
			"best_photo" : "images/room-1.png",
			"total_count" : 15,
			"free_count" : 10,
			"bed" : 1,
			"bath" : 1,
			"price_per_day" : 40,
			"price_per_week" :  180,
			"price_per_month" : 600,
			"street_address" : "477 Nsambia St",
			"city" : "Kampala",
			"country" : "Uganda",
			"is_available" : true,
			"short_description" : "This is a deluxe aparment in Kabala gala, 7 kms from city center.",
			"medium_description" : "This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala ...",
			"long_description_1" : "",
			"long_description_2" : "This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.",
			"star_rating" : "3.75",
			"created_at": "2017-10-29 10:33:10",
			"updated_at": "2017-10-29 10:33:10",
			"deleted_at": null,
			"amenities" : [
				{
					"id" : 1,
					"name" : "Breakfast",
					"value" : true,
					"icon_name" : "fp-ht-food"
				},
				{
					"id" : 2,
					"name" : "Air conditioning",
					"value" : true,
					"icon_name" : "fa fa-sun-o"
				},
				{
					"id" : 3,
					"name" : "Free Parking",
					"value" : true,
					"icon_name" : "fp-ht-parking"
				},
				{
					"id" : 4,
					"name" : "Elevator",
					"value" : true,
					"icon_name" : "fp-ht-elevator"
				},
				{
					"id" : 5,
					"name" : "Room service",
					"value" : true,
					"icon_name" : "fp-ht-maid"
				},

				{
					"id" : 6,
					"name" : "GYM facility",
					"value" : true,
					"icon_name" : "fp-ht-dumbbell"
				},
				{
					"id" : 7,
					"name" : "TV LCD",
					"value" : true,
					"icon_name" : "fp-ht-tv"
				},
				{
					"id" : 8,
					"name" : "Wi-fi service",
					"value" : true,
					"icon_name" : "fp-ht-computer"
				},
				{
					"id" : 9,
					"name" : "2 King Beds",
					"value" : true,
					"icon_name" : "fp-ht-bed"
				},
				{
					"id" : 10,
					"name" : "Swimming Pool",
					"value" : true,
					"icon_name" : "fp-ht-swimmingpool"
				}
			],
			"galleries" : [
				{
					"id" : 1,
					"full" : "images/gallery-01.png",
					"thumb" : "images/gallery-thumb-01.png",
					"caption" : "Partner Logo"
				},
				{
					"id" : 2,
					"full" : "images/gallery-02.png",
					"thumb" : "images/gallery-thumb-02.png",
					"caption" : "Partner Logo"
				},
				{
					"id" : 5,
					"full" : "images/gallery-05.png",
					"thumb" : "images/gallery-thumb-05.png",
					"caption" : "Partner Logo"
				},
				{
					"id" : 6,
					"full" : "images/gallery-06.png",
					"thumb" : "images/gallery-thumb-06.png",
					"caption" : "Partner Logo"
				},
				{
					"id" : 7,
					"full" : "images/gallery-07.png",
					"thumb" : "images/gallery-thumb-07.png",
					"caption" : "Partner Logo"
				},
				{
					"id" : 8,
					"full" : "images/gallery-08.png",
					"thumb" : "images/gallery-thumb-08.png",
					"caption" : "Partner Logo"
				}
			]
		},
		apartmentReviews : [
			{
				"id"    : 1,
				"apartment_id" : 1,
				"user_id"  : 1,
				"email_address" : 'amanuel@gmail.com',
				"full_name" : 'Amanuel Yohannes',
				"location_rating": 3,
				"comfort_rating":  4,
				"price_rating"  : 5,
				"quality_rating" : 4,
				"average_rating" : 4,
				"comment" : "Tihs review is from Amanuel Yohannes. This is really great guest house. If feels like home",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			},
			{
				"id"    : 2,
				"apartment_id" : 1,
				"user_id"  : 1,
				"email_address" : 'ruth@gmail.com',
				"full_name" : 'Ruth Yohannes',
				"location_rating": 5,
				"comfort_rating":  5,
				"price_rating"  : 5,
				"quality_rating" : 4,
				"average_rating" : 5,
				"comment" : "This review is from Ruth Natey, really great guest house. If feels like home",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			},
			{
				"id"    : 3,
				"apartment_id" : 1,
				"user_id"  : 1,
				"email_address" : 'youel@gmail.com',
				"full_name" : 'Youel Tesfalem',
				"location_rating": 3,
				"comfort_rating":  2,
				"price_rating"  : 3,
				"quality_rating" : 2,
				"average_rating" : 3,
				"comment" : "This review is from Youel Tefalem. This is really great guest house. If feels like home",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			}
		]
	};
	return props;
}


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
		loadDataFn: () => Actions.getApartment()
	}
	]
});

module.exports = WithUserLoaded;
