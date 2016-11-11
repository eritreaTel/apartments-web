const React = require('react');
const Country = require('../shared/country');
const Month = require('../shared/month');
const Year  = require('../shared/year');
const Anchor  = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');

class PaymentInfo extends React.Component {

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
                                                      <input type="text" className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Address Line 1</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>City</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>State/Region</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Last Name</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Address Line 2</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                                <div className="mg-book-form-input">
                                                      <label>Zip/Post Code</label>
                                                      <input type="text" className="form-control"/>
                                                </div>

                                                <div className="mg-book-form-input">
                                                      <label>Country</label>
                                                      <Country />
                                                </div>
                                          </div>
                                    </div>

                                    <h2 className="mg-sec-left-title">Card Info</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>Card Number</label>
                                                      <input type="text" className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="mg-book-form-input">
                                                      <label>CVV</label>
                                                      <input type="password" className="form-control"/>
                                                </div>
                                          </div>
                                          <div className="col-md-12">
                                                <div className="mg-book-form-input">
                                                      <label>Expire</label>
                                                      <div className="row">
                                                            <div className="col-md-6">
                                                                  <Month />
                                                            </div>
                                                            <div className="col-md-6">
                                                                  <Year />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <Anchor  onClick={() => Actions.goToConfirmationClicked()}  className="btn btn-dark-main btn-next-tab pull-right">Pay Now</Anchor>
                                    <Anchor onClick={() => {Actions.goBackToPersonal()}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                              </div>
                        </div>
                        <BookingDetails apartment={apartment} />
                  </div>
            );
      }
}

module.exports = PaymentInfo;
