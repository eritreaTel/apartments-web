const React = require('react');
const DatePicker = require('react-bootstrap-date-picker');
var Select = require('react-select');
const Actions = require('../../actions/actions');
const SearchDateHelper = require('../../helpers/search_date_helper');
const DateHelper = require('../../helpers/date_helper');

import { SingleDatePicker } from 'react-dates';

const onSearchApartmentsClicked = function (searchInfo) {
    Actions.searchApartmentsClicked();
    Actions.saveUserSearches(searchInfo);
    Actions.getApartments();
    Actions.setRoute('/guest-houses');
}

function onRoomChanged(val) {
    let updatedData =  {'room'  : val.value};
    Actions.searchApartmentsUpdated(updatedData);
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

function onBedChanged(val) {
    let updatedData =  {'bed'  : val.value};
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

const Bed  = function (props) {
    var options = [
        { value: '', label: 'Bed' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '>6', label: '>6' }
    ];

    return (
        <Select value={props.value} placeholder='Bed' clearable={false}  searchable={true}  options={options} onChange={onBedChanged} />
    );
}

class SearchControls extends React.Component {

    componentWillMount() {
        const {searchInfo} = this.props;
    }

    componentDidMount() {
        SearchDateHelper.initializeDatePickers();
    }

    render() {
        let checkInDate, checkOutDate, room, bed, checkInFocused = false, checkOutFocused = false;
        let {searchInfo} = this.props;

        if (searchInfo != null) {
            checkInFocused  = searchInfo.checkInFocused ? true : false;
            checkOutFocused = searchInfo.checkOutFocused ? true : false;
            checkInDate     = searchInfo.checkInDate;
            checkOutDate    = searchInfo.checkOutDate;
            room            = searchInfo.room;
            bed             = searchInfo.bed;
        }

        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <SingleDatePicker placeholder="CheckIn Date" date={checkInDate} numberOfMonths={1} id="checkInDate"  focused={checkInFocused}  onFocusChange={({ focused }) => {onCheckInDateFocused(focused) }} onDateChange={(date) => { onCheckInDateChanged(date) }} />

                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <SingleDatePicker placeholder="Check Out" date={checkOutDate} numberOfMonths={1} id="checkOutDate"  focused={checkOutFocused}  onFocusChange={({ focused }) => {onCheckOutDateFocused(focused) }} onDateChange={(date) => { onCheckOutDateChanged(date) }} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="row">
                        <div className="col-xs-6">
                            <Room id='room' value={room}/>
                        </div>
                        <div className="col-xs-6">
                            <Bed id='bed' value={bed} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
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
