const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const FormValidator = require('../../helpers/form_validation_helper');
const CurrencyFormatter = require('currency-formatter');
const DatePicker = require('react-bootstrap-date-picker');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import Checkbox from 'rc-checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import TimeInput from 'react-time-input';


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

class AdditionalInfo extends React.Component {
    onReserveCarPickUpCheckBoxChanged(e) {
        Actions.AdditionalServicesUpdated({'car_pickup' : e.target.checked});
        this.refs.airline_name.focus();
    }

    onReserveCarRentalsCheckBoxChanged(e) {
        Actions.AdditionalServicesUpdated({'car_rentals' : e.target.checked});
    }

    onReserveTourGuidesCheckBoxChanged(e) {
        Actions.AdditionalServicesUpdated({'tour_guides' : e.target.checked});
    }

    onArrivalDateChanged(value, formattedValue) {
        Actions.AdditionalServicesUpdated({'arrival_date' : value.substring(0, 10)});
    }

    onArrivalTimeChanged(val) {
        Actions.AdditionalServicesUpdated({'arrival_time' : val});
    }

    goToPersonalInfoClicked() {
        const {bookingStage : {additional}} = this.props;
        if (additional && additional.car_pickup == true) {
            const additionalServicesResponse = Actions.AdditionalServicesUpdated({'airline_name': this.refs.airline_name.value});
            additionalServicesResponse.then(data => {
                let requiredFields = {
                    'airline_name': "Please enter airline name", 'arrival_date': "Please enter arrival date",
                    'arrival_time': "Please arrival time"
                };

                let result = FormValidator.validateRequiredDatas(this, data, requiredFields, 'Booking - Additional Services');
                if (result == false) {
                    return;
                }
                Actions.goToPersonalInfoClicked();
            });
        } else {
            Actions.goToPersonalInfoClicked();
        }
    }

    goBackToSearch() {
        const {bookingStage : {additional}} = this.props;
        if (additional && additional.car_pickup == true) {
            Actions.AdditionalServicesUpdated({'airline_name' : this.refs.airline_name.value});
        }
        Actions.goBackToSearch();
    }

    componentDidMount() {
        this.refs.airline_name.focus();
    }

    render() {
        const {apartment, bookingStage , user} = this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let additional = bookingStage.additional;
        let arrival_date = undefined, arrival_time = undefined, airline_name = undefined;
        let carPickup = 0, carRentals = 0, tourGuides = 0;

        if (additional) {
            arrival_date = additional.arrival_date;
            arrival_time = (additional.arrival_time != undefined) ? additional.arrival_time : '18:30';
            airline_name = additional.airline_name;
            carPickup = (additional.car_pickup == 1) ? 1 : 0 ;
            carRentals = (additional.car_rentals == 1) ? 1 : 0 ;
            tourGuides = (additional.tour_guides == 1) ? 1 : 0 ;
        }

        let airportPickUpCss = carPickup? 'row margin-left-20' : 'hide';
        let carPickUpFee = CurrencyFormatter.format(30, { code: 'USD' });

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Additional Services</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={carPickup}  onChange={this.onReserveCarPickUpCheckBoxChanged.bind(this)}/> Do you want to book a private car ride in advance for {carPickUpFee}? Airport is 42 kilometers/26 miles away from kampala. Make sure to have someone to pick you up.
                                    </div>
                                </div>
                            </div>

                            <div className={airportPickUpCss}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Airline Name</label><span className='required-input'> * </span>
                                            <Validate validators={[ValidationHelper.isRequired]}>
                                                <input value={airline_name} ref='airline_name' type="text" className="input-with-validation form-control"/>
                                            </Validate>
                                        </div>
                                    </div>
                                    <div className="col-md-1" />
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Arrive At</label><span className='required-input'> * </span>
                                            <input value="Entebe International Airport"  ref='airport_name' type="text" className="input-with-validation form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Arrival Date</label><span className='required-input'> * </span>
                                            <DatePicker ref="arrival_date" placeholder='Arrival Date' className="input-with-validation form-control" value={arrival_date} showClearButton = {false} onChange={this.onArrivalDateChanged} />
                                        </div>
                                    </div>
                                    <div className="col-md-1"/>
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Arrival Time/(Uganda Time)</label><span className='required-input'> * </span>
                                            <Validate validators={[ValidationHelper.isRequired]}>
                                                <TimeInput initTime={arrival_time} ref="arrival_time" className="input-with-validation form-control" onTimeChange={this.onArrivalTimeChanged.bind(this)} />
                                            </Validate>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={tourGuides}  onChange={this.onReserveTourGuidesCheckBoxChanged.bind(this)}/> Do you want us to hook you up with local tour guide. If you click yes, we will send you separate email with list of tour guides
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={carRentals}  onChange={this.onReserveCarRentalsCheckBoxChanged.bind(this)}/> Do you want us to help you rent car? If clicked yes, we will send you an email with list of car rentals in Kampala.
                                    </div>
                                </div>
                            </div>

                            <div className="pull-right">
                                <Anchor  onClick={this.goToPersonalInfoClicked.bind(this)}  className="btn btn-dark-main btn-next-tab">Next</Anchor>
                            </div>
                            <Anchor onClick={this.goBackToSearch.bind(this)} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = AdditionalInfo;
