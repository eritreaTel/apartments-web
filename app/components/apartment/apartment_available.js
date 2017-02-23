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
}

const onViewApartmentClickedFromSearch = function (aptResponse) {
    const {apartmentKey, aptCnt} = aptResponse;
    let viewApartmentUrl = ApartmentHelper.generateViewApartmentUrl(aptResponse);

    if (aptCnt == 1) {
        Actions.setRoute(viewApartmentUrl);
    } else {
        Actions.viewComboApartmentClickedFromSearch({apartmentKey});
        Actions.setRoute(viewApartmentUrl);
    }
}

class ApartmentAvailable extends React.Component {

    render() {
        const {aptResponse} = this.props;
        const {displayMessage, apartments, daysCnt, totalPrice, title} = aptResponse;

        let totalApartmentPrice  = PricingHelper.getTotalPrice(totalPrice, null);
        let totalPriceIntegerPart = '$' + Math.floor(totalApartmentPrice);
        let totalPriceDecimalPart = parseFloat(totalApartmentPrice % 1).toFixed(2).toString().substr(1, 3); // Take .00 instead of 0.00
        let guestHouse = ApartmentHelper.getGuestHouse(aptResponse);

        let bestPhoto = ApartmentHelper.getComboApartmentBestPhoto(apartments);
        let comboAmenities = ApartmentHelper.getComboAmenities(aptResponse);

        return (
            <div className="mg-avl-room">
                <div className="row">
                    <div className="col-sm-5">
                        <img src = {assetPath(bestPhoto)} alt="" className="image-height-265 img-responsive"/>
                    </div>
                    <div className="col-sm-7">
                        <h3 className="mg-avl-room-title"><Anchor onClick={()=>{Actions.setRoute(comboUrl);}}><label className="search-result-heading">{guestHouse.name}</label>, <label className="search-result-subheading">{title}</label></Anchor> <span>{totalPriceIntegerPart}<sup>{totalPriceDecimalPart}</sup>/{daysCnt} Days</span></h3>
                        <p>{displayMessage} ...</p>
                        <Amenities amentiesToDisplay="6" amenities={comboAmenities} outerDivClass="row mg-room-fecilities" innerDivClass="col-sm-6" />

                        <Anchor onClick={()=>{onViewApartmentClickedFromSearch(aptResponse)}} className="btn btn-dark ">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                        <Anchor onClick={() => {onComboApartmentBookNowClicked(aptResponse)}} className="btn btn-main pull-right">Book Now</Anchor>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentAvailable;
