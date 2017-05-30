const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const FormValidator = require('../../helpers/form_validation_helper');
const PricingHelper  = require('../../helpers/pricing_helper');
const Constants = require('../../helpers/constants');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const CurrencyFormatter = require('currency-formatter');
const {stripKey} = require('../../../config/config');

import Checkbox from 'rc-checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";
import CurrencyInput from 'react-currency-input';


const goBackToAdditionalInfo = function (e) {
    Actions.goBackToAdditional();
}

class PersonalInfo extends React.Component {

    componentDidMount() {
        Stripe.setPublishableKey(stripKey);
        window.scrollTo(0, 0);
        this.refs.first_name.focus();
    }

    componentWillMount() {
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        const {user, apartmentResponse : {totalPrice}, bookingStage : {payment, additional}} = this.props;
        let payment_amount = PricingHelper.getTotalPrice(totalPrice, additional);

        if (payment == null || (payment && payment.payment_amount == undefined)) {
            Actions.paymentInfoUpdated({'payment_amount' : payment_amount});
        }

        if (loggedIn) {
            let personal = {
                'first_name'  : user.first_name,
                'last_name'   : user.last_name,
                'city'        : user.city,
                'phone_number': user.phone_number,
                'email'       : user.email,
                'country'     : user.country
            };
            Actions.personalInfoUpdated(personal);
        }
    }

    onPayLater(e) {
        const {apartmentResponse : {totalPrice}, bookingStage : {payment, additional}} = this.props;
        let payment_amount = PricingHelper.getTotalPrice(0, additional);
        Actions.paymentInfoUpdated({'payLater' : e.target.checked, 'payFull' : false, 'payPartial' : false, 'payment_amount' : payment_amount});
    }

    onPayFull(e) {
        const {apartmentResponse : {totalPrice}, bookingStage : {payment, additional}} = this.props;
        let payment_amount = PricingHelper.getTotalPrice(totalPrice, additional);
        Actions.paymentInfoUpdated({'payLater' : false, 'payFull' : e.target.checked, 'payPartial' : false, 'payment_amount' : payment_amount});
    }

    onPayPartial(e) {
        const {apartmentResponse : {totalPrice}, bookingStage : {payment, additional}} = this.props;
        let payment_amount = PricingHelper.getMinimumPrice(totalPrice, additional);
        Actions.paymentInfoUpdated({'payLater' : false, 'payFull' : false, 'payPartial' : e.target.checked, 'payment_amount' : payment_amount});
    }

    processPayment() {
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        const {bookingStage: {personal, payment}} = this.props;
        let requiredFields = {'first_name' : "Please enter first name", 'last_name' : "Please enter last name",
            'country'   : "Please select your country", 'number'   : 'Please enter card number',
            'cvc' : "Please enter cvc", 'exp_month' : "Please enter expiration month",
            'exp_year' : 'Please enter expiration year'};

        if (!loggedIn) {
            requiredFields = {...requiredFields, 'password' :"Please enter password",'renter_password':"Please enter password",'email': "Please enter email"};
        }

        let result = FormValidator.validateRequiredDatas(this, {...personal, ...payment} , requiredFields, 'Booking - Personal Information');
        if (result == false) {
            return ;
        }
        if (!loggedIn && personal.renter_password != personal.password) {
            NotificationManager.error("Please enter matching password.", 'Booking - Personal Information', Constants.ERROR_DISPLAY_TIME);
            e.refs.password.focus();
            return;
        }

        let isProcessing = {processingPayment: true};
        Actions.setIsProcessing(isProcessing);

        if (loggedIn) {
            this.makeStripePayment(payment);
        } else {
            const createUserPromise = Actions.createUser({... personal, type :'seeker', 'is_active' : 1});
            createUserPromise.then(response => {
                if (response.status == 'fail') {
                    NotificationManager.error(response.error, 'Booking - Personal Information', Constants.ERROR_DISPLAY_TIME);
                    let isProcessing = {processingPayment: false};
                    Actions.setIsProcessing(isProcessing);
                } else {
                    this.makeStripePayment(payment);
                }
            });
        }
    }

    makeStripePayment(payment) {
        Stripe.card.createToken({
            number: payment.number,
            cvc: payment.cvc,
            exp_month: payment.exp_month,
            exp_year: payment.exp_year
        }, this.paymentProcessingIsDone.bind(this));
    }

    paymentProcessingIsDone(status, response) {
        let isProcessing = {processingPayment: false};
        const loggedIn = (!!CookiesHelper.getSessionCookie());
        const {bookingStage: {personal}} = this.props;

        if (!loggedIn) {
            let credentials = {email : personal.email, password : personal.password}
            Actions.logIn(credentials);
        }

        if (response.error) {
            Actions.setIsProcessing(isProcessing);
            NotificationManager.error(response.error.message, 'Booking - Payment Information', Constants.ERROR_DISPLAY_TIME);
            this.refs[response.error.param] && this.refs[response.error.param].focus();
            this.refs[response.error.param] && this.refs[response.error.param].select();
        } else {
            var stripe_token = response.id;
            let bookingPromise = Actions.createApartmentBooking({stripe_token});
            bookingPromise.then(bookingResponse => {
                Actions.setIsProcessing(isProcessing);
                if (bookingResponse.status == 'fail') {
                    NotificationManager.error(bookingResponse.error, 'Booking - Payment Information', Constants.ERROR_DISPLAY_TIME);
                } else {
                    Actions.goToConfirmationClicked()
                }
            });
        }
    }

