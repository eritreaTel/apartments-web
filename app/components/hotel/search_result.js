const React = require('react');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');
const ApartmentFilterHelper = require('../../helpers/apartment_filter_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const ReactSlider = require('react-slider');
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';



import MDSpinner from "react-md-spinner";

const NoDataResponse = function (props) {
    let {room, children, adult} = props.searchInfo;

    let message ;
    if (room > 6 || children > 12 || adult > 12) {
        message = <span> You are travelling in a crowd. You deserve to get special pricing. Please <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>tell us what you want</Anchor>. We will get back to you in few hours.</span>
    } else {
        message = <span> There are no hotels matching the selected criterias. Feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</span>
    }

    return (
        <strong> {message} </strong>
    );
}

class PriceFilters extends React.Component {
    onPriceFilterChanged(priceRange) {
        Actions.filterCriteriaUpdated({'priceRange' : priceRange});
    }

    render() {
        const priceRange = this.props.priceRange;
        const filteredApartments = this.props.filteredApartments;
        let minPrice = 5;
        let maxPrice = '200';

        let min = priceRange != null && priceRange.length > 0? priceRange[0] : minPrice;
        let max = priceRange != null && priceRange.length > 0? priceRange[1] : maxPrice;
        let defValue = [min, max];

        return (
            <div className="price-filter">
                <h3 className="mg-widget-filter-title">Price/per night, in US Dollars</h3>
                <div className="price-filter-captions">
                    <span className="font-size-15">Min Price: <span className="font-weight-400">${min} </span></span> &nbsp; <span className="font-size-15">Max Price: <span className="font-weight-400">${max} </span></span>
                </div>
                <ReactSlider  className="horizontal-slider" defaultValue={defValue} withBars={true} min={minPrice} max={maxPrice} step={5} minDistance={5} onAfterChange={this.onPriceFilterChanged.bind(this)} >
                    <div className="my-handle"><span className="font-size-15 font-weight-400">${min}</span></div>
                    <div className="my-handle"><span className="font-size-15 font-weight-400">${max}</span></div>
                </ReactSlider>
            </div>
        );
    }
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

class StarRating extends React.Component {
    onStarRatingFilterChanged(starRating) {
        Actions.filterCriteriaUpdated({'starRating' : starRating});
    }

    render () {
        return (
            <div>
                <h3 className="mg-widget-filter-title">Star Rating</h3>

                <CheckboxGroup name="starRating" value={this.props.starRating}  onChange={this.onStarRatingFilterChanged.bind(this)}>
                    <div className="mg-options"><Checkbox value='0'/> <span>Unrated</span></div>
                    <div className="mg-options"><Checkbox value='1'/> <span>1 Star</span></div>
                    <div className="mg-options"><Checkbox value='2'/> <span>2 Star</span></div>
                    <div className="mg-options"><Checkbox value='3'/> <span>3 Star</span></div>
                    <div className="mg-options"><Checkbox value='4'/> <span>4 Star</span></div>
                    <div className="mg-options"><Checkbox value='5'/> <span>5 Star</span></div>
                </CheckboxGroup>
            </div>
        );
    }
}


class  PropertyType extends  React.Component {

    onPropertyTypeChanged(apartmentTypes) {
        Actions.filterCriteriaUpdated({'propertyType' : apartmentTypes});
    }

    render() {
        return (
            <div>
                <h3 className="mg-widget-filter-title">Property Type</h3>
                <CheckboxGroup name="propertyType"  value={this.props.propertyType} onChange={this.onPropertyTypeChanged.bind(this)}>
                    <div className="mg-options"><Checkbox value='hotel'/> <span>Hotels</span></div>
                    <div className="mg-options"><Checkbox value='suite'/> <span>Suites</span></div>
                    <div className="mg-options"><Checkbox value='apartment'/> <span>Apartments</span></div>
                    <div className="mg-options"><Checkbox value='guest house'/> <span>Guesthouses</span></div>
                    <div className="mg-options"><Checkbox value='cottage'/> <span>Cottages</span></div>
                    <div className="mg-options"><Checkbox value='motel'/> <span>Motels</span></div>
                </CheckboxGroup>
            </div>
        );
    }
}

class Location extends React.Component{

    onLocationChanged(locations) {
        Actions.filterCriteriaUpdated({'locations' : locations});
    }

    render() {
        return (
            <div>
                <h3 className="mg-widget-filter-title">Neighborhood</h3>
                <CheckboxGroup name="location"  value={this.props.locations} onChange={this.onLocationChanged.bind(this)}>
                    <div className="mg-options"><Checkbox value='Bugolobi'/><span> Bugolobi</span></div>
                    <div className="mg-options"><Checkbox value='Bunga'/> <span>Bunga</span></div>
                    <div className="mg-options"><Checkbox value='Bukoto'/> <span>Bukoto</span></div>
                    <div className="mg-options"><Checkbox value='Kabale'/> <span>Kabale</span></div>
                    <div className="mg-options"><Checkbox value='Kabusu'/> <span>Kabusu</span></div>
                    <div className="mg-options"><Checkbox value='Kanyanya'/> <span>Kanyanya</span></div>
                    <div className="mg-options"><Checkbox value='Makindye'/> <span>Makindye</span></div>
                    <div className="mg-options"><Checkbox value='Mulago'/> <span>Mulago</span></div>
                    <div className="mg-options"><Checkbox value='Muyenga'/> <span>Muyenga</span></div>
                    <div className="mg-options"><Checkbox value='Naalya'/> <span>Naalya</span></div>
                    <div className="mg-options"><Checkbox value='Naguru'/> <span>Naguru</span></div>
                    <div className="mg-options"><Checkbox value='Nakasero'/> <span>Nakasero</span></div>
                    <div className="mg-options"><Checkbox value='Namirembe'/> <span>Namirembe</span></div>
                    <div className="mg-options"><Checkbox value='Nsambya'/> <span>Nsambya</span></div>
                    <div className="mg-options"><Checkbox value='Rubaga'/> <span>Rubaga</span></div>
                </CheckboxGroup>
            </div>
        );
    }
}

const Filters = function (props) {
    let filterCriteria = props.filterCriteria;
    return (
        <div className="mg-widget-area">
            <aside className="mg-widget-filter">
                <PropertyType propertyType={filterCriteria.propertyType} />
                <PriceFilters priceRange={filterCriteria.priceRange} />
                <StarRating starRating={filterCriteria.starRating} />
                <Location locations={filterCriteria.locations} />

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


