const React = require('react');
const Country = require('../shared/country');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const Anchor  = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;
const FormValidator = require('../../helpers/form_validation_helper');

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

const goBackToPersonal = function (e) {
      let payment = getPaymentInfo(e);
      Actions.paymentInfoUpdated(payment);
      Actions.goBackToPersonal();
}

class PaymentInfo extends React.Component {

      componentWillMount() {
            Stripe.setPublishableKey('pk_test_xNk89utQrNjwzmaqOLlteVnz');
      }

      componentDidMount() {
            this.refs.first_name.focus();
      }

      getPaymentInfo() {
            return {
                  'first_name' : this.refs.first_name.value,
                  'last_name'  : this.refs.last_name.value,
                  'zip'        : this.refs.zip.value,
                  'number'     : this.refs.number.value,
                  'cvc'        : this.refs.cvc.value
            }
      }

      processPaymentClicked() {
            let payment = this.getPaymentInfo();
            let paymentPromise = Actions.paymentInfoUpdated(payment);

            paymentPromise.then(paymentInfo => {
            //Perform frontEnd validation
                  let requiredFields = {'first_name' : "Please enter first name", 'last_name' : "Please enter last name",
                  'zip' : "Please enter valid zip", 'country' : "Please select your country",
                  'number' : 'Please enter card number', 'cvc' : "Please enter cvc",
                  'exp_month' : "Please enter expiration month", 'exp_year' : 'Please enter expiration year'};

            let result = FormValidator.validateRequiredDatas(this, paymentInfo, requiredFields, 'Booking - Payment Information');
            if (result == false) {
                  return ;
            }

            let isProcessing = {processingPayment: true};
            Actions.setIsProcessing(isProcessing);
            Stripe.card.createToken({
                        number: paymentInfo.number,
                        cvc: paymentInfo.cvc,
                        exp_month: paymentInfo.exp_month,
                        exp_year: paymentInfo.exp_year,
                        address_zip: paymentInfo.zip
                  }, this.paymentProcessingIsDone.bind(this));
            });
      }

      paymentProcessingIsDone(status, response) {
            console.log("response from stripe is");
            console.log(status);
            console.log(response);

            if (response.error) {
                  NotificationManager.error(response.error.message, 'Booking - Payment Information', 3000);
                  this.refs[response.error.param] && this.refs[response.error.param].focus();
                  this.refs[response.error.param] && this.refs[response.error.param].select();

            } else {
                  var stripe_token = response.id;
                  let bookingPromise = Actions.createApartmentBooking({stripe_token});
                        bookingPromise.then(bookingResponse => {
                              if (response.status == 'fail') {
                                    NotificationManager.error(bookingResponse.error, 'Booking - Payment Information', 3000);
                              }     else {
                                    Actions.goToConfirmationClicked()
                              }
                      });
            }

            let isProcessing = {processingPayment: false};
            Actions.setIsProcessing(isProcessing);
      }

      render() {
            const {apartment, bookingStage, user, isProcessing :{processingPayment}} = this.props;
            let first_name=undefined, last_name=undefined, zip=undefined, country=undefined;
            let number=undefined, exp_month=undefined, exp_year=undefined;

            let payment = bookingStage ? bookingStage.payment : null;
            const loggedIn = (!!CookiesHelper.getSessionCookie());

            if( payment) {
                  first_name  = payment.first_name;
                  last_name   = payment.last_name;
                  zip         = payment.zip;
                  country     = payment.country;
                  number = payment.number;
                  exp_month       = payment.exp_month;
                  exp_year        = payment.exp_year;
            }

            //Inialize first_name and last_name from loggedIn user.
            first_name = (first_name == undefined && loggedIn) ? user.first_name : first_name;
            last_name = (last_name == undefined && loggedIn) ? user.last_name : last_name;

            //Is payment getting processed
            let disabled  =  processingPayment ? true : false;
            let spinnerClassName   =  processingPayment ? 'margin-right-20' : 'margin-right-20 hide';

            return(
                  <div className="row">
                        <div className="col-md-8">
                              <div className="mg-book-form-billing">
                                    <h2 className="mg-sec-left-title">Billing Address</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>First Name</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input disabled={disabled} value={first_name} type="text" ref='first_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input disabled={disabled} value={last_name} type="text" ref='last_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input disabled={disabled} value={zip} type="text" ref='zip' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Country</label><span className='input-with-validation required-input'> * </span>
                                                      <Country onChange={(val)=>{Actions.paymentInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
                                                </div>
                                          </div>
                                    </div>
                                    <h2 className="mg-sec-left-title">Card Info</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input disabled={disabled} value={number} type="text" ref='number' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>CVV</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input disabled={disabled} type="password" ref='cvc' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Expire Month</label><span className='required-input'> * </span>
                                                      <Month disabled={disabled} value={exp_month} onChange={(val)=>{Actions.paymentInfoUpdated({'exp_month' : val.value});}}/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Expire Year</label><span className='required-input'> * </span>
                                                      <Year disabled={disabled} value={exp_year} onChange={(val)=>{Actions.paymentInfoUpdated({'exp_year' : val.value});}}/>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="pull-right">
                                        <MDSpinner className={spinnerClassName}  />
                                        <Anchor  disabled={disabled} onClick={this.processPaymentClicked.bind(this)}  className="btn btn-dark-main btn-next-tab ">Pay Now</Anchor>
                                    </div>
                                    <Anchor disabled={disabled} onClick={() => {goBackToPersonal(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                              </div>
                        </div>
                        <BookingDetails apartment={apartment} bookingStage={bookingStage}/>
                  </div>
            );
      }
}

module.exports = PaymentInfo;
