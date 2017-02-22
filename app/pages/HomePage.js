const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
const BestApartmentsSection = require('../components/guesthouse/best_apartment_section');
const Carousel = require('../components/shared/carousel');
const AboutUs = require('../components/shared/about_us');
const RecentNews = require('../components/blog/recent_news');
const Actions = require('../actions/actions');
const DateHelper = require('../helpers/date_helper');
const PageTitle = require('../components/shared/pageTitle');
const ApartmentHelper = require('../helpers/apartment_helper');

class HomePage extends React.Component {

	componentWillMount() {
		const {store : {bookingStage :{searchInfo}}} = this.props;
		if (searchInfo == null) {
			let searchParams  = ApartmentHelper.getDefaultSearchDates();
			Actions.persistSearchInfo(searchParams);
		}
	}

	render() {
		const {store} = this.props;
		const {bookingStage :{searchInfo}} = store;
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<div className="mg-saerch-room">
					<SearchApartment searchInfo={searchInfo} parentClassName="mt80"  wrapInContainer="mg-book-now container" />
				</div>
				<BestApartmentsSection store={store} />

				<RecentNews store={store}/>
			</div>
		);
	}
};

module.exports = HomePage;