const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Amenities = require('./amenties');
const Actions = require('../../actions/actions');
const ActionWithLoading = require('../shared/action_with_loading');
const {assetPath} = require('../../helpers/asset_helper');
const CurrencyFormatter = require('currency-formatter');
const PricingHelper = require('../../helpers/pricing_helper');


const onBookNowClicked = function (apartmentId) {
    Actions.bookApartmentClicked({apartmentId});

}

class ApartmentAvailable extends React.Component {

    render() {
        const {apartment } = this.props;
        let totalApartmentPrice  = PricingHelper.getTotalPrice(apartment, null);
        let totalPriceIntegerPart = '$' + Math.floor(totalApartmentPrice);
        let totalPriceDecimalPart = parseFloat(totalApartmentPrice % 1).toFixed(2).toString().substr(1, 3); // Take .00 instead of 0.00


        return (
            <div className="mg-avl-room">
                <div className="row">
                    <div className="col-sm-5">
                        <img src = {assetPath(apartment.best_photo)} alt="" className="image-height-265 img-responsive"/>
                    </div>
                    <div className="col-sm-7">
                        <h3 className="mg-avl-room-title"><Anchor onClick={()=>{Actions.setRoute('apartment/'+ apartment.id);}}>{apartment.title}</Anchor> <span>{totalPriceIntegerPart}<sup>{totalPriceDecimalPart}</sup>/Total</span></h3>
                        <p>{apartment.medium_description}</p>
                        <Amenities amentiesToDisplay="6" amenities={apartment.amenities} outerDivClass="row mg-room-fecilities" innerDivClass="col-sm-6" />

                        <Anchor onClick={()=>{Actions.setRoute('apartment/'+ apartment.id);}} className="btn btn-dark ">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                        <Anchor onClick={() => {onBookNowClicked(apartment.id)}} className="btn btn-main pull-right">Book Now</Anchor>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ApartmentAvailable;
