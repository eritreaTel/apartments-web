const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const Amenities = require('./amenties');
const Actions = require('../../actions/actions');
const ActionWithLoading = require('../shared/action_with_loading');
const {assetPath} = require('../../helpers/asset_helper');
const CurrencyFormatter = require('currency-formatter');
const PricingHelper = require('../../helpers/pricing_helper');


const onComboApartmentBookNowClicked = function (aptResponse) {
    const {apartmentKey} = aptResponse;
    Actions.cleanUpBookingData();
    Actions.bookApartmentClicked({apartmentKey});
    Actions.setRoute('/additional-services');
}

const onViewApartmentClickedFromSearch = function (aptResponse) {
    let response = Actions.clearApartment();

    if (response && response.status != 'fail') {
        const {apartmentKey, aptCnt} = aptResponse;
        let viewApartmentUrl = ApartmentHelper.generateViewApartmentUrl(aptResponse);

        if (aptCnt == 1) {
            Actions.setRoute(viewApartmentUrl);
        } else {
            Actions.viewComboApartmentClickedFromSearch({apartmentKey});
            Actions.setRoute(viewApartmentUrl);
        }
    }
}

class ApartmentAvailable extends React.Component {

    render() {
        const {aptResponse} = this.props;
        let {displayMessage, apartments, daysCnt, totalPrice, title, pricePerDay} = aptResponse;

        let totalApartmentPrice  = PricingHelper.getTotalPrice(totalPrice, null);
        let totalPriceIntegerPart = '$' + Math.floor(totalApartmentPrice);
        let totalPriceDecimalPart = parseFloat(totalApartmentPrice % 1).toFixed(2).toString().substr(1, 3); // Take .00 instead of 0.00
        let guestHouse = ApartmentHelper.getGuestHouse(aptResponse);

        let bestPhoto = ApartmentHelper.getComboApartmentBestPhoto(apartments);
        let comboAmenities = ApartmentHelper.getComboAmenities(aptResponse);
        let amenitiesWithValueOne = ApartmentHelper.getAmenitiesByValue(comboAmenities, 1);

        let apartmentType = _.startCase(_.toLower(guestHouse.type));
        title =  _.truncate(title, {length : 20, omission : '..'})

        return (
            <div className="mg-avl-room">
                <div className="row">
                    <div className="col-md-5">
                        <img src = {assetPath(bestPhoto)} alt="" className="image-height-265 img-responsive"/>
                    </div>
                    <div className="col-md-7">
                        <h3 className="mg-avl-room-title"><Anchor onClick={()=>{onViewApartmentClickedFromSearch(aptResponse)}}><label className="search-result-heading">{guestHouse.name}</label></Anchor> <span>{totalPriceIntegerPart}<sup>{totalPriceDecimalPart}</sup>/{daysCnt} Days</span></h3>
                        <div className="apartment-details-section">
                            <div  className="row">
                                <div className="col-md-6">
                                    <span><span className="font-weight-400">Type: </span>{apartmentType} </span>
                                </div>
                                <div className="col-md-6">
                                    <span><span className="font-weight-400">Title: </span> {title} </span>
                                </div>
                            </div>
                            <div  className="row">
                                <div className="col-md-6">
                                    <span><span className="font-weight-400">Price per Day: </span>${pricePerDay}</span>
                                </div>
                                <div className="col-md-6">
                                    <span><span className="font-weight-400">Location: </span>{guestHouse.city}/{guestHouse.neighborhood}</span>
                                </div>
                            </div>
                        </div>
                        <Amenities amentiesToDisplay="6" amenities={amenitiesWithValueOne} outerDivClass="row mg-room-fecilities" innerDivClass="col-md-6" />
                        <div  className="row">
                            <div className="col-md-6">
                                <Anchor onClick={()=>{onViewApartmentClickedFromSearch(aptResponse)}} className="btn btn-dark ">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                            </div>
                            <div className="col-md-6">
                                <Anchor onClick={() => {onComboApartmentBookNowClicked(aptResponse)}} className="btn btn-main">Book Now</Anchor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentAvailable;
