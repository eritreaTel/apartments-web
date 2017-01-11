const React = require('react');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const CurrencyFormatter = require('currency-formatter');

class  ReservationConfirmation extends React.Component {

    componentDidMount(){
        //Actions.confirmationIsDone();
    }

    render() {
        let {apartment , user, bookingStage : {searchInfo, personal, confirmation}} = this.props;
        let pricingInfo = apartment.pricingInfo;

        let checkInDate  = DateHelper.formatDate(pricingInfo.start_date, 'D MMM, YYYY');
        let checkOutDate = DateHelper.formatDate(pricingInfo.end_date, 'D MMM, YYYY');
        let bed          =  apartment.bed ;
        let room         = apartment.room ;
        let totalDays    = pricingInfo.days_cnt;
        let totalAmount  = CurrencyFormatter.format(pricingInfo.total_price, { code: 'USD' });
        let customerName = user.first_name + ' ' + user.last_name;
        let guestHouseName = 'Pearl of Africa';
        let guestHouseAddress = '236 Kabala Gala St, Kamapala';
        let guestHousePhone = '+256 1 123 123 1234';

        let confirmationId = 525 + '-' + confirmation.id;

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
                                        <strong>Room:</strong>
                                        <span>{room}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Bed:</strong>
                                        <span>{bed}</span>
                                    </div>
                                    <div className="mg-widget-cart-row">
                                        <strong>Number of Days:</strong>
                                        <span>{totalDays}</span>
                                    </div>
                                    <div className="mg-cart-address">
                                        <strong>Booking Details:</strong> <br />
                                        <address>
                                            Name: <strong>{guestHouseName}</strong><br/>
                                            Address: {guestHouseAddress}, Uganda <br/>
                                            Tel : {guestHousePhone}
                                        </address>
                                    </div>
                                    <div className="mg-cart-total">
                                        <strong>Total: </strong>
                                        <span>{totalAmount}</span>
                                    </div>
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
