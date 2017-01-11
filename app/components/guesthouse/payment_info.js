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

      Actions.createApartmentBooking(payment);
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

      componentDidMount() {
            this.refs.first_name.focus();
      }

      render() {
            const {apartment, bookingStage} = this.props;
            let first_name=undefined, last_name=undefined, zip=undefined, country=undefined;
            let card_number=undefined, month=undefined, year=undefined;

            let payment = bookingStage ? bookingStage.payment : null;
            let personal = bookingStage ? bookingStage.personal : null;

            if( payment) {
                  first_name  = payment.first_name;
                  last_name   = payment.last_name;
                  zip         = payment.zip;
                  country     = payment.country;
                  card_number = payment.card_number;
                  month       = payment.month;
                  year        = payment.year;
            }

            //If payment is null, initialize firstname and last name from personal information
            if (!payment && personal) {
                  first_name  = personal.first_name;
                  last_name   = personal.last_name;
            }

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
                                                            <input value={first_name} type="text" ref='first_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input value={last_name} type="text" ref='last_name' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input value={zip} type="text" ref='zip' className="input-with-validation form-control"/>
                                                      </Validate>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Country</label><span className='input-with-validation required-input'> * </span>
                                                      <Country value={country} />
                                                </div>
                                          </div>
                                    </div>
                                    <h2 className="mg-sec-left-title">Card Info</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label><span className='required-input'> * </span>
                                                      <Validate validators={[ValidationHelper.isRequired]}>
                                                            <input value={card_number} type="text" ref='card_number' className="input-with-validation form-control"/>
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
                                                      <Month value={month} />
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Expire Year</label><span className='required-input'> * </span>
                                                      <Year value={year} />
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
