const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');

const bookBestApartmentClicked = function (apartmentId) {
    Actions.bookBestApartmentClicked({apartmentId});
    Actions.setRoute('/guest-houses');
}

const viewBestApartmentClicked = function (apartmentId) {
    Actions.viewBestApartmentClicked({apartmentId});
    Actions.setRoute('/apartment/' + apartmentId);
}

class ApartmentMedium extends React.Component {

    render() {
        const {apartment} = this.props;
        let pricingInfo = apartment.pricingInfo;

        return (
            <figure className="mg-room">
                <img src={assetPath(apartment.best_photo)} alt="img11" className="img-responsive"/>
                <figcaption>
                    <h2>{apartment.title}</h2>
                    <div className="mg-room-rating"><i className="fa fa-star"></i> {apartment.star_rating}</div>
                    <div className="mg-room-price">{ApplicationHelper.formatCurrency(pricingInfo.total_price)}<sup>.00</sup><span className="homepage-total_price">/{pricingInfo.days_cnt} Days</span></div>
                    <p>{apartment.short_description}</p>
                    <Anchor onClick={() => {viewBestApartmentClicked(apartment.id);}} className="btn btn-link">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                    <Anchor onClick={() =>{bookBestApartmentClicked(apartment.id);}} className="btn btn-main">Book</Anchor>
                </figcaption>
            </figure>
        );
    }
}

module.exports = ApartmentMedium;
