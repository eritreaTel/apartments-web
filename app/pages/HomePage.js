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
				<BestApartments/>
				<AboutUs/>
				<RecentNews />
			</div>
		);
	}
};

module.exports = HomePage;