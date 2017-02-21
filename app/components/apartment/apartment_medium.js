const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');

const bookBestApartmentClicked = function (aptResponse) {
    const {apartmentKey} = aptResponse;
    Actions.bookBestApartmentClicked({apartmentKey});
    Actions.setRoute('/guest-houses');
}

const viewBestApartmentClicked = function (aptResponse) {
    Actions.viewBestApartmentClicked({apartmentId});
    Actions.setRoute('/apartment/' + apartmentId);
}

class ApartmentMedium extends React.Component {

    render() {
        const {aptResponse} = this.props;
        const {displayMessage, apartments, daysCnt, totalPrice, title, starRating, shortDesciption} = aptResponse;
        let bestPhoto = ApartmentHelper.getComboApartmentBestPhoto(apartments);

        return (
            <figure className="mg-room">
                <img src={assetPath(bestPhoto)} alt="img11" className="img-responsive"/>
                <figcaption>
                    <h2>{title}</h2>
                    <div className="mg-room-rating"><i className="fa fa-star"></i> {starRating}</div>
                    <div className="mg-room-price">{ApplicationHelper.formatCurrency(totalPrice)}<sup>.00</sup><span className="homepage-total_price">/{daysCnt} Days</span></div>
                    <p>{shortDesciption}</p>
                    <Anchor onClick={() => {viewBestApartmentClicked(aptResponse);}} className="btn btn-link">View Details <i className="fa fa-angle-double-right"></i></Anchor>
                    <Anchor onClick={() =>{bookBestApartmentClicked(aptResponse);}} className="btn btn-main">Book</Anchor>
                </figcaption>
            </figure>
        );
    }
}

module.exports = ApartmentMedium;
