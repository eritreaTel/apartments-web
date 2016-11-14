const React = require('react');
const DateHelper = require('../../helpers/date_helper');

class BookingDetails extends React.Component {

    render() {
        let {apartment, bookingStage : {searchInfo}} = this.props;
        let checkInDate='-', checkOutDate='-', bed = '-', room='', totalDays='', totalAmount='$249';
        if (searchInfo) {
            checkInDate  = DateHelper.formatDate(searchInfo.checkInDate, 'D MMM, YYYY') ;
            checkOutDate = DateHelper.formatDate(searchInfo.checkOutDate, 'D MMM, YYYY') ;
            bed =  searchInfo.bed ;
            room = searchInfo.room ;
            totalDays = searchInfo.totalDays;
            totalAmount = '$249.99';
        }


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
                                    <strong>Check In:</strong>
                                    <span>{checkInDate}</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check Out:</strong>
                                    <span> {checkOutDate}</span>
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
                                <div className="mg-cart-total">
                                    <strong>Total:</strong>
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