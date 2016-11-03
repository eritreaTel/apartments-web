const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses')
const BestApartments = require('../components/guesthouse/best_apartment')
const Carousel = require('../components/shared/carousel')
const AboutUs = require('../components/shared/about_us')
const RecentNews = require('../components/blog/recent_news')

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<Carousel/>
				<SearchApartment parentClassName="mg-book-now"  wrapInContainer="container" />
				<BestApartments bestApartments={this.props.bestApartments}/>
				<AboutUs/>
				<RecentNews />
			</div>
		);
	}
};

function getDefaultProps() {
	let props = {
		bestApartments: [
			{
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
				"long_description" : "",
				"star_rating" : "3.75",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			},
			{
				"id": 2,
				"user_id": 2,
				"guest_house_id" : 2,
				"title" : "Deluxe",
				"best_photo" : "images/room-2.png",
				"total_count" : 25,
				"free_count" : 5,
				"bed" : 1,
				"bath" : 1,
				"price_per_day" : 50,
				"price_per_week" :  200,
				"price_per_month" : 750,
				"street_address" : "54 Myenga St",
				"city" : "Kampala",
				"country" : "Uganda",
				"is_available" : true,
				"short_description" : "Super deluxe apartment in Myenga, 10 kms from city center.",
				"long_description" : "",
				"star_rating" : "4.00",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			},
			{
				"id": 3,
				"user_id": 3,
				"guest_house_id" : 3,
				"title" : "Super Duper Deluxe",
				"best_photo" : "images/room-3.png",
				"total_count" : 5,
				"free_count" : 3,
				"bed" : 1,
				"bath" : 1,
				"price_per_day" : 30,
				"price_per_week" :  150,
				"price_per_month" : 500,
				"street_address" : "123 Kasanga St",
				"city" : "Kampala",
				"country" : "Uganda",
				"is_available" : true,
				"short_description" : "Super duper deluxe apartment in Kololo, 4 kms from city center.",
				"long_description" : "",
				"star_rating" : "5.00",
				"created_at": "2017-10-29 10:33:10",
				"updated_at": "2017-10-29 10:33:10",
				"deleted_at": null
			}
		]
	};

	return props;
}

HomePage.defaultProps = getDefaultProps();

module.exports = HomePage;