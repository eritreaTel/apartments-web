const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const FormValidator = require('../../helpers/form_validation_helper');
const CurrencyFormatter = require('currency-formatter');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import Checkbox from 'rc-checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";


const goToPersonalInfoClicked = function (e) {
    Actions.goToPersonalInfoClicked();
}

const goBackToSearch = function (e) {
    Actions.goBackToSearch();
}

function onReserveCarPickUpCheckBoxChanged(e) {
    Actions.AdditionalServicesUpdated({'car_pickup' : e.target.checked});
}

function onReserveCarRentalsCheckBoxChanged(e) {
    Actions.AdditionalServicesUpdated({'car_rentals' : e.target.checked});
}

function onReserveTourGuidesCheckBoxChanged(e) {
    Actions.AdditionalServicesUpdated({'tour_guides' : e.target.checked});
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

class AdditionalInfo extends React.Component {

    componentDidMount() {
        this.refs.arrival_time.focus();
    }

    render() {
        const {apartment, bookingStage, user} = this.props;
        let additional = bookingStage && bookingStage.additional ? bookingStage.additional : {};
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let arrival_date = additional.arrival_date;
        let arrival_time = additional.arrival_time;
        let airline_name = additional.airline_name;
        let carPickup = (additional.car_pickup == 1) ? 1 : 0 ;
        let carRentals = (additional.car_rentals == 1) ? 1 : 0 ;
        let tourGuides = (additional.tour_guides == 1) ? 1 : 0 ;

        let airportPickUpCss = carPickup? 'row margin-left-20' : 'hide';

        let processingPersonalInfo = false;
        let disabled  = loggedIn || processingPersonalInfo;
        let disableButton = processingPersonalInfo;
        let spinnerClassName = processingPersonalInfo ? 'margin-right-20' : 'hide margin-right-20';

        let carPickUpFee = CurrencyFormatter.format(30, { code: 'USD' });

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Additional Services</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={carPickup}  onChange={onReserveCarPickUpCheckBoxChanged}/> Do you want to book a private car ride in advance for {carPickUpFee}? Airport is 42 kilometers/26 miles away from kampala. Make sure to have someone to pick you up.
                                    </div>
                                </div>
                            </div>

                            <div className={airportPickUpCss}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Arrival Date</label><span className='required-input'> * </span>
                                            <Validate validators={[ValidationHelper.isRequired]}>
                                                <input value={airline_name} disabled={disabled} ref='airline_name' type="text" className="input-with-validation form-control"/>
                                            </Validate>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                        <div className="col-md-4">
                                            <div className="mg-book-form-input">
                                                <label>Airline Name</label><span className='required-input'> * </span>
                                                <input value="Entebe International Airport" disabled={true} ref='airport_name' type="text" className="input-with-validation form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Arrival Date</label><span className='required-input'> * </span>
                                            <Validate validators={[ValidationHelper.isRequired]}>
                                                <input value={arrival_time} disabled={disabled} ref='arrivate_time' type="text" className="input-with-validation form-control"/>
                                            </Validate>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input">
                                            <label>Airline Name</label><span className='required-input'> * </span>
                                            <Validate validators={[ValidationHelper.isRequired]}>
                                                <input value={airline_name} disabled={disabled} ref='airline_name' type="text" className="input-with-validation form-control"/>
                                            </Validate>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={tourGuides}  onChange={onReserveTourGuidesCheckBoxChanged}/> Do you want us to hook you up with local tour guide. If you click yes, we will send you separate email with list of tour guides
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input">
                                        <Checkbox defaultChecked={carRentals}  onChange={onReserveCarRentalsCheckBoxChanged}/> Do you want us to help you rent car? If clicked yes, we will send you an email with list of car rentals in Kampala.
                                    </div>
                                </div>
                            </div>

                            <div className="pull-right">
                                <MDSpinner className={spinnerClassName}  />
                                <Anchor disabled={disableButton} onClick={() => {goToPersonalInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab">Next</Anchor>
                            </div>
                            <Anchor disabled={disableButton} onClick={() => {goBackToSearch(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = AdditionalInfo;
