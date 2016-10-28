const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');
const Amenities = require('../components/apartment/amenties');

class ApartmentPage extends React.Component {

	renderTitle(apartment) {
		return (
			<div className="mg-page-title parallax">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>{apartment.title}</h2>
							<p>{apartment.short_description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderApartmentPrice(pricePerDay) {
		return (
			<div className="mg-single-room-price">
				<div className="mg-srp-inner">
					{ApplicationHelper.formatCurrency(pricePerDay)}<sup>.00</sup><span>/Night</span>
				</div>
			</div>
		);
	}

	_renderAmenities(apartment) {
		return (
			<div className="col-md-5 mg-room-fecilities">
				<h2 className="mg-sec-left-title">Apartment Amenities</h2>
				<Amenities amenities={apartment.amenities} outerDivClass="row" innerDivClass="col-sm-6" />
			</div>
		);
	}

	_renderApartmentDescription(apartment) {
		return(
			<div className="row">
				<div className="col-md-12">
					<div className="mg-single-room-txt">
						<h2 className="mg-sec-left-title">Apartment Description</h2>
						<p>
							{apartment.long_description_1}
						</p>
						<p>
							{apartment.long_description_2}
						</p>
					</div>
				</div>
			</div>
		);
	}

	_renderGalleries(apartment) {
		const styledFullLi = apartment.galleries.map(gallery => {
			return 	<li><img src={gallery.full} alt={gallery.caption}/></li>;
		});

		const styledThumbLi = apartment.galleries.map(gallery => {
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

	renderApartment(apartment) {
		return (
			<div className="mg-single-room">
				<div className="container">
					<div className="row">
						{this._renderGalleries(apartment)}
						{this._renderAmenities(apartment)}
					</div>
					{this._renderApartmentDescription(apartment)}
				</div>
			</div>
		);
	}

	render() {
		const apartment = this.props.apartment;
		return (
			<div>
				{this.renderTitle(apartment)}
				{this.renderApartmentPrice(apartment.price_per_day)}
				{this.renderApartment(apartment)}
			</div>
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
			"long_description_1" : "This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala, 7 kms from city center. This is a deluxe aparment in Kabala gala.",
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
		}
	};
	return props;
}

ApartmentPage.defaultProps = getDefaultProps();

module.exports = ApartmentPage;