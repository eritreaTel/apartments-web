const React = require('react');
const Country = require('../shared/country');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const Anchor  = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const PricingHelper  = require('../../helpers/pricing_helper');

const FormValidator = require('../../helpers/form_validation_helper');
const CurrencyFormatter = require('currency-formatter');
const Constants = require('../../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

import CurrencyInput from 'react-currency-input';

class PaymentInfo extends React.Component {

      componentDidMount() {
            Stripe.setPublishableKey('pk_test_xNk89utQrNjwzmaqOLlteVnz');
            window.scrollTo(0, 0);
            this.refs.first_name.focus();
      }

      componentWillMount() {
           const {apartment, bookingStage : {payment, additional}} = this.props;
           let payment_amount = PricingHelper.getTotalPrice(apartment, additional);

           if (payment == null || (payment && payment.payment_amount == undefined)) {
               Actions.paymentInfoUpdated({'payment_amount' : payment_amount});
           }
      }

      handlePaymentAmountChanged(value) {
          Actions.paymentInfoUpdated({'payment_amount' : value});
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

    goBackToPersonal() {
        let payment = this.getPaymentInfo();
        Actions.paymentInfoUpdated(payment);
        Actions.goBackToPersonal();
    }

      processPaymentClicked() {
            const {apartment, bookingStage : {additional}} = this.props;

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

                  let paymentAmountValidationResult = PricingHelper.paymentAmountIsValid(paymentInfo.payment_amount, apartment, additional);
                  if (paymentAmountValidationResult != "valid") {
                      NotificationManager.error(paymentAmountValidationResult, 'Booking - Payment Information', Constants.ERROR_DISPLAY_TIME);
                      return;
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
            let isProcessing = {processingPayment: false};

            if (response.error) {
                  NotificationManager.error(response.error.message, 'Booking - Payment Information', Constants.ERROR_DISPLAY_TIME);
                  this.refs[response.error.param] && this.refs[response.error.param].focus();
                  this.refs[response.error.param] && this.refs[response.error.param].select();
                  Actions.setIsProcessing(isProcessing);
            } else {
                  var stripe_token = response.id;
                  let bookingPromise = Actions.createApartmentBooking({stripe_token});
                        bookingPromise.then(bookingResponse => {
                              Actions.setIsProcessing(isProcessing);
                              if (response.status == 'fail') {
                                    NotificationManager.error(bookingResponse.error, 'Booking - Payment Information', Constants.ERROR_DISPLAY_TIME);
                              }     else {
                                    Actions.goToConfirmationClicked()
                              }
                      });
            }
      }

      render() {
            const {apartment, bookingStage, user, isProcessing :{processingPayment}} = this.props;
            let first_name=undefined, last_name=undefined, zip=undefined, country=undefined;
            let number=undefined, exp_month=undefined, exp_year=undefined, payment_amount = undefined;

            let payment = bookingStage ? bookingStage.payment : null;
            let additional = bookingStage ? bookingStage.additional : null;
            const loggedIn = (!!CookiesHelper.getSessionCookie());

            if( payment) {
                  first_name  = payment.first_name;
                  last_name   = payment.last_name;
                  zip         = payment.zip;
                  country     = payment.country;
                  number = payment.number;
                  exp_month       = payment.exp_month;
                  exp_year        = payment.exp_year;
                  payment_amount = payment.payment_amount ? payment.payment_amount : payment_amount;
            }

            //Inialize first_name and last_name from loggedIn user.
            first_name = (first_name == undefined && loggedIn) ? user.first_name : first_name;
            last_name = (last_name == undefined && loggedIn) ? user.last_name : last_name;

            //Is payment getting processed
            let disabled  =  processingPayment;
            let spinnerClassName   =  processingPayment ? 'margin-right-20' : 'margin-right-20 hide';

            let minimum_payment_amount = PricingHelper.getMinimumPrice(apartment, additional);
            let minimum_payment_amount_caption = CurrencyFormatter.format(minimum_payment_amount, { code: 'USD' });

            return(
                  <div className="row">
                        <div className="col-md-8">
                              <div className="mg-book-form-billing">
                                    <h2 className="mg-sec-left-title">Billing Information</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>First Name</label><span className='required-input'> * </span>
                                                      <input disabled={disabled} value={first_name} type="text" ref='first_name' className="input-with-validation form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label><span className='required-input'> * </span>
                                                      <input disabled={disabled} value={last_name} type="text" ref='last_name' className="input-with-validation form-control"/>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label><span className='required-input'> * </span>
                                                      <input disabled={disabled} value={zip} type="text" ref='zip' className="input-with-validation form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Country</label><span className='input-with-validation required-input'> * </span>
                                                      <Country onChange={(val)=>{Actions.paymentInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-12">
                                                <label className="margin-bottom-10">Payment Amount (USD)</label><span className='required-input display-inline'> * </span> <span className="display-inline"> Note: Deposit of 15% (minimum_payment_amount_caption), is required to confirm your reservation.</span>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <CurrencyInput ref='payment_amount' className = "display-block" value={payment_amount * 100} onChange={this.handlePaymentAmountChanged.bind(this)}/>
                                                </div>
                                          </div>
                                          <div className="col-md-6"></div>
                                    </div>

                                    <h2 className="mg-sec-left-title">Card Details</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label><span className='required-input'> * </span>
                                                      <input disabled={disabled} value={number} type="text" ref='number' className="input-with-validation form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>CVV</label><span className='required-input'> * </span>
                                                      <input disabled={disabled} type="password" ref='cvc' className="input-with-validation form-control"/>
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


                                    <div className="pull-right margin-top-10">
                                        <MDSpinner className={spinnerClassName}  />
                                        <Anchor  disabled={disabled} onClick={this.processPaymentClicked.bind(this)}  className="btn btn-dark-main btn-next-tab ">Pay Now</Anchor>
                                    </div>
                                    <Anchor disabled={disabled} onClick={this.goBackToPersonal.bind(this)} className="margin-top-10 btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                              </div>
                        </div>
                        <BookingDetails apartmentResponse={apartment} bookingStage={bookingStage}/>
                  </div>
            );
      }
}

module.exports = PaymentInfo;
