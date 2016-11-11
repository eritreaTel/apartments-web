const React = require('react');

class BookingDetails extends React.Component {

    render() {
        let {apartment} = this.props;
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
                                    <span>27 Jan, 2015</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Check Out:</strong>
                                    <span>28 Jan, 2015</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Adults:</strong>
                                    <span>2</span>
                                </div>
                                <div className="mg-widget-cart-row">
                                    <strong>Child:</strong>
                                    <span>1</span>
                                </div>
                                <div className="mg-cart-total">
                                    <strong>Total:</strong>
                                    <span>$249.99</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
        );
    }
}

module.exports = BookingDetails;