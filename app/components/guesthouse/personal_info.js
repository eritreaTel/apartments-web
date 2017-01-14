const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const FormValidator = require('../../helpers/form_validation_helper');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import Checkbox from 'rc-checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

const goToPaymentInfoClicked = function (e) {

    const loggedIn = (!!CookiesHelper.getSessionCookie());
    let info = getPersonalInfo(e);
    let personalPromise = Actions.personalInfoUpdated(info);

    personalPromise.then(personal => {
        if (loggedIn) {
            Actions.goToPaymentClicked();
            return;
        } else {
            let requiredFields = {'first_name' : "Please enter first name", 'last_name' : "Please enter last name",
                'city' : "Please enter city", 'country'    : "Please select your country",
                'email' : "Please enter email", 'password'   : "Please enter password",
                'renter_password' : "Please enter password", "terms" : "Please accept terms and services"};

            let result = FormValidator.validateRequiredDatas(e, personal, requiredFields, 'Booking - Personal Information');
            if (result == false) {
                return ;
            }
            if (personal.renter_password != personal.password) {
                NotificationManager.error("Please enter matching password.", 'Booking - Personal Information', 3000);
                e.refs.password.focus();
                return;
            }

            let isProcessing = {processingPersonalInfo: true};
            Actions.setIsProcessing(isProcessing);

            const createUserPromise = Actions.createUser(personal);
            createUserPromise.then(response => {
                if (response.status == 'fail') {
                    NotificationManager.error(response.error, 'Booking - Personal Information', 3000);
                } else {
                    let credentials = {
                        email : info.email,
                        password : info.password
                    }

                    Actions.logIn(credentials);
                    Actions.goToPaymentClicked();
                }

                let isProcessing = {processingPersonalInfo: false};
                Actions.setIsProcessing(isProcessing);
            });
        }
    });
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

    componentDidMount() {
        this.refs.first_name.focus();
    }

    render() {
        const {apartment, bookingStage, acceptToS, user, isProcessing :{processingPersonalInfo}} = this.props;
        let personal = bookingStage ? bookingStage.personal : null;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let first_name = undefined, last_name = undefined, city = undefined , phone_number = undefined, email = undefined, terms = '';
        let country = 'Select your country', termsDefaultChecked = 0 ;
        let acceptTermsCss = 'clearfix mg-terms-input', passwordSectionClass ='row';
        if (loggedIn) {
            first_name      = user.first_name;
            last_name       = user.last_name;
            city            = user.city;
            phone_number    = user.phone_number;
            email           = user.email;
            country         = user.country;
            termsDefaultChecked = 1;

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

        let disabled  = loggedIn || processingPersonalInfo;
        let disableButton = processingPersonalInfo;
        let spinnerClassName = processingPersonalInfo ? 'margin-right-20' : 'hide margin-right-20';

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
                                            <input value={first_name} disabled={disabled} ref='first_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={last_name} disabled={disabled} ref='last_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>City</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={city}  disabled={disabled} ref='city' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Country</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <Country onChange={(val)=>{Actions.personalInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
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
                                            <input value={email} disabled={disabled} ref='email' type="email" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label>
                                        <Validate>
                                            <input value={phone_number} disabled={disabled} ref='phone_number' type="tel" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className={passwordSectionClass}>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disabled} ref='password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Re-Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disabled} ref='renter_password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>

                            <div className={acceptTermsCss}>
                                <div className="pull-right">
                                    <Checkbox defaultChecked={termsDefaultChecked}  onChange={onTermsCheckBoxChanged}/> By Signing up you are agree with our <Anchor onClick={()=>{Actions.setRoute('/terms-of-use')}}>terms and condition</Anchor>
                                </div>
                            </div>
                            <div className="pull-right">
                                <MDSpinner className={spinnerClassName}  />
                                <Anchor disabled={disableButton} onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab">Next</Anchor>
                            </div>
                            <Anchor disabled={disableButton} onClick={() => {goBackToSearch(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>

                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = PersonalInfo;
