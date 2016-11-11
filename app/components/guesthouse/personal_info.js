const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');


const goToPaymentInfoClicked = function (e) {
    let personalInfo = {
        'first_name' : e.refs.first_name.value,
        'last_name'  : e.refs.last_name.value,
        'city'  : e.refs.city.value,
        'country' : e.refs.countryCmp.refs.country.value,
        'phone_number' : e.refs.phone_number.value,
        'email' : e.refs.email.value,
        'password' : e.refs.password.value,
        'renter_password' : e.refs.renter_password.value,
        'terms' : e.refs.terms.value
    }
    console.log(personalInfo);
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
                                        <Country ref='countryCmp' />
                                    </div>
                                </div>
                            </div>

                            <h2 className="mg-sec-left-title">Account Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label>
                                        <input ref='phone_number' type="tel" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>Password</label>
                                        <input ref='password' type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Email Address</label>
                                        <input ref='email' type="email" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>Re-Password</label>
                                        <input ref='renter_password' type="password" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix mg-terms-input">
                                <div className="pull-right">
                                    <label><input ref ='terms' type="checkbox"/> By Sign up you are agree with our <Anchor>terms and condition</Anchor></label>
                                </div>
                            </div>

                            <Anchor onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                            <Anchor onClick={() => {Actions.goBackToSearch()}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} />
                </div>
            );
    }
}

module.exports = PersonalInfo;