    render() {
        const {apartmentResponse, bookingStage, acceptToS, user, isProcessing :{processingPayment}} = this.props;
        let {personal, payment, additional} = bookingStage;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let {payLater, payFull, payPartial, number, exp_month, exp_year} = payment;
        let {first_name,last_name, city, phone_number, email}  = personal;
        let country = personal && personal.country ? personal.country : 'Select your country';

        let disabled  = processingPayment;
        let spinnerClassName = processingPayment ? 'margin-right-20' : 'hide margin-right-20';
        let acctounInfoClass = loggedIn ? 'hide' : 'show';

        let minimum_amount = CurrencyFormatter.format(PricingHelper.getMinimumPrice(apartmentResponse.totalPrice, additional), { code: 'USD' });

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Personal Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <input placeholder="First Name" value={first_name} disabled={disabled} ref='first_name' type="text" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'first_name' : this.refs.first_name.value})}}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <input placeholder="Last Name" value={last_name} disabled={disabled} ref='last_name' type="text" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'last_name' : this.refs.last_name.value})}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <input placeholder="City" value={city}  disabled={disabled} ref='city' type="text" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'city' : this.refs.city.value})}} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <Country onChange={(val)=>{Actions.personalInfoUpdated({'country' : val.value})}} value={country} disabled={disabled} />
                                    </div>
                                </div>
                            </div>

                            <div className={acctounInfoClass}>
                                <h2 className="mg-sec-left-title">Account Info</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mg-book-form-input-payment">
                                            <input placeholder="Email" value={email} disabled={disabled} ref='email' type="email" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'email' : this.refs.email.value})}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mg-book-form-input-payment">
                                            <input placeholder="Phone Number" value={phone_number} disabled={disabled} ref='phone_number' type="tel" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'phone_number' : this.refs.phone_number.value})}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mg-book-form-input-payment">
                                            <input placeholder="Password" disabled={disabled} ref='password' type="password" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'password' : this.refs.password.value})}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mg-book-form-input-payment">
                                            <input placeholder="Re-enter password" disabled={disabled} ref='renter_password' type="password" className="input-with-validation form-control" onChange={() => {Actions.personalInfoUpdated({'renter_password' : this.refs.renter_password.value})}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mg-sec-left-title">Card Details</h2>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="mg-book-form-input">
                                        <input disabled={disabled} type="radio" value="payFull" checked={payFull} onChange={this.onPayFull.bind(this)} /> Pay full amount.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="mg-book-form-input">
                                        <input disabled={disabled} type="radio" value="payPartial" checked={payPartial} onChange={this.onPayPartial.bind(this)} /> Pay <strong>{minimum_amount}</strong> - 15% of total price.
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="mg-book-form-input">
                                        <input disabled={disabled} type="radio" value="payLater" checked={payLater} onChange={this.onPayLater.bind(this)} /> Pay later, at check-in.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <input placeholder="Card Number" disabled={disabled} value={number} type="text" ref='number' className="input-with-validation form-control" onChange={()=>{Actions.paymentInfoUpdated({'number' : this.refs.number.value})}}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <input placeholder="CVC" disabled={disabled} type="password" ref='cvc' className="input-with-validation form-control" onChange={()=>{Actions.paymentInfoUpdated({'cvc' : this.refs.cvc.value})}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input-payment">
                                        <Month disabled={disabled} value={exp_month} onChange={(val)=>{Actions.paymentInfoUpdated({'exp_month' : val.value});}}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mg-book-form-input-payment">
                                    <Year disabled={disabled} value={exp_year} onChange={(val)=>{Actions.paymentInfoUpdated({'exp_year' : val.value});}}/>
                                </div>
                            </div>
                        </div>


                        <div className="clearfix mg-book-form-input-payment">
                            <div className="pull-right">
                                By using UgandaBooking, you agree with our <Anchor onClick={()=>{Actions.setRoute('/terms-of-use')}}>terms of use</Anchor>
                            </div>
                        </div>
                        <div className="pull-right">
                            <MDSpinner className={spinnerClassName}  />
                            <Anchor disabled={disabled} onClick={this.processPayment.bind(this)} className="btn btn-dark-main btn-next-tab">Complete Reservation</Anchor>
                        </div>
                        <Anchor disabled={disabled} onClick={() => {goBackToAdditionalInfo(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>

                    </div>
                </div>
            <BookingDetails apartmentResponse={apartmentResponse} bookingStage={bookingStage} />
        </div>
        );
    }
}

module.exports = PersonalInfo;