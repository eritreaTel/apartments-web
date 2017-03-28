const React = require('react');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');
const ApartmentFilterHelper = require('../../helpers/apartment_filter_helper');
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


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
        <strong> {message} </strong>
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
            <div className="mg-options"><Checkbox /> TV</div>
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


class  PropertyType extends  React.Component {

    onPropertyTypeChanged(apartmentTypes) {
        console.log(apartmentTypes);
        let filteredApartments  = ApartmentFilterHelper.filterApartmentByType(apartmentTypes, this.props.apartments);
        Actions.updateFilteredApartments({filteredApartments});

    }

    render() {
        return (
            <div>
                <h3 className="mg-widget-filter-title">Property Type</h3>
                <CheckboxGroup name="fruits"  value={this.props.propertyType} onChange={this.onPropertyTypeChanged.bind(this)}>
                    <div className="mg-options"><Checkbox value='hotel'/> Hotels</div>
                    <div className="mg-options"><Checkbox value='suite'/> Suites</div>
                    <div className="mg-options"><Checkbox value='apartment'/> Apartments</div>
                    <div className="mg-options"><Checkbox value='guest house'/> Guesthouses</div>
                    <div className="mg-options"><Checkbox value='cottage'/> Cottages</div>
                    <div className="mg-options"><Checkbox value='inn'/> Inns</div>
                </CheckboxGroup>
            </div>
        );
    }
}

const Neighboorhood = function (props) {

    return (
        <div>
            <h3 className="mg-widget-filter-title">Neighborhood</h3>
            <div className="mg-options"><Checkbox /> Bugoloobi</div>
            <div className="mg-options"><Checkbox /> Bukoto</div>
            <div className="mg-options"><Checkbox /> Busega</div>
            <div className="mg-options"><Checkbox /> Butabika</div>
            <div className="mg-options"><Checkbox /> Bwaise</div>
            <div className="mg-options"><Checkbox /> Ggaba</div>
            <div className="mg-options"><Checkbox /> Kabalagala </div>
            <div className="mg-options"><Checkbox /> Kaleerwe</div>
            <div className="mg-options"><Checkbox /> Kampala Hill</div>
            <div className="mg-options"><Checkbox /> Kamwookya</div>
            <div className="mg-options"><Checkbox /> Kansanga</div>
            <div className="mg-options"><Checkbox /> Kanyanya</div>
            <div className="mg-options"><Checkbox /> Kasubi hill</div>
            <div className="mg-options"><Checkbox /> Katanga Slum</div>
            <div className="mg-options"><Checkbox /> Katwe</div>
            <div className="mg-options"><Checkbox /> Kawaala</div>
            <div className="mg-options"><Checkbox /> Kawempe</div>
            <div className="mg-options"><Checkbox /> Kibuli</div>
            <div className="mg-options"><Checkbox /> Kibuye</div>
            <div className="mg-options"><Checkbox /> Kigoowa</div>
            <div className="mg-options"><Checkbox /> Kikaaya</div>
            <div className="mg-options"><Checkbox /> Kisaasi</div>
            <div className="mg-options"><Checkbox /> Kiwaatule</div>
            <div className="mg-options"><Checkbox /> Kololo</div>
            <div className="mg-options"><Checkbox /> Kulambiro</div>
            <div className="mg-options"><Checkbox /> Lubaga</div>
            <div className="mg-options"><Checkbox /> Lugogo</div>
            <div className="mg-options"><Checkbox /> Lungujja</div>
            <div className="mg-options"><Checkbox /> Luzira</div>
            <div className="mg-options"><Checkbox /> Makerere</div>
            <div className="mg-options"><Checkbox /> Makerere Kikoni</div>
            <div className="mg-options"><Checkbox /> Makindye</div>
            <div className="mg-options"><Checkbox /> Mbuya</div>
            <div className="mg-options"><Checkbox /> Mengo</div>
            <div className="mg-options"><Checkbox /> Mpererwe</div>
            <div className="mg-options"><Checkbox /> Mulago</div>
            <div className="mg-options"><Checkbox /> Munyonyo</div>
            <div className="mg-options"><Checkbox /> Muyenga</div>
            <div className="mg-options"><Checkbox /> Naakulabye</div>
            <div className="mg-options"><Checkbox /> Nakasero</div>
            <div className="mg-options"><Checkbox /> Nakawa</div>
            <div className="mg-options"><Checkbox /> Namirembe Hill</div>
            <div className="mg-options"><Checkbox /> Namungoona</div>
            <div className="mg-options"><Checkbox /> Namuwongo</div>
            <div className="mg-options"><Checkbox /> Nateete</div>
            <div className="mg-options"><Checkbox /> Ndeeba</div>
            <div className="mg-options"><Checkbox /> Nsambya</div>
            <div className="mg-options"><Checkbox /> Ntinda</div>
            <div className="mg-options"><Checkbox /> Port Bell</div>
            <div className="mg-options"><Checkbox /> Wandegeya</div>
        </div>
    );
}

const Filters = function (props) {
    let filterCriteria = props.filterCriteria;
    return (
        <div className="mg-widget-area">
            <aside className="mg-widget-filter">
                <PropertyType propertyType={filterCriteria.propertyType} apartments={props.apartments} filteredApartments={props.filteredApartments}/>
            </aside>
        </div>
    );
}


class SearchResult extends React.Component {

    render() {
        const {filteredApartments, apartments, isProcessing:{searchingApartments}, bookingStage : {searchInfo, filterCriteria}} = this.props;

        let availableApartments;
        if (!searchingApartments) {  //If no searching - show contents, otherwise show spinner
            if (filteredApartments.length > 0 ) {
                availableApartments = filteredApartments.map(aptResponse => {
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
                                    <span className="mg-sec-left-title">Filtered By </span>
                                    <div className="mg-avl-rooms">
                                        <Filters filterCriteria= {filterCriteria} filteredApartments={filteredApartments} apartments={apartments} />
                                    </div>
                                </div>
                                <div className= "col-md-9">
                                    <span className="mg-sec-left-title">Available Accommodations : </span> <span className="mg-sec-left-sub-title">{filteredApartments.length} Properties</span>
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


