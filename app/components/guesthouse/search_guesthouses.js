const React = require('react');
const DatePicker = require('react-bootstrap-date-picker');
var Select = require('react-select');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const Constants = require('../../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';

import { SingleDatePicker } from 'react-dates';
var onClickOutside = require('react-onclickoutside');

class CheckInDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SingleDatePicker {...this.props} />
    }

    handleClickOutside() {
        const {focused} = this.props;
        if (focused) {
            Actions.searchApartmentsUpdated({'checkInFocused'  : false});
        }
    }
}

class CheckOutDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SingleDatePicker {...this.props} />
    }

    handleClickOutside() {
        const {focused} = this.props;
        if (focused) {
            Actions.searchApartmentsUpdated({'checkOutFocused': false});
        }
    }
}


const onSearchApartmentsClicked = function (searchInfo) {
    //Make sure checkout date is greater than checkIn date
    let {checkInDate, checkOutDate} = searchInfo;
    let validDate = checkOutDate.isAfter(checkInDate, 'day');
    if (!validDate) {
        NotificationManager.error('Please provide valid CheckOut date', 'Booking - Search GuestHouses', Constants.ERROR_DISPLAY_TIME);
        return ;
    }

    Actions.searchApartmentsClicked();
    Actions.saveUserSearches(searchInfo);
    Actions.getApartments();
    Actions.setRoute('/guest-houses');
}

function onRoomChanged(val) {
    let updatedData =  {'room'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
}

function isDayBlocked(date, checkInDate) {
    return date.isAfter(checkInDate, 'day');
}

function onCheckInDateChanged(date) {
    Actions.searchApartmentsUpdated({'checkInDate'  : date});
}

function onCheckInDateFocused(focused) {
    Actions.searchApartmentsUpdated({'checkInFocused'  : focused});
}

function onCheckOutDateChanged(date) {
    Actions.searchApartmentsUpdated({'checkOutDate'  : date});
}

function onCheckOutDateFocused(focused) {
    Actions.searchApartmentsUpdated({'checkOutFocused'  : focused});
}

function onAdultsChanged(val) {
    let updatedData =  {'adult'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
}

const Room  = function (props) {
    var options = [
        { value: '', label: 'Room' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '>6', label: '>6' }
    ];

    return (
        <Select value={props.value} placeholder='Room' clearable={false}  searchable={true}  options={options} onChange={onRoomChanged} />
    );
}

const Adults  = function (props) {
    var options = [
        { value: '',   label: 'Adults' },
        { value: '1',  label: '1' },
        { value: '2',  label: '2' },
        { value: '3',  label: '3' },
        { value: '4',  label: '4' },
        { value: '5',  label: '5' },
        { value: '6',  label: '6' },
        { value: '7',  label: '7' },
        { value: '8',  label: '8' },
        { value: '9',  label: '9' },
        { value: '10', label: '10' }
    ];

    return (
        <Select value={props.value} placeholder='Adults' clearable={false}  searchable={true}  options={options} onChange={onAdultsChanged} />
    );
}

class SearchControls extends React.Component {

    componentWillMount() {
        const {searchInfo} = this.props;
    }

    render() {
        let checkInDate, checkOutDate, room, adult, checkInFocused = false, checkOutFocused = false;
        let {searchInfo} = this.props;
        let displayFormat = "DD-MM-YYYY";

        var CheckInDateInstance = onClickOutside(CheckInDate);
        var CheckOutDateInstance = onClickOutside(CheckOutDate);

        if (searchInfo != null) {
            checkInFocused  = searchInfo.checkInFocused ? true : false;
            checkOutFocused = searchInfo.checkOutFocused ? true : false;
            checkInDate     = searchInfo.checkInDate;
            checkOutDate    = searchInfo.checkOutDate;
            room            = searchInfo.room;
            adult             = searchInfo.adult;
        }

        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <CheckInDateInstance  placeholder="CheckIn Date" displayFormat={displayFormat} date={checkInDate} numberOfMonths={1} id="checkInDate"  focused={checkInFocused}  onFocusChange={({ focused }) => {onCheckInDateFocused(focused) }} onDateChange={(date) => { onCheckInDateChanged(date) }} />

                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <CheckOutDateInstance  placeholder="Check Out" displayFormat={displayFormat} date={checkOutDate} numberOfMonths={1} id="checkOutDate"  focused={checkOutFocused}  onFocusChange={({ focused }) => {onCheckOutDateFocused(focused) }} onDateChange={(date) => { onCheckOutDateChanged(date) }} />
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="row">
                        <div className="col-xs-6">
                            <Room id='room' value={room}/>
                        </div>
                        <div className="col-xs-6">
                            <Adults id='adults' value={adult} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                        <button tabIndex="5" onClick={() =>{onSearchApartmentsClicked(searchInfo)}}  className="btn btn-main btn-block">Check Now</button>
                </div>
            </div>
        );
    }
}


class searchApartment extends React.Component {
    render() {
        const {parentClassName, wrapInContainer, searchInfo} = this.props;

        return (
            <div className={parentClassName}>
                <div className={wrapInContainer}>
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="mg-bn-title">Guest Houses <span className="mg-bn-big">For rates & availability</span></h2>
                        </div>

                        <div className="col-md-9">
                            <div className="mg-bn-forms">
                                <SearchControls searchInfo={searchInfo} />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = searchApartment;
