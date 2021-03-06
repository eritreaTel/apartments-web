const React = require('react');
const Anchor = require('../shared/anchor')
const ApplicationHelper = require('../../helpers/application_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');

import {NotificationContainer, NotificationManager} from 'react-notifications';

const bookBestApartmentClicked = function (aptResponse) {
    const {apartmentKey} = aptResponse;
    Actions.cleanUpBookingData();
    let bookApartmentResponse = Actions.bookBestApartmentClicked({apartmentKey});

    bookApartmentResponse.then(response => {
        if (response.status == 'fail') {
            NotificationManager.error(response.error, 'Booking - Book apartment', Constants.ERROR_DISPLAY_TIME);
        } else {
            Actions.goToPersonalInfoClicked();
            Actions.setRoute('/payment');
        }
    });
}

const viewBestApartmentClicked = function (aptResponse) {
    let {apartmentKey, aptCnt} = aptResponse;
    let viewApartmentUrl = ApartmentHelper.generateViewApartmentUrl(aptResponse);
    if (aptCnt == 1) {
        Actions.viewBestApartmentClicked({apartmentKey});
        Actions.setRoute(viewApartmentUrl);
    } else {
        const clickComboResponse = Actions.viewComboApartmentClickedFromHome({apartmentKey});
        clickComboResponse.then(response => {
            if (response.status != 'fail') {
            Actions.setRoute(viewApartmentUrl);
            }
        });
    }
}

class ApartmentMedium extends React.Component {

    render() {
        const {aptResponse} = this.props;
        const {apartments, daysCnt, totalPrice, title, starRating} = aptResponse;
        let bestPhoto = ApartmentHelper.getComboApartmentBestPhoto(apartments);
        let guestHouse = ApartmentHelper.getGuestHouse(aptResponse);
        let shortDesciption = ApartmentHelper.getShortDescription(aptResponse);

        return (
            <figure className="mg-room">
                <img src={assetPath(bestPhoto)} alt="img11" className="img-responsive"/>
                <figcaption>
                    <h2>{guestHouse.name}</h2>
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
