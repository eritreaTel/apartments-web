const React = require('react');
const DateHelper = require('../../helpers/date_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const ApartmentHelper = require('../../helpers/apartment_helper');
const CurrencyFormatter = require('currency-formatter');
const TotalPayment = require('./total_payment');
const {assetPath} = require('../../helpers/asset_helper');

class BookingDetails extends React.Component {

    render() {
        let {apartmentResponse , bookingStage } = this.props;
        let {displayMessage, apartments, daysCnt, totalPrice, title, startDate, endDate} = apartmentResponse;
        let {additional,payment, searchInfo} = bookingStage;



        let bestPhoto = ApartmentHelper.getComboApartmentBestPhoto(apartments);
        let guestHouse = ApartmentHelper.getGuestHouse(apartmentResponse);
        let checkInDate  = DateHelper.formatDate(startDate, 'D MMM, YYYY') ;
        let checkOutDate = DateHelper.formatDate(endDate, 'D MMM, YYYY') ;
        let adult        = searchInfo.adult;
        let child        = searchInfo.children;
        let room         = apartments.length ;
        let airportPickup = additional && additional.airport_pickup;

        let airPortPickUpLabel = "No. You are on your own.";
        if (airportPickup) {
            airPortPickUpLabel = 'On ' + DateHelper.formatDate(additional.arrival_date, 'D MMM, YYYY') ;
            if (additional.arrival_time) {
                airPortPickUpLabel  = airPortPickUpLabel + ' at ' + additional.arrival_time;
            }
        }

        let hotelCheckInTime = guestHouse.check_in_time;
        let hotelCheckOutTime = guestHouse.check_out_time;

        return(
                <div className="col-md-4">
                    <div className="mg-cart-container">
                        <aside className="mg-widget mt50" id="mg-room-cart">
                            <h2 className="mg-widget-title">Booking Details</h2>
                            <div className="mg-widget-cart">
                                <div className="mg-cart-room">
                                    <img src={assetPath(bestPhoto)} alt="Delux Room" className="img-responsive"/>
                                    <h3> {guestHouse.name} </h3>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Accommodation Title:&nbsp;</strong>
                                    <span>{title}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check In:&nbsp;</strong>
                                    <span>{checkInDate} at {hotelCheckInTime}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check Out:</strong>
                                    <span>{checkOutDate} at {hotelCheckOutTime}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Room/s: </strong>
                                    <span>{room}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Adult/s: </strong>
                                    <span>{adult}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Children: </strong>
                                    <span>{child}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Number of Days: </strong>
                                    <span>{daysCnt}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Airport Pickup: </strong>
                                    <span>{airPortPickUpLabel}</span>
                                </div>

                                <TotalPayment currentPayCaption="Paying Now" apartmentResponse={apartmentResponse} bookingStage={bookingStage} />
                            </div>
                        </aside>
                    </div>
                </div>
        );
    }
}

module.exports = BookingDetails;