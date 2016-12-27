const React = require('react');
const Actions = require('../../actions/actions');
const SearchDateHelper = require('../../helpers/search_date_helper');
const DateHelper = require('../../helpers/date_helper');
const DatePicker = require('react-bootstrap-date-picker');

const onSearchApartmentsClicked = function (e) {
    Actions.searchApartmentsClicked();
    Actions.getApartments();
    Actions.setRoute('/guest-houses');
}
class Room extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <select tabIndex="3"  ref='room' className={className}>
                <option selected value=""  disabled>Room</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value=">=7">&gt;= 7</option>
            </select>
        );
    }
}

class Bed extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <select tabIndex="4" ref='bed'  className={className}>
                <option selected value="" disabled>Bed</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value=">=6">&gt;= 6</option>
            </select>
        );
    }
}


class SearchControls extends React.Component {

    onCheckInDateChanged(value, formattedValue) {
        let updatedData =  {'checkInDate'  : value};
        Actions.searchApartmentsUpdated(updatedData);
    }

    onCheckOutDateChanged(value, formattedValue) {
        let updatedData =  {'checkOutDate'  : value};
        Actions.searchApartmentsUpdated(updatedData);
    }

    componentWillMount() {
        const {searchInfo} = this.props;
    }

    componentDidMount() {
        SearchDateHelper.initializeDatePickers();
    }

    render() {
        let checkInDate, checkOutDate, room, bed;
        let {searchInfo} = this.props;

        if (searchInfo != null) {
            checkInDate     = searchInfo.checkInDate;
            checkOutDate    = searchInfo.checkOutDate;
            room            = searchInfo.room;
            bed             = searchInfo.bed;
        }/* else {
            checkInDate  = DateHelper.getOneWeeksFromNow();
            checkOutDate = DateHelper.getThreeWeeksFromNow();
            room = 1;
            bed = 1;
        }*/


        console.log('inside render function');
        console.log("checkIn date = " + checkInDate);
        console.log('checkOut date = ' + checkOutDate);
        console.log(this.props);

        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <DatePicker ref="checkInDate" placeholder='Check In' value={checkInDate} showClearButton = {false} onChange={this.onCheckInDateChanged} />
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date">
                        <DatePicker ref="checkOutDate" placeholder='Check Out' value={checkOutDate} showClearButton = {false} onChange={this.onCheckOutDateChanged} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="row">
                        <div className="col-xs-6">
                            <Room ref='roomCmp' className="cs-select cs-skin-elastic"/>
                        </div>
                        <div className="col-xs-6">
                            <Bed ref='bedCmp' className="cs-select cs-skin-elastic" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                        <button tabIndex="5" onClick={() =>{onSearchApartmentsClicked(this)}}  className="btn btn-main btn-block">Check Now</button>
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
