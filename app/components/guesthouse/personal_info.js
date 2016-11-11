const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');


const goToPaymentInfoClicked = function () {
    Actions.goToPaymentClicked();
}

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


class PersonalInfo extends React.Component {

  render() {
      const {apartment} = this.props;
      return (
            <div className="row">
                <div className="col-md-8">
                    <div className="mg-book-form-personal">
                        <h2 className="mg-sec-left-title">Personal Info</h2>
                        <div className="row pb40">
                            <div className="col-md-6">
                                <div className="mg-book-form-input">
                                    <label>First Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Address Line 1</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>City</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>State/Region</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mg-book-form-input">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Address Line 2</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Zip/Post Code</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Country</label>
                                    <Country />
                                </div>
                            </div>
                        </div>

                        <h2 className="mg-sec-left-title">Account Info</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mg-book-form-input">
                                    <label>Phone</label>
                                    <input type="tel" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mg-book-form-input">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mg-book-form-input">
                                    <label>Re-Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix mg-terms-input">
                            <div className="pull-right">
                                <label><input type="checkbox"/> By Sign up you are agree with our <a href="#">terms and condition</a></label>
                            </div>
                        </div>

                        <Anchor onClick={() => {goToPaymentInfoClicked()}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                        <Anchor className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                    </div>
                </div>
                <BookingDetails apartment={apartment} />

            </div>


    );
  }
}

module.exports = PersonalInfo;
