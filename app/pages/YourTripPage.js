const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const withDataLoaded = require('../components/with_data_loaded');
const Actions = require('../actions/actions');
const DateHelper = require('../helpers/date_helper');
const StringHelper = require('../helpers/string_helper');

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
	let activeTripId = props.activeTripId;
	let tripInfo, activeCssClass = '';
	let subMenus = items.map(item => {
						let tripInfo = item.subsection === false ? props.section : props.section + '-' + _.lowerCase(item.label);
						tripInfo = StringHelper.makeStringUrlFriendly(tripInfo);
						activeCssClass = (activeTripId == item.id) ? 'plan-your-trip-active-sub-menu' : '';
						return <span key={item.id}><Anchor className={activeCssClass} onClick={()=> onTripClicked(item.id, tripInfo)}>{item.label}</Anchor></span>
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
			<CreateSubMenu items={ugandaOverview} section="uganda-overview" activeTripId={props.activeTripId} />
		</Collapsible>
	);
}


const  NationalParksMenu = function (props) {
	var nationalParks = [
		{ id: '10', label: 'Murchison Falls' },
		{ id: '3', label: 'Bwindi Impenetrable' },
		{ id: '7', label: 'Queen Elizabeth' },
		{ id: '5', label: 'Kibale' },
		{ id: '9', label: 'Lake Mburo' },
		{ id: '8', label: 'Kidepo' },
		{ id: '11', label: 'Rwenzori Mountain' },
		{ id: '4', label: 'Mgahinga Gorilla' },
		{ id: '12', label: 'Semuliki' },
        { id: '6', label: 'Mount Elgon' }
	];

	return (
		<Collapsible trigger="National Parks" open={true}>
			<CreateSubMenu items={nationalParks} section="national-parks" activeTripId={props.activeTripId} />
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
			<CreateSubMenu items={kampalaCity} section="kampala-city" activeTripId={props.activeTripId} />
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
			<CreateSubMenu items={touristAttractions} section="tourist-attractions" />
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
			<CreateSubMenu items={planningYourItinerary} section="planning-your-itinerary" />
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
			<CreateSubMenu items={gorillaTrekking} section="gorilla-trekking" />
		</Collapsible>
	);
}

const LeftSection = function (props) {
	let activeTripId = props.tripId;
	return (
		<div className="col-md-3">
			<div className="mg-widget-area">
				<aside className="mg-widget-plan-your-trip">
					<UgandaOverViewMenu  activeTripId={activeTripId}/>
					<NationalParksMenu activeTripId={activeTripId}/>
					<GorillaTrekkingMenu activeTripId={activeTripId}/>
					<KampalaCityMenu activeTripId={activeTripId}/>
					<TouristAttractionsMenu activeTripId={activeTripId}/>
					<PlanningYourItineraryMenu activeTripId={activeTripId}/>
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
		const {store : {trip, view , isProcessing :{loadingTrip} }} = this.props;

		let middleSection;
		if (loadingTrip) {
			middleSection = <div className="load-spin"> <MDSpinner /> </div>
		} else {
			middleSection = <TripContent trip={trip} />
		}

		let tripId = (view.tripId != undefined) ? view.tripId : 1;

		let content = 	<div className="mg-blog-list">
							<div className="container">
								<div className="row">
									<LeftSection tripId={tripId}/>
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
