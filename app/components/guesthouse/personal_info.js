const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const BookingDetails = require('./booking_details');
const Action = require('../../actions/actions');

const goToPaymentSectionClicked = function () {
    Action.goToPaymentSectionClicked();
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
                                <label><input type="checkbox"/> By Sign up you are agree with our <Anchor >terms and condition</Anchor></label>
                            </div>
                        </div>

                        <Anchor onClick={() => goToPaymentSectionClicked() } className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                        <Anchor className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                    </div>
                </div>
                <BookingDetails apartment={apartment} />

            </div>


    );
  }
}

module.exports = PersonalInfo;
