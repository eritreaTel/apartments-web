const React = require('react');
const Country = require('../shared/country');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const Anchor  = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');

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
            'address_line_1' : e.refs.address_line_1.value,
            'address_line_2'  : e.refs.address_line_2.value,
            'city' : e.refs.city.value,
            'state' : e.refs.state.value,
            'zip'  : e.refs.zip.value,
            'country' : e.refs.countryCmp.refs.country.value,
            'card_number'  : e.refs.card_number.value,
            'cvv'  : e.refs.cvv.value,
            'month' : e.refs.monthCmp.refs.month.value,
            'year' : e.refs.yearCmp.refs.year.value
      }
}

class PaymentInfo extends React.Component {

      componentDidMount(){
            const {bookingStage} =  this.props;
            let payment = bookingStage ? bookingStage.payment : null;
            if (payment != null) {
                  this.refs.first_name.value      = payment.first_name;
                  this.refs.last_name.value       = payment.last_name;
                  this.refs.address_line_1.value  = payment.address_line_1;
                  this.refs.address_line_2.value  = payment.address_line_2;
                  this.refs.city.value            = payment.city;
                  this.refs.state.value           = payment.state;
                  this.refs.zip.value             = payment.zip;
                  this.refs.city.value            = payment.city;
                  this.refs.card_number.value     = payment.card_number;
                  this.refs.country.value         = payment.country;
                  this.refs.month.value           = payment.month;
                  this.refs.year.value            = payment.year;
            }
      }

      render() {
            const {apartment} = this.props;
            return(
                  <div className="row">
                        <div className="col-md-8">
                              <div className="mg-book-form-billing">
                                    <h2 className="mg-sec-left-title">Billing Address</h2>
                                    <div className="row pb40">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>First Name</label>
                                                      <input type="text" ref='first_name' className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Address Line 1</label>
                                                      <input type="text" ref='address_line_1' className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>City</label>
                                                      <input type="text" ref='city' className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>State/Region</label>
                                                      <input type="text" ref='state' className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label>
                                                      <input type="text" ref='last_name' className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Address Line 2</label>
                                                      <input type="text" ref='address_line_2' className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label>
                                                      <input type="text" ref='zip' className="form-control"/>
                                                </div>

                                                <div className="mg-book-form-input">
                                                      <label>Country</label>
                                                      <Country ref='countryCmp' />
                                                </div>
                                          </div>
                                    </div>

                                    <h2 className="mg-sec-left-title">Card Info</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label>
                                                      <input type="text" ref='card_number' className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>CVV</label>
                                                      <input type="password" ref='cvv' className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-12">
                                                <div className="mg-book-form-input">
                                                      <label>Expire</label>
                                                      <div className="row">
                                                            <div className="col-md-6">
                                                                  <Month ref='monthCmp' />
                                                            </div>
                                                            <div className="col-md-6">
                                                                  <Year ref='yearCmp' />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <Anchor  onClick={() => {processPaymentClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Pay Now</Anchor>
                                    <Anchor onClick={() => {goBackToPersonal(this)}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                              </div>
                        </div>
                        <BookingDetails apartment={apartment} />
                  </div>
            );
      }
}

module.exports = PaymentInfo;
