const React = require('react');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');

class  ReservationConfirmation extends React.Component {

    componentDidMount(){
        //Actions.confirmationIsDone();
    }

    render() {
        let {apartment, bookingStage : {searchInfo}} = this.props;
        let checkInDate  = DateHelper.formatDate(searchInfo.checkInDate, 'D MMM, YYYY');
        let checkOutDate = DateHelper.formatDate(searchInfo.checkOutDate, 'D MMM, YYYY');
        let bed =  searchInfo.bed ;
        let room = searchInfo.room ;
        let totalDays = searchInfo.totalDays;
        let totalAmount = '$249.99';


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
                                        <h3>Super Delux</h3>
                                        <p>Gueshouse uganda cares about customer satisfaction. Please write us on contact us page if you think there is a better way to server you. We thank you again for trusting us with your travel accomodation which is the most important decision you do when you decide to travel to Uganda. Please feel free to contact us at 1-877-540-9000 during your stay in Uganda. We are happy to help you</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mg-payment-id">Your Payment ID: #105152396140</h3>
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
                                        <strong>Your Address:</strong>
                                        <address>
                                            <strong>Amanuel Yohannes</strong><br/>
                                            Level 13, 2 Elizabeth St, Kamapla<br/>
                                            Uganda
                                        </address>
                                    </div>
                                    <div className="mg-cart-total">
                                        <strong>Total:</strong>
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
