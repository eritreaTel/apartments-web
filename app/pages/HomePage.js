const React = require('react');
const SearchApartment = require('../components/guesthouse/search_guesthouses');
const BestApartmentsSection = require('../components/guesthouse/best_apartment_section');
const Carousel = require('../components/shared/carousel');
const AboutUs = require('../components/shared/about_us');
const RecentNews = require('../components/blog/recent_news');
const Actions = require('../actions/actions');
const DateHelper = require('../helpers/date_helper');

class HomePage extends React.Component {

	componentWillMount() {
		const {store : {bookingStage :{searchInfo}}} = this.props;
		if (searchInfo == null) {
			let searchParams = {
					'checkInDate'   : DateHelper.getOneWeeksFromNow(),
					'checkOutDate'  : DateHelper.getThreeWeeksFromNow(),
					'room' : 1,
					'bed' : 1
			};
			Actions.persistSearchInfo(searchParams);
		}
	}

	render() {
		const {store} = this.props;
		const {bookingStage :{searchInfo}} = store;
		return (
			<div>
				<Carousel/>
				<SearchApartment searchInfo={searchInfo} parentClassName="mg-book-now"  wrapInContainer="container" />
				<BestApartmentsSection store={store} />
				<AboutUs/>
				<RecentNews store={store}/>
			</div>
		);
	}
};

module.exports = HomePage;