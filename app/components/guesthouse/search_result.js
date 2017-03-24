const React = require('react');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');
import Checkbox from 'rc-checkbox';

import MDSpinner from "react-md-spinner";

const NoDataResponse = function (props) {
    let {room, children, adult} = props.searchInfo;

    let message ;
    if (room > 6 || children > 12 || adult > 12) {
        message = <span> You are travelling in a crowd. You deserve to get special pricing. Please <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>tell us what you want</Anchor>. We will get back to you in few hours.</span>
    } else {
        message = <span> There are no guest houses matching the selected criterias. Feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</span>
    }



    return (

        <strong>
            {message}
        </strong>
    );
}

const PriceFilters = function (props) {
    return (
        <div>
            <h3 className="mg-widget-filter-title">Your Budget, in US Dollars</h3>
            <div className="mg-options"><Checkbox /><span> $0  - $25 per night</span></div>
            <div className="mg-options"><Checkbox /> $26 - $50 per night</div>
            <div className="mg-options"><Checkbox /> $51 - $75 per night</div>
            <div className="mg-options"><Checkbox /> $76 - $100 per night</div>
            <div className="mg-options"><Checkbox /> $100 - $150 per night</div>
            <div className="mg-options"><Checkbox /> $151 - $200 per night</div>
            <div className="mg-options"><Checkbox /> $200+ per night</div>
        </div>
    );
}

const RoomFacility = function (props) {
    return (
        <div>
            <h3 className="mg-widget-filter-title">Room Facility</h3>
            <div className="mg-options"><Checkbox /> Air conditioning</div>
            <div className="mg-options"><Checkbox /> Table Fan</div>
            <div className="mg-options"><Checkbox /> Ceiling Fan</div>
            <div className="mg-options"><Checkbox /> Balcony</div>
            <div className="mg-options"><Checkbox /> Bathtub</div>
            <div className="mg-options"><Checkbox /> TV Service</div>
        </div>
    );
}

const Facility = function (props) {
    return (
        <div>
            <h3 className="mg-widget-filter-title">Facility</h3>
            <div className="mg-options"><Checkbox /> Free Wifi</div>
            <div className="mg-options"><Checkbox /> Free Parking</div>
            <div className="mg-options"><Checkbox /> Restaurant</div>
            <div className="mg-options"><Checkbox /> Room Service</div>
            <div className="mg-options"><Checkbox /> Fitness Center</div>
            <div className="mg-options"><Checkbox /> Family Rooms</div>
            <div className="mg-options"><Checkbox /> Pet Friendly</div>
            <div className="mg-options"><Checkbox /> Swimming Pool</div>
            <div className="mg-options"><Checkbox /> Spa</div>
        </div>
    );
}

const StarRating = function (props) {
    return (
        <div>
            <h3 className="mg-widget-filter-title">Star Rating</h3>
            <div className="mg-options"><Checkbox /> 1 Stars</div>
            <div className="mg-options"><Checkbox /> 2 Stars</div>
            <div className="mg-options"><Checkbox /> 3 Stars</div>
            <div className="mg-options"><Checkbox /> 4 Stars</div>
            <div className="mg-options"><Checkbox /> 5 Stars</div>
            <div className="mg-options"><Checkbox /> Unrated</div>
        </div>
    );
}


const PropertyTypeFilters = function (props) {
    return (
        <div>
            <h3 className="mg-widget-filter-title">Property Type</h3>
            <div className="mg-options"><Checkbox /> Hotels</div>
            <div className="mg-options"><Checkbox /> Guesthouses</div>
            <div className="mg-options"><Checkbox /> Apartments</div>
            <div className="mg-options"><Checkbox /> Suites</div>
            <div className="mg-options"><Checkbox /> Inns</div>
            <div className="mg-options"><Checkbox /> Cottages</div>
        </div>
    );
}


const Filters = function (props) {
    return (
        <div className="mg-widget-area">
            <aside className="mg-widget-filter">
                <PropertyTypeFilters />
                <PriceFilters />
                <StarRating />
                <Facility />
                <RoomFacility />
            </aside>
        </div>
    );
}


class SearchResult extends React.Component {

    render() {
        const {apartments, isProcessing:{searchingApartments}, searchInfo} = this.props;

        let availableApartments;
        if (!searchingApartments) {  //If no searching - show contents, otherwise show spinner
            if (apartments.length > 0 ) {
                availableApartments = apartments.map(aptResponse => {
                                         return <ApartmentAvailable aptResponse={aptResponse} key={Math.random()} />
                                      });
            } else {
                availableApartments =
                            <div className="mg-avl-room">
                                <div className="row">
                                    <div className="col-sm-2"/>
                                    <div className="col-sm-8">
                                        <div className="alert alert-info" role="alert">
                                            <i className="fa fa-info-circle"></i>
                                            <NoDataResponse searchInfo={searchInfo} />
                                       </div>
                                    </div>
                                    <div className="col-sm-2"/>
                                </div>
                            </div>
            }
        } else {
                availableApartments =  <div className="mg-avl-room">
                                            <div className="row">
                                                <div className="col-sm-5"/>
                                                <div className="col-sm-2">
                                                    <MDSpinner />
                                                </div>
                                                <div className="col-sm-5"/>
                                            </div>
                                        </div>
        }

        return (
                    <div role="tabpanel" className="tab-pane fade in active" id="select-room">
                        <div className="mg-available-rooms">
                            <div className = "row">
                                <div className= "col-md-3">
                                    <h2 className="mg-sec-left-title">Filtered By </h2>
                                    <Filters />
                                </div>
                                <div className= "col-md-9">
                                    <h2 className="mg-sec-left-title">Available Accommodations</h2>
                                    <div className="mg-avl-rooms">
                                        {availableApartments}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              );
        }
}
module.exports = SearchResult;


