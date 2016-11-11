const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses')
const BestApartmentsSection = require('../components/guesthouse/best_apartment_section')
const Carousel = require('../components/shared/carousel')
const AboutUs = require('../components/shared/about_us')
const RecentNews = require('../components/blog/recent_news')

class HomePage extends React.Component {

	render() {
		const {store} = this.props;
		const {bookingStage :{searchInfo}} = store;
		return (
			<div>
				<Carousel/>
				<SearchApartment searchInfo={searchInfo} parentClassName="mg-book-now"  wrapInContainer="container" />
				<BestApartmentsSection store={store} />
				<AboutUs/>
				<RecentNews />
			</div>
		);
	}
};

module.exports = HomePage;