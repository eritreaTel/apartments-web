const React = require('react');
const Country = require('../shared/country');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const Anchor  = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

const processPaymentClicked = function (e) {
      let payment = getPaymentInfo(e);
      Actions.processPayment(payment);
      Actions.createApartmentBooking(payment)
      Actions.goToConfirmationClicked()
}

const goBackToPersonal = function (e) {
      let payment = getPaymentInfo(e);
      console.log('payment information is');
      console.log(payment);
      Actions.goBackToPersonal(payment);
}

const getPaymentInfo = function (e) {
      return {
            'first_name' : e.refs.first_name.value,
            'last_name'  : e.refs.last_name.value,
            'zip'  : e.refs.zip.value,
            'card_number'  : e.refs.card_number.value,
            'cvv'  : e.refs.cvv.value
      }
}

class PaymentInfo extends React.Component {

      componentDidMount(){
            const {bookingStage} =  this.props;
            let payment = bookingStage ? bookingStage.payment : null;
            if (payment != null) {
                  this.refs.first_name.value      = payment.first_name;
                  this.refs.last_name.value       = payment.last_name;
                  this.refs.zip.value             = payment.zip;
                  this.refs.card_number.value     = payment.card_number;
            }
      }

      render() {
            const {apartment, bookingStage} = this.props;
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
                                                            <input type="text" ref='first_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input type="text" ref='last_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input type="text" ref='zip' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Country</label><span className='input-with-validation required-input'> * </span>
                                                      <Country />
                                                </div>
                                          </div>
                                    </div>
                                    <h2 className="mg-sec-left-title">Card Info</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input type="text" ref='card_number' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>CVV</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input type="password" ref='cvv' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Expire Month</label><span className='required-input'> * </span>
                                                      <Month />
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Expire Year</label><span className='required-input'> * </span>
                                                      <Year />
                                                </div>
                                          </div>
                                    </div>


                                    <Anchor  onClick={() => {processPaymentClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Pay Now</Anchor>
                                    <Anchor onClick={() => {goBackToPersonal(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                              </div>
                        </div>
                        <BookingDetails apartment={apartment} bookingStage={bookingStage}/>
                  </div>
            );
      }
}

module.exports = PaymentInfo;
