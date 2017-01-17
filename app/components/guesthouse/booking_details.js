const React = require('react');
const DateHelper = require('../../helpers/date_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const CurrencyFormatter = require('currency-formatter');

class BookingDetails extends React.Component {

    render() {
        let {apartment, bookingStage : {additional}} = this.props;
        let checkInDate  = DateHelper.formatDate(apartment.pricingInfo.start_date, 'D MMM, YYYY') ;
        let checkOutDate = DateHelper.formatDate(apartment.pricingInfo.start_date, 'D MMM, YYYY') ;
        let bed =  apartment.bed ;
        let room = apartment.room ;
        let totalDays = apartment.pricingInfo.days_cnt;
        let carPickup = additional && additional.car_pickup;

        let airPortPickUpLabel = "No. You are on your own.";
        if (carPickup) {
            airPortPickUpLabel = 'Yes. We will pick you up.';
        }
        let totalAmount = CurrencyFormatter.format(PricingHelper.getTotalPrice(apartment, additional), { code: 'USD' });

        return(
                <div className="col-md-4">
                    <div className="mg-cart-container">
                        <aside className="mg-widget mt50" id="mg-room-cart">
                            <h2 className="mg-widget-title">Booking Details</h2>
                            <div className="mg-widget-cart">
                                <div className="mg-cart-room">
                                    <img src="images/room-1.png" alt="Delux Room" className="img-responsive"/>
                                    <h3>{apartment.title}</h3>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check In:&nbsp;</strong>
                                    <span>{checkInDate}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check Out:</strong>
                                    <span>{checkOutDate}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Room: </strong>
                                    <span>{room}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Bed: </strong>
                                    <span>{bed}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Number of Days: </strong>
                                    <span>{totalDays}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Airport Pickup: </strong>
                                    <span>{airPortPickUpLabel}</span>
                                </div>
                                <div className="mg-cart-total">
                                    <strong>Total: </strong>
                                    <span>{totalAmount}</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
        );
    }
}

module.exports = BookingDetails;