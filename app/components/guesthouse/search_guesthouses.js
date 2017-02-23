const React = require('react');
const DatePicker = require('react-bootstrap-date-picker');
var Select = require('react-select');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');
const Constants = require('../../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';

import { SingleDatePicker } from 'react-dates';
import { DateRangePicker } from 'react-dates';

var onClickOutside = require('react-onclickoutside');

class SearchDates extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DateRangePicker {...this.props} />
    }

    handleClickOutside() {
        const {focused} = this.props;
        if (focused) {
            Actions.searchApartmentsUpdated({'checkInFocused'  : false});
        }
    }
}

const onSearchApartmentsClicked = function (searchInfo) {
    let {checkInDate, checkOutDate} = searchInfo;
    let validDate = checkOutDate.isAfter(checkInDate, 'day');
    if (!validDate) {
        NotificationManager.error('Please provide valid CheckOut date', 'Booking - Search GuestHouses', Constants.ERROR_DISPLAY_TIME);
        return ;
    }

    //Sequence of actions matters
    Actions.saveUserSearches(searchInfo);

    let isProcessing = {searchingApartments: true};
    Actions.setIsProcessing(isProcessing);

    const searchApartmentPromise = Actions.getApartments();
    searchApartmentPromise.then(response => {
        Actions.searchApartmentsClicked();
        Actions.setRoute('/guest-houses');

        isProcessing = {searchingApartments: false};
        Actions.setIsProcessing(isProcessing);
    });
}

function onRoomChanged(val) {
    let updatedData =  {'room'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
}

function onChildrenChanged(val) {
    let updatedData =  {'children'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
}

function onDatePickerChanged(dates) {
    Actions.searchApartmentsUpdated({'checkInDate'  : dates.startDate,  'checkOutDate' : dates.endDate});
}

function onDatePickerFocused(focused) {
    Actions.searchApartmentsUpdated({'focusedInput'  : focused});
}

function onAdultsChanged(val) {
    let updatedData =  {'adult'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
}

const Room  = function (props) {
    var options = [
        { value: '1', label: '1 Room' },
        { value: '2', label: '2 Rooms' },
        { value: '3', label: '3 Rooms' },
        { value: '4', label: '4 Rooms' },
        { value: '5', label: '5 Rooms' },
        { value: '5', label: '6 Rooms' },
        { value: '>6', label: '>7 Rooms' }
    ];

    return (
        <Select {...props} placeholder='Rooms' clearable={false}  searchable={true}  options={options} onChange={onRoomChanged} />
    );
}

const Children  = function (props) {
    var options = [
        { value: '0', label: '0 Children' },
        { value: '1', label: '1 Children' },
        { value: '2', label: '2 Children' },
        { value: '3', label: '3 Children' },
        { value: '4', label: '4 Children' },
        { value: '5', label: '5 Children' },
        { value: '5', label: '6 Children' },
        { value: '>6', label: '>7 Children' }
    ];

    return (
        <Select {...props} className="search-children" placeholder='Children' clearable={false}  searchable={true}  options={options} onChange={onChildrenChanged} />
    );
}

const Adults  = function (props) {
    var options = [
        { value: '1',  label: '1 Adult' },
        { value: '2',  label: '2 Adults' },
        { value: '3',  label: '3 Adults' },
        { value: '4',  label: '4 Adults' },
        { value: '5',  label: '5 Adults' },
        { value: '6',  label: '6 Adults' },
        { value: '7',  label: '> 7 Adults' }
    ];

    return (
        <Select {...props} placeholder='Adults' clearable={false}  searchable={true}  options={options} onChange={onAdultsChanged} />
    );
}

class SearchControls extends React.Component {

    componentWillMount() {
        const {searchInfo} = this.props;
    }

    render() {
        let checkInDate, checkOutDate, room, adult, children, checkInFocused = false, checkOutFocused = false;
        let {searchInfo} = this.props;
        let displayFormat = "DD-MM-YYYY";
        let focusedInput = null;

        if (searchInfo != null) {
            focusedInput    = searchInfo.focusedInput ? searchInfo.focusedInput : null;
            checkInDate     = searchInfo.checkInDate;
            checkOutDate    = searchInfo.checkOutDate;
            room            = searchInfo.room;
            adult           = searchInfo.adult;
            children        = searchInfo.children;
        }

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group date">
                        <SearchDates  focusedInput={focusedInput} minimumNights={1} startDate={checkInDate}  endDate={checkOutDate} startDatePlaceholderText="CheckIn" endDatePlaceholderText="CheckOut" displayFormat={displayFormat}  onFocusChange={(focused) => {onDatePickerFocused(focused) }} onDatesChange={(dates) => { onDatePickerChanged(dates) }} />
                    </div>
                </div>

                <div className="col-md-6">
                    <Room className="search-room"  value={room} />
                    <Adults className="search-adult" value={adult} />
                    <Children  className="search-children" value={children}/>
                    <button tabIndex="5" onClick={() =>{onSearchApartmentsClicked(searchInfo)}}  className="btn btn-main btn-block search-booknow">Check Now</button>
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
