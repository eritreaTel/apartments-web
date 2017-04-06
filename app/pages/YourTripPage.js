const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const withDataLoaded = require('../components/with_data_loaded');
const Actions = require('../actions/actions');
const DateHelper = require('../helpers/date_helper')

import MDSpinner from "react-md-spinner";
import Collapsible from 'react-collapsible';


const onTripClicked = function (tripId, tripInfo) {
	let isProcessing = {loadingTrip: true};
	Actions.setIsProcessing(isProcessing);

	let tripPromise = Actions.getTrip({tripId})
	tripPromise.then(result => {
		let isProcessing = {loadingTrip: false};
		Actions.setIsProcessing(isProcessing);
		Actions.setRoute('/your-trip/' + tripInfo + '/' +tripId);
	});
}

const CreateSubMenu = function (props) {
	let items = props.items;
	let subMenus = items.map(item => {
						let tripInfo = item.subsection === false ? props.section : props.section + '-' + _.lowerCase(item.label);
						return <span key={item.id}><Anchor onClick={()=> onTripClicked(item.id, tripInfo)}>{item.label}</Anchor></span>
					});

	return (
		<div className="plan-your-trip-sub-menu">
			{subMenus}
		</div>
	);
}



const UgandaOverViewMenu = function (props) {
	var ugandaOverview = [
		{ id: '1', label: 'Overview', subsection : false },
		{ id: '2', label: 'Practicalities' }
	];

	return (
		<Collapsible trigger="Uganda Overview" open={true}>
			<CreateSubMenu items={ugandaOverview} section="uganda-overview" />
		</Collapsible>
	);
}


const  NationalParksMenu = function (props) {
	var nationalParks = [
		{ id: '90', label: 'Queen Elizabeth' },
		{ id: '91', label: 'Bwindi Impenetrable' },
		{ id: '92', label: 'Murchison Falls' },
		{ id: '93', label: 'Mgahinga Gorilla' },
		{ id: '94', label: 'Lake Mburo' },
		{ id: '95', label: 'Kidepo' },
		{ id: '96', label: 'Rwenzori Mountain' },
		{ id: '97', label: 'Mount Elgon' },
		{ id: '98', label: 'Semuliki' }
	];

	return (
		<Collapsible trigger="National Parks" open={true}>
			<CreateSubMenu items={nationalParks} />
		</Collapsible>
	);
}

const  KampalaCityMenu = function (props) {
	var kampalaCity = [
		{ id: '80', label: 'Hindu Temple' },
		{ id: '81', label: 'Big Mosque' },
		{ id: '82', label: 'Kings House' }
	];

	return (
		<Collapsible trigger="Kampala City" open={true}>
			<CreateSubMenu items={kampalaCity} />
		</Collapsible>
	);
}

const TouristAttractionsMenu = function (props) {
	var touristAttractions = [
		{ id: '70', label: 'Cultural Hotspots' },
		{ id: '71', label: 'Igongo Cultural Centre' }
	];

	return (
		<Collapsible trigger="Tourist Attractions" open={true}>
			<CreateSubMenu items={touristAttractions} />
		</Collapsible>
	);
}

const PlanningYourItineraryMenu = function (props) {
	var planningYourItinerary = [
		{ id: '100', label: 'Tour East Uganda' },
		{ id: '101', label: 'Tour West Uganda' },
		{ id: '102', label: 'Tour North Uganda' },
		{ id: '103', label: 'Tour South Uganda' },
		{ id: '104', label: 'Tour Kampala' }
	];

	return (
		<Collapsible trigger="Planning Your Itinerary" open={true}>
			<CreateSubMenu items={planningYourItinerary} />
		</Collapsible>
	);
}


const GorillaTrekkingMenu = function (props) {
	var gorillaTrekking = [
		{ id: '60', label: 'Overview' },
		{ id: '61', label: 'Permit' }
	];

	return (
		<Collapsible trigger="Gorilla Trekking" open={true}>
			<CreateSubMenu items={gorillaTrekking} />
		</Collapsible>
	);
}

const LeftSection = function (props) {
	return (
		<div className="col-md-3">
			<div className="mg-widget-area">
				<aside className="mg-widget-plan-your-trip">
					<UgandaOverViewMenu />
					<GorillaTrekkingMenu />
					<NationalParksMenu />
					<KampalaCityMenu />
					<TouristAttractionsMenu />
					<PlanningYourItineraryMenu />
				</aside>
			</div>
		</div>
	);
}


const onBlogClicked = function (blogId) {
	let isProcessing = {loadingBlog: true};
	Actions.setIsProcessing(isProcessing);

	let blogPromise = Actions.getBlog({blogId})
	blogPromise.then(result => {
		let isProcessing = {loadingBlog: false};
		Actions.setIsProcessing(isProcessing);
		Actions.setRoute('/blog/'+blogId);
	});
}

const TripBody = function (props) {
	return (
		<div>
			{<PageTitle parentClassName="mg-page-title-space parallax"/>}
			{props.children}
		</div>
	);
}

const TripHeader = function (props) {
	let trip = props.trip;
	let subsection = (trip.sub_section == '' || trip.sub_section == undefined) ? '' : ': ' + trip.sub_section;
	return (
		<header>
			<h2 className="mg-post-title"> <Anchor onClick={()=>{Actions.setRoute('/your-trip')}}> {trip.section}{subsection} </Anchor> </h2>
			<div className="mg-post-meta">
				<span>{ DateHelper.formatDate(trip.created_at, 'D MMM, YYYY')}</span>
				<span>by UgandaBooking team</span>
			</div>
		</header>
	);
};

const TripContent = function (props) {

	let trip = props.trip; ;
	return  (
		<div className="col-md-9">
			<article className="mg-post">
				<TripHeader trip={trip} />
				<div dangerouslySetInnerHTML={{__html: trip.content}}></div>
			</article>
		</div>

	);
}


class TripPage extends React.Component {

	render() {
		const {store : {trip, isProcessing :{loadingTrip} }} = this.props;

		let middleSection;
		if (loadingTrip) {
			middleSection = <div className="load-spin"> <MDSpinner /> </div>
		} else {
			middleSection = <TripContent trip={trip} />
		}

		let content = 	<div className="mg-blog-list">
							<div className="container">
								<div className="row">
									<LeftSection/>
									{middleSection}
								</div>
							</div>
						</div>

		return (
			<TripBody>
				{content}
			</TripBody>
		);
	}

}

const WithUserLoaded = withDataLoaded({
	WithData: TripPage,
	WithoutData: () => (
		<TripBody >
			<div className="mg-blog-list">
				<div className="container">
					<div className="row">
						<LeftSection/>
						<div className="load-spin">
							<MDSpinner />
						</div>
					</div>
				</div>
			</div>
		</TripBody>
	),
	data: [
		{
			storeKeys: ['trip'],
			loadDataFn: ({view : {tripId}}) => Actions.getTrip({tripId}),
			alwaysLoad : true
		},
	]
});

module.exports = WithUserLoaded;
