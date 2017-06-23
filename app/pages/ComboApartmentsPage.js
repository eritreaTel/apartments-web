const React = require('react');
const ApplicationHelper = require('../helpers/application_helper');
const Amenities = require('../components/apartment/amenties');
const Anchor = require('../components/shared/anchor');
const PageTitle = require('../components/shared/pageTitle');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const withDataLoaded = require('../components/with_data_loaded')
const {assetPath} = require('../helpers/asset_helper');
const DateHelper = require('../helpers/date_helper');
const CookiesHelper  = require('../helpers/cookies_helper');
const ApartmentHelper  = require('../helpers/apartment_helper');
const ApartmentReviewSection = require('../components/apartment/apartment_review_section');
const ApartmentPrice = require('../components/apartment/apartment_price');
const ApartmentMiddleContent = require('../components/apartment/apartment_middle_content');

const Slider = require('react-slick');

import MDSpinner from "react-md-spinner";
import ReactDOM from 'react-dom';
const Constants = require('../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';

const ApartmentBody = function (props) {
	return (
		<div>
			{props.children}
		</div>
	);
}

class ComboApartmentsPage extends React.Component {

	componentWillMount() {
		Actions.getAuthenticatedUser();
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render() {
		const {store : {apartment, user, apartmentReviews, isProcessing}} = this.props;
		const {daysCnt, totalPrice, title, apartmentKey} = apartment;
		let guestHouse = ApartmentHelper.getGuestHouse(apartment);

		return (
			<ApartmentBody>
				<PageTitle parentClassName="mg-page-title parallax">
					<h2>{guestHouse.name}</h2>
					<h3>{title}</h3>
					<p>&nbsp;</p>
				</PageTitle>

				<ApartmentPrice totalPrice={totalPrice} daysCnt={daysCnt} />
				<ApartmentMiddleContent  apartmentResponse={apartment} pageType='combo' isProcessing={isProcessing} />
				<ApartmentReviewSection isProcessing={isProcessing} user={user} apartmentResponse={apartment} apartmentReviews={apartmentReviews} />
			</ApartmentBody>
		);
	}
}


const WithUserLoaded = withDataLoaded({
		WithData: ComboApartmentsPage,
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
			storeKeys: ['apartmentReviews'],
			loadDataFn: ({view : {apartmentKey}}) => Actions.getApartmentReviews({'apartmentId' : apartmentKey}),
			alwaysLoad : true,
			checkDataFn: ({apartmentReviews}) => apartmentReviews != null
		},
		{
			storeKeys: ['apartment'],
			loadDataFn: ({view : {guestHouseId, apartmentKey}, bookingStage}) => {
				let searchInfo = bookingStage.searchInfo;
				if (searchInfo == null) {
					searchInfo = ApartmentHelper.getDefaultSearchDates();
					Actions.persistSearchInfo(searchInfo);
				}
				Actions.getComboApartmentInHotel({guestHouseId, apartmentKey});
			},
			alwaysLoad : true
		}
	]
});

module.exports = WithUserLoaded;