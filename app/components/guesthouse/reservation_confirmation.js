const React = require('react');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const CurrencyFormatter = require('currency-formatter');
const TotalPayment = require('./total_payment');

class  ReservationConfirmation extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 20);
    }

    render() {
        let {apartment , user, bookingStage} = this.props;
        let {pricingInfo, guestHouse} = apartment;
        let {additional, confirmation, searchInfo} = bookingStage;

        let confirmationId = PricingHelper.getReservationConfirmationNumber(confirmation.id);
        let checkInDate  = DateHelper.formatDate(pricingInfo.start_date, 'D MMM, YYYY');
        let checkOutDate = DateHelper.formatDate(pricingInfo.end_date, 'D MMM, YYYY');
        let adult        = searchInfo.adult ;
        let room         = apartment.room ;
        let totalDays    = pricingInfo.days_cnt;
        let customerName = user.first_name + ' ' + user.last_name;
        let guestHouseName = guestHouse.name;
        let guestHouseAddress = guestHouse.street_address + ', ' + guestHouse.neighborhood + ' - ' + guestHouse.city;
        let guestHousePhone   = guestHouse.phone;

        let airportPickup = additional && additional.airport_pickup;
        let airlineName, arrivalDate, arrivalTime;
        let airportPickUpCss = 'mg-cart-address hide';
        let notAirportPickUpCss = 'mg-cart-address show';
        if (airportPickup) {
            airlineName = additional.airline_name;
            arrivalDate = DateHelper.formatDate(additional.arrival_date, 'D MMM, YYYY'); ;
            arrivalTime = additional.arrival_time;

            airportPickUpCss = 'mg-cart-address show';
            notAirportPickUpCss = 'mg-cart-address hide';
        }
        let totalAmount  = CurrencyFormatter.format(PricingHelper.getTotalPrice(apartment, additional), { code: 'USD' });

        return(
            <div role="tabpanel" className="tab-pane in active" id="confirmation">
                <div className="alert alert-success clearfix">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <div className="mg-alert-icon"><i className="fa fa-check"></i></div>
                        <h3 className="mg-alert-payment">Thank you! Your booking is confirmed. Invoice is sent to your email address</h3>
                    </div>
                    <div className="mg-cart-container mg-paid">
                    <aside className="mg-widget mt50" id="mg-room-cart">
                        <h2 className="mg-widget-title">Booking Details</h2>
                        <div className="mg-widget-cart">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-cart-room">
                                        <img src="images/room-1.png" alt="Delux Room" className="img-responsive"/>
                                        <h3>{apartment.title}</h3>
                                        <p>{apartment.medium_description}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mg-payment-id">Your Payment ID: {confirmationId}</h3>
                                    <div className="mg-widget-cart-row">
                                        <strong>Customer Name:</strong>
                                        <span>{customerName}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Check In:</strong>
                                        <span>{checkInDate}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Check Out:</strong>
                                        <span>{checkOutDate}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Room/s:</strong>
                                        <span>{room}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Adult/s:</strong>
                                        <span>{adult}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Number of Days:</strong>
                                        <span>{totalDays}</span>
                                    </div>
                                    <div className={airportPickUpCss}>
                                        <strong>Airport Pickup: </strong><br />
                                        <address>
                                            <strong>Airport Name: </strong>Entebe Internation Airport<br/>
                                            <strong>Airline Name: </strong>{airlineName} <br/>
                                            <strong>Arrive On: </strong>{arrivalDate} at {arrivalTime}
                                        </address>
                                    </div>
                                    <div className={notAirportPickUpCss}>
                                        <strong>Airport PickUp:</strong> <span className="margin-left-10">Not Included</span><br/>
                                    </div>
                                    <div className="mg-cart-address">
                                        <strong>Booking Details:</strong> <br />
                                        <address>
                                            <strong>Guest House Name: </strong>{guestHouseName}<br/>
                                            <strong>Address: </strong>{guestHouseAddress}, Uganda <br/>
                                            <strong>Tel : </strong>{guestHousePhone}
                                        </address>
                                    </div>

                                    <TotalPayment currentPayCaption="Paid Amount" apartment={apartment} bookingStage={bookingStage} />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }


}

module.exports = ReservationConfirmation;
