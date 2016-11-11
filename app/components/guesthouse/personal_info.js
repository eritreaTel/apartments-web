const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');


const goToPaymentInfoClicked = function () {
    Actions.goToPaymentClicked();
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
                                        <input ref='first_name' type="text" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>City</label>
                                        <input ref='city' type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label>
                                        <input ref='last_name' type="text" className="form-control"/>
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
                            <Anchor onClick={() => {Actions.goBackToSearch()}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} />
                </div>
            );
    }
}

module.exports = PersonalInfo;
