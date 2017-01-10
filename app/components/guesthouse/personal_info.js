const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import Checkbox from 'rc-checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

const goToPaymentInfoClicked = function (e) {
    let info = getPersonalInfo(e);
    let personal = Actions.personalInfoUpdated(info);

    const loggedIn = (!!CookiesHelper.getSessionCookie());

    if (loggedIn) {
        Actions.goToPaymentClicked();
        return;
    }

    //If user is not loggedIn, create a user, log them in and take them to payment page.
    if (!loggedIn) {
        if (!info.first_name) {
            NotificationManager.error("Please enter first name", 'Booking - Personal Information', 3000);
            e.refs.first_name.focus();
            return;
        }
        if (!info.last_name) {
            NotificationManager.error("Please enter last name", 'Booking - Personal Information', 3000);
            e.refs.last_name.focus();
            return;
        }
        if (!info.city) {
            NotificationManager.error("Please enter city", 'Booking - Personal Information', 3000);
            e.refs.city.focus();
            return;
        }
        if (!personal.country || info.country == 'Select your country') {
            NotificationManager.error("Please select your country", 'Booking - Personal Information', 3000);
            return;
        }
        if (!info.email) {
            NotificationManager.error("Please enter email ", 'Booking - Personal Information', 3000);
            e.refs.email.focus();
            return;
        }
        if (!info.phone_number) {
            NotificationManager.error("Please enter phone number", 'Booking - Personal Information', 3000);
            e.refs.phone_number.focus();
            return;
        }
        if (!info.password) {
            NotificationManager.error("Please enter password ", 'Booking - Personal Information', 3000);
            e.refs.password.focus();
            return;
        }
        if (!info.renter_password) {
            NotificationManager.error("Please enter password ", 'Booking - Personal Information', 3000);
            e.refs.renter_password.focus();
            return;
        }
        if (info.renter_password != info.password) {
            NotificationManager.error("Please enter matching password.", 'Booking - Personal Information', 3000);
            e.refs.password.focus();
            return;
        }
        if (personal.terms != true) {
            NotificationManager.error("Please accept terms and services.", 'Booking - Personal Information', 3000);
            return;
        }

        const createUserPromise = Actions.createUser(personal);

        createUserPromise.then(response => {
            if (response.status == 'fail') {
                NotificationManager.error(response.error, 'Booking - Personal Information', 3000);
            } else {
                NotificationManager.success('You have successfully subscribed to our email.', 'Email Subscription');

                let credentials = {
                    email : info.email,
                    password : info.password
                }
                console.log('authenticating user');
                Actions.logIn(credentials);
                Actions.goToPaymentClicked();
            }
        });
    }

}

const goBackToSearch = function (e) {
    let info = getPersonalInfo(e);
    Actions.personalInfoUpdated(info);
    Actions.goBackToSearch();
}

function onTermsCheckBoxChanged(e, checked) {
    Actions.personalInfoUpdated({'terms' : e.target.checked});
}

const getPersonalInfo = function (e) {
    return {
        'first_name' : e.refs.first_name.value,
        'last_name'  : e.refs.last_name.value,
        'city'  : e.refs.city.value,
        'phone_number' : e.refs.phone_number.value,
        'email' : e.refs.email.value,
        'password' : e.refs.password.value,
        'renter_password' : e.refs.renter_password.value,
        'type' : 'seeker',
        'is_active' : 1
    }
}

class PersonalInfo extends React.Component {

    render() {
        const {apartment, bookingStage, acceptToS, user} = this.props;
        let personal = bookingStage ? bookingStage.personal : null;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let first_name = undefined, last_name = undefined, city = undefined , phone_number = undefined, email = undefined, terms = '';
        let country = 'Select your country', termsDefaultChecked = 0 ;
        let acceptTermsCss = 'clearfix mg-terms-input', passwordSectionClass ='row', disableElement = '';
        if (loggedIn) {
            first_name      = user.first_name;
            last_name       = user.last_name;
            city            = user.city;
            phone_number    = user.phone_number;
            email           = user.email;
            country         = user.country;
            termsDefaultChecked = 1;

            disableElement  = true;
            acceptTermsCss = 'hide clearfix mg-terms-input';
            passwordSectionClass = 'hide row';

        } else if (personal) {
            first_name      = personal.first_name;
            last_name       = personal.last_name;
            city            = personal.city;
            phone_number    = personal.phone_number;
            email           = personal.email;
            termsDefaultChecked = (personal.terms == true) ? 1 : 0;
            country = personal && personal.country ? personal.country : 'Select your country';
        }

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
                                            <input value={first_name} disabled={disableElement} ref='first_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={last_name} disabled={disableElement} ref='last_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>City</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={city}  disabled={disableElement} ref='city' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Country</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <Country value={country} disabled={loggedIn} ref='countryCmp' />
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
                                            <input value={email} disabled={disableElement} ref='email' type="email" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={phone_number} disabled={disableElement} ref='phone_number' type="tel" className="input-with-validation form-control"/>
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
                                    <Checkbox defaultChecked={termsDefaultChecked}  onChange={onTermsCheckBoxChanged}/> By Signing up you are agree with our <Anchor onClick={()=>{Actions.setRoute('/terms-of-use')}}>terms and condition</Anchor>
                                </div>
                            </div>

                            <Anchor onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                            <Anchor onClick={() => {goBackToSearch(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = PersonalInfo;
