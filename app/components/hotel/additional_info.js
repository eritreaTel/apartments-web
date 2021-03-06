const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const FormValidator = require('../../helpers/form_validation_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const CurrencyFormatter = require('currency-formatter');
const DatePicker = require('react-bootstrap-date-picker');
var onClickOutside = require('react-onclickoutside');
import Checkbox from 'rc-checkbox';
import TimeInput from 'react-time-input';

import { SingleDatePicker } from 'react-dates';

class ArrivalDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SingleDatePicker {...this.props} />
    }

    handleClickOutside() {
        const {focused} = this.props;
        if (focused) {
            Actions.additionalServicesUpdated({'arrival_date_focused' : false});
        }
    }
}

function onArrivalDateChanged(date) {
    Actions.additionalServicesUpdated({'arrival_date' : date});
}

function onArrivalDateFocused(focused) {
    Actions.additionalServicesUpdated({'arrival_date_focused' : focused});
}

class AdditionalInfo extends React.Component {

    componentWillMount() {
        const {bookingStage : {searchInfo, additional}} = this.props;
        if (additional.arrival_date == undefined) {
            Actions.additionalServicesUpdated({'arrival_date': searchInfo.checkInDate});
        }
    }

    onReserveCarPickUpCheckBoxChanged(e) {
        const {apartmentResponse : {totalPrice}, bookingStage : {payment, additional}} = this.props;

        Actions.additionalServicesUpdated({'airport_pickup' : e.target.checked});
        let payment_amount = PricingHelper.getTotalPrice(totalPrice, additional);
        Actions.paymentInfoUpdated({'payLater' : false, 'payFull' : true, 'payPartial' : false, 'payment_amount' : payment_amount});

        this.refs.airline_name.focus();
    }

    onAirlineNameChanged() {
        Actions.additionalServicesUpdated({'airline_name' : this.refs.airline_name.value});
    }

    onReserveCarRentalsCheckBoxChanged(e) {
        Actions.additionalServicesUpdated({'car_rentals' : e.target.checked});
    }

    onReserveTourGuidesCheckBoxChanged(e) {
        Actions.additionalServicesUpdated({'tour_guides' : e.target.checked});
    }

    onArrivalTimeChanged(val) {
        Actions.additionalServicesUpdated({'arrival_time' : val});
    }

    goToPersonalInfoClicked() {
        const {bookingStage : {additional}} = this.props;
        if (additional && additional.airport_pickup == true) {
            let requiredFields = {
                'airline_name': "Please enter airline name", 'arrival_date': "Please enter arrival date",
                'arrival_time': "Please arrival time"
            };

            let result = FormValidator.validateRequiredDatas(this, additional, requiredFields, 'Booking - Additional Services');
            if (result == false) {
                return;
            }
        }
        Actions.goToPersonalInfoClicked();
        Actions.setRoute('/payment');
    }

    goBackToSearch() {
        const {bookingStage : {additional}} = this.props;
        if (additional && additional.airport_pickup == true) {
            Actions.additionalServicesUpdated({'airline_name' : this.refs.airline_name.value});
        }
        Actions.goBackToSearch();
        Actions.setRoute('/hotels');
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {apartmentResponse, bookingStage , user} = this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let {additional, searchInfo} = bookingStage;
        let arrival_time = '', airline_name = '';
        let airportPickup = 0, carRentals = 0, tourGuides = 0, arrivalDateFocused = false;
        let arrival_date = searchInfo.checkInDate;

        let ArrivalDateInstance = onClickOutside(ArrivalDate);

        if (additional) {
            arrival_date  = additional.arrival_date ? additional.arrival_date : arrival_date;
            airline_name  = additional.airline_name ? additional.airline_name : '';
            arrival_time  = additional.arrival_time ? additional.arrival_time : '';
            arrivalDateFocused = (additional.arrival_date_focused == 1) ? true : false;
            
            airportPickup = (additional.airport_pickup == 1) ? 1 : 0 ;
            carRentals    = (additional.car_rentals == 1) ? 1 : 0 ;
            tourGuides    = (additional.tour_guides == 1) ? 1 : 0 ;
        }

        let airportPickUpSectionCss = airportPickup? 'row margin-bottom-20' : 'hide';
        let airportPickUpOptionCSS  = airportPickup ? 'mg-book-form-input-additional-info min-height-50' : 'mg-book-form-input-additional-info';
        let airportPickUpFee = CurrencyFormatter.format(30, { code: 'USD' });

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Additional Services</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={airportPickUpOptionCSS}>
                                        <Checkbox  defaultChecked={airportPickup}  onChange={this.onReserveCarPickUpCheckBoxChanged.bind(this)}/><div className="margin-left-10 fontsize-16 display-inline"><label>Private car pick for <strong>{airportPickUpFee}? </strong> Note: Airport is 42 kilometers/26 miles away from kampala.</label></div>
                                    </div>
                                </div>
                            </div>

                            <div className={airportPickUpSectionCss}>
                                <div className="row">
                                    <div className="col-md-1" />
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input-additional-info">
                                            <label>Arrive At:</label>
                                            <span className="display-block"><strong>Entebe International Airport</strong></span>
                                        </div>
                                    </div>
                                    <div className="col-md-1" />
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input-additional-info">
                                            <label>Airline Name</label><span className='required-input'> * </span>
                                            <input value={airline_name} ref='airline_name' type="text" className="input-with-validation form-control" onChange={this.onAirlineNameChanged.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>
                                <div className="row">
                                    <div className="col-md-1"/>
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input-additional-info">
                                            <label>Arrival Date</label><span className='required-input'> * </span>
                                            <ArrivalDateInstance className="disabled-color" id="arrivalDate" placeholder='Arrival Date' date={arrival_date} numberOfMonths={1} focused={arrivalDateFocused} onFocusChange={({ focused }) => {onArrivalDateFocused(focused) }} onDateChange={(date) => { onArrivalDateChanged(date) }}/>
                                        </div>
                                    </div>
                                    <div className="col-md-1"/>
                                    <div className="col-md-4">
                                        <div className="mg-book-form-input-additional-info">
                                            <label>Arrival Time/24-hour clock</label><span className='required-input'> * </span>
                                            <TimeInput initTime={arrival_time} ref="arrival_time" className="input-with-validation form-control" onTimeChange={this.onArrivalTimeChanged.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input-additional-info">
                                        <Checkbox defaultChecked={tourGuides}  onChange={this.onReserveTourGuidesCheckBoxChanged.bind(this)}/><div className="margin-left-10 fontsize-16 display-inline"><label>Get list of  tourGuides, for free?</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mg-book-form-input-additional-info">
                                        <Checkbox defaultChecked={carRentals}  onChange={this.onReserveCarRentalsCheckBoxChanged.bind(this)}/><div className="margin-left-10 fontsize-16 display-inline"><label>Get list of car rentals, for free?</label> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pull-right">
                                <Anchor  onClick={this.goToPersonalInfoClicked.bind(this)}  className="btn btn-dark-main btn-next-tab">Next</Anchor>
                            </div>
                            <Anchor onClick={this.goBackToSearch.bind(this)} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartmentResponse={apartmentResponse} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = AdditionalInfo;
