const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const Checkbox = require('../shared/checkbox');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;



const goToPaymentInfoClicked = function (e) {
    let info = getPersonalInfo(e);
    const loggedIn = (!!CookiesHelper.getSessionCookie());
    if (!loggedIn) {
        Actions.createUser(info);
    }
    Actions.goToPaymentClicked(info);
}

const goBackToSearch = function (e) {
    Actions.goBackToSearch(getPersonalInfo(e))
}

const getPersonalInfo = function (e) {
    const loggedIn = (!!CookiesHelper.getSessionCookie());
    let countryComponent = (loggedIn == true) ? e.refs.countryCmp.refs.countryCmp.refs.countryDisplay : e.refs.countryCmp.refs.countryCmp.refs.country;
    return {
        'first_name' : e.refs.first_name.value,
        'last_name'  : e.refs.last_name.value,
        'city'  : e.refs.city.value,
        'country' : countryComponent.value,
        'phone_number' : e.refs.phone_number.value,
        'email' : e.refs.email.value,
        'password' : e.refs.password.value,
        'renter_password' : e.refs.renter_password.value,
        'terms' : e.refs.termsCmp.refs.terms.value,
        'type' : 'seeker',
        'is_active' : 1
    }
}

const populatePersonalInfo = function(e, user) {
    e.refs.first_name.value      = user.first_name;
    e.refs.last_name.value       = user.last_name;
    e.refs.city.value            = user.city;
    e.refs.phone_number.value    = user.phone_number;
    e.refs.email.value           = user.email;
    e.refs.terms.value           = user.terms;
    e.refs.countryCmp.refs.countryCmp.refs.countryDisplay.value = user.country;
}

class PersonalInfo extends React.Component {

    componentDidMount() {
        const {user, bookingStage} =  this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        if (loggedIn) { // If the user is loggedIn, we don't want to get information again
            populatePersonalInfo(this, user);
        } else { //If the user is not logged in, but is back from payment info, re-populate data
            let personal = bookingStage ? bookingStage.personal : null;
            if (personal != null) {
                this.refs.first_name.value      = personal.first_name;
                this.refs.last_name.value       = personal.last_name;
                this.refs.city.value            = personal.city;
                this.refs.phone_number.value    = personal.phone_number;
                this.refs.email.value           = personal.email;
                this.refs.countryCmp.refs.countryCmp.refs.country.value = personal.country;
            }
        }
    }

    componentDidUpdate(){
        const {user, bookingStage} =  this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        if (loggedIn) { // If the user is loggedIn, we don't want to get information again
            populatePersonalInfo(this, user);
        }
    }

    render() {
        const {apartment, bookingStage, acceptToS} = this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        let disableElement = loggedIn ? 'disabled' : '';
        let passwordSectionClass = loggedIn ? 'hide row' : 'row';
        let acceptTermsCss = loggedIn ? 'hide clearfix mg-terms-input' : 'clearfix mg-terms-input';

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Personal Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>First Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='first_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='last_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>City</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='city' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Country</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <Country disabled={disableElement} ref='countryCmp' />
                                        </Validate>
                                    </div>
                                </div>
                            </div>


                            <h2 className="mg-sec-left-title">Account Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Email Address</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='email' type="email" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='phone_number' type="tel" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className={passwordSectionClass}>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Re-Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='renter_password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>

                            <div className={acceptTermsCss}>
                                <div className="pull-right">
                                    <Checkbox name='terms' defaultChecked={acceptToS} checked={acceptToS} ref ='termsCmp' label=' By Sign up you are agree with our terms and condition' />
                                </div>
                            </div>

                            <Anchor onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                            <Anchor onClick={() => {goBackToSearch(this)}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = PersonalInfo;
