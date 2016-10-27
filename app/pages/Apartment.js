const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');

class Apartment extends React.Component {

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

	renderApartmentDescription(apartment) {
		return (
			<div className="mg-single-room">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="mg-gallery-container">
								<ul className="mg-gallery" id="mg-gallery">
									<li><img src="images/gallery-01.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-02.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-05.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-06.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-07.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-08.png" alt="Partner Logo"/></li>
								</ul>

								<ul className="mg-gallery-thumb" id="mg-gallery-thumb">
									<li><img src="images/gallery-thumb-01.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-thumb-02.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-thumb-05.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-thumb-06.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-thumb-07.png" alt="Partner Logo"/></li>
									<li><img src="images/gallery-thumb-08.png" alt="Partner Logo"/></li>
								</ul>
							</div>
						</div>

						<div className="col-md-5 mg-room-fecilities">
							<h2 className="mg-sec-left-title">Room Fecilities</h2>
							<div className="row">
								<div className="col-xs-6">
									<ul>
										<li><i className="fp-ht-food"></i> Breakfast</li>
										<li><i className="fa fa-sun-o"></i> Air conditioning</li>
										<li><i className="fp-ht-parking"></i> Free Parking</li>
										<li><i className="fp-ht-elevator"></i> Elevator</li>
										<li><i className="fp-ht-maid"></i> Room service</li>
									</ul>
								</div>
								<div className="col-xs-6">
				<ul>
				<li><i className="fp-ht-dumbbell"></i> GYM fecility</li>
			<li><i className="fp-ht-tv"></i> TV LCD</li>
			<li><i className="fp-ht-computer"></i> Wi-fi service</li>
			<li><i className="fp-ht-bed"></i> 2 King Beds</li>
			<li><i className="fp-ht-swimmingpool"></i> Swimming Pool</li>
			</ul>
			</div>
			</div>
			</div>
			</div>
			<div className="row">
				<div className="col-md-12">
				<div className="mg-single-room-txt">
				<h2 className="mg-sec-left-title">Room Description</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fecerint persecuti praeterea mentitum minime mediocriterne intellegerem certa pariendarum frustra, quidque ipsis praeter minima, iuste posse perspici dividendo videtisne, aperiri exercitus. Ille vivamus philosophis approbantibus mundus suum probes vivatur. Existimo augeri omnium ego aiunt remotis, dissentias graecam improbe diceretur, intus vitae saluti plerumque quot postulet partiendo facimus desperantes. Albucius arbitrarer animadversionis flagitem explentur posse consequi iactare legendus cogitemus, maximasque difficiles, utraque grate viris ipsi divelli expedire meliore libenter dolendum, bonae maximis hinc.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impetus simulent rationem duo operam alliciat. Praetor fabulis medeam careret laetetur petulantes, incursione potiora nostram laborat nescius meminerit restincto adamare, misisti interesset inventore complectitur consentaneum, aeterno, inpendente probatum levitatibus honesta, defatigatio praeter ignorant, omnem medicorum, frui timidiores coerceri consilio labore certe. Prima dicemus. Facillimis fatendum magna curis illi referenda late ordinem, adhibenda perfecto cepisse dicturum dici migrare metu dirigentur parvos interpretaris. Putarent eoque morbis abducat summis futuris vult, amatoriis contenta ludicra spe.</p>
			</div>
			</div>
			</div>
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
				{this.renderApartmentDescription(apartment)}
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
			"long_description" : "",
			"star_rating" : "3.75",
			"created_at": "2017-10-29 10:33:10",
			"updated_at": "2017-10-29 10:33:10",
			"deleted_at": null,
			"amenities" : [
				{
					"id" : 1,
					"name" : "2 King Beds",
					"value" : true,
					"icon_name" : "fp-ht-bed"
				},
				{
					"id" : 2,
					"name" : "Breakfast",
					"value" : true,
					"icon_name" : "fp-ht-food"
				},
				{
					"id" : 3,
					"name" : "Air conditioning",
					"value" : true,
					"icon_name" : "fa-sun-o"
				},
				{
					"id" : 4,
					"name" : "GYM facility",
					"value" : true,
					"icon_name" : "fp-ht-dumbbell"
				},
				{
					"id" : 5,
					"name" : "TV LCD",
					"value" : true,
					"icon_name" : "fp-ht-tv"
				},
				{
					"id" : 6,
					"name" : "Wi-fi service",
					"value" : true,
					"icon_name" : "fp-ht-computer"
				}
			]
		}
	};
	return props;
}

Apartment.defaultProps = getDefaultProps();

module.exports = Apartment;