const React = require('react');
const ApartmentAvailable = require('../apartment/apartment_available');
const Actions = require('../../actions/actions');
const Anchor = require('../shared/anchor');
const ApartmentFilterHelper = require('../../helpers/apartment_filter_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const ReactSlider = require('react-slider');
var Select = require('react-select');
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';



import MDSpinner from "react-md-spinner";


const NoDataResponse = function (props) {
    let {room, children, adult} = props.searchInfo;

    let message ;
    if (room > 6 || children > 12 || adult > 12) {
        message = <span> You are travelling in a big group. You deserve to get special, manually customized, pricing. Please <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}> click in this link and tell us what you want</Anchor>. We will get back to you in few hours.</span>
    } else {
        message = <span> There are no hotels matching the selected criterias. Feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</span>
    }

    return (
        <strong> {message} </strong>
    );
}

class ShowResults  extends React.Component {
    onShowResultsChanged(val) {
        Actions.filterCriteriaUpdated({'showMe' : val.value});
    }

    render() {
        var options = [
            { value: 500, label: 'All' },
            { value: 50,  label: '50' },
            { value: 20,  label: '20' },
            { value: 10,  label: '10' },
            { value: 5,   label: '5' }
        ];

        return (
            <Select {...this.props}  placeholder='All' clearable={false}  searchable={true}  options={options} onChange={this.onShowResultsChanged.bind(this)} />
        );
    }
}

class SortByResults  extends React.Component {

    onSortByResultsChanged(val) {
        Actions.filterCriteriaUpdated({'sortBy' : val.value});
    }

    render() {
        var options = [
            { value: 'popularity', label: 'Popularity' },
            { value: 'cheapest-first', label: 'Cheapest First' },
            { value: 'expensive-first', label: 'Expensive First' }
        ];

        return (
            <Select {...this.props} placeholder='popularity' clearable={false}  searchable={true}  options={options} onChange={this.onSortByResultsChanged.bind(this)} />
        );
    }
}

class PriceFilters extends React.Component {
    onPriceFilterChanged(priceRange) {
        Actions.filterCriteriaUpdated({'priceRange' : priceRange});
    }

    render() {
        const priceRange = this.props.priceRange;
        const filteredApartments = this.props.filteredApartments;
        let minPrice = 5;
        let maxPrice = 200;

        let min = priceRange != null && priceRange.length > 0? priceRange[0] : minPrice;
        let max = priceRange != null && priceRange.length > 0? priceRange[1] : maxPrice;
        let defValue = [min, max];

        return (
            <div className="price-filter">
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

        let neighborhoods = ApartmentFilterHelper.getNeighborhoods();
        var styledHoods = neighborhoods.map(hood => {
                return <div key={Math.random()} className="mg-options"><Checkbox value={hood.name}/><span> {hood.name}</span></div>
        });

        return (
            <div>
                <CheckboxGroup name="location"  value={this.props.locations} onChange={this.onLocationChanged.bind(this)}>
                    {styledHoods}
                </CheckboxGroup>
            </div>
        );
    }
}

class Filters extends React.Component {

    onResetFiltersClicked() {
        Actions.filterCriteriaUpdated({propertyType : [], priceRange : [], starRating : [], locations: [], showMe : 500, sortBy : 'popularity'});
        window.scrollTo(0, 40);
    }

    render() {
        let filterCriteria = this.props.filterCriteria;
        return (
            <div className="mg-widget-area">
                <div className="filter-by-block">
                <h1>Filter By</h1>
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                        Property Type
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <PropertyType propertyType={filterCriteria.propertyType} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-group" id="accordion-v2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion-v2" href="#collapseTwo">
                                        Price Per Night
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </h2>
                            </div>
                                <div id="collapseTwo" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <PriceFilters priceRange={filterCriteria.priceRange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-group" id="accordion-v3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion-v3" href="#collapseThree">
                                        Star Rating
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <StarRating starRating={filterCriteria.starRating} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-group" id="accordion-v4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion-v4" href="#collapseFour">
                                        Neighborhood
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <Location locations={filterCriteria.locations} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn-u btn-brd btn-brd-hover btn-u-lg btn-u-sea-shop btn-block" onClick={this.onResetFiltersClicked.bind(this)}>Reset</button>

                </div>
            </div>
        )
    }
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
                                    <Filters filterCriteria= {filterCriteria} filteredApartments={filteredApartments} apartments={apartments} />
                                </div>
                                <div className= "col-md-9">
                                    <div className="row margin-bottom-5">
                                        <div className="col-sm-5 result-category">
                                            <h2>Results</h2>
                                            <small className="shop-bg-red badge-results">{filteredApartments.length}</small>
                                        </div>
                                        <div className="col-sm-7">
                                            <ul className="list-inline clear-both">
                                                <li></li>
                                                <li className="sort-list-btn">
                                                    <h3>Sort By :</h3>
                                                    <SortByResults className="sort-results-combo" value= {filterCriteria.sortBy} filteredApartments={filteredApartments}/>
                                                </li>
                                                <li className="sort-list-btn">
                                                    <h3>Show :</h3>
                                                    <ShowResults className="show-results-combo" value= {filterCriteria.showMe} filteredApartments={filteredApartments} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className= "col-md-12">
                                            <div className="mg-avl-rooms">
                                                {availableApartments}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              );
        }
}
module.exports = SearchResult;


