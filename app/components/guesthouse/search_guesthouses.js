const React = require('react');
const Actions = require('../../actions/actions');
const SearchDateHelper = require('../../helpers/search_date_helper');
const DateHelper = require('../../helpers/date_helper');

const saveSearchInfo = function(e) {
    let searchParams = getSearchParams(e);
    Actions.saveSearchInfo(searchParams);
}

const onSearchApartmentsClicked = function (e) {
    console.log('on seach apartments clicked');
    let searchParams = getSearchParams(e);
    Actions.searchApartmentsClicked(searchParams);
    Actions.setRoute('/guest-houses');
}

const getSearchParams = function (e) {
    return {
            'checkInDate'   : e.refs.checkInDate.value,
            'checkOutDate'  : e.refs.checkOutDate.value,
            'room' : e.refs.roomCmp.refs.room.value,
            'bed' : e.refs.bedCmp.refs.bed.value,
            'totalDays' : DateHelper.getDaysTotalBetweenDates(e.refs.checkInDate.value, e.refs.checkOutDate.value)
        }
}

class Room extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <select  ref='room' className={className}>
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
            <select ref='bed'  className={className}>
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

    componentDidMount() {
        SearchDateHelper.initializeDatePickers();

        //populate exiting search data if present
        const{searchInfo} = this.props;
        if (!(searchInfo == undefined || searchInfo == null)) {
            const {checkInDate, checkOutDate, room, bed} = searchInfo;
            this.refs.checkInDate.value = checkInDate;
            this.refs.checkOutDate.value = checkOutDate;
            this.refs.roomCmp.refs.room.value = room;
            this.refs.bedCmp.refs.bed.value = bed;
        } else {
            //Initialize default search data
            this.refs.checkInDate.value = DateHelper.getTomorrow();
            this.refs.checkOutDate.value = DateHelper.addDaysToDate(DateHelper.getTomorrow(), 7);
            this.refs.roomCmp.refs.room.value = 1;
            this.refs.bedCmp.refs.bed.value = 1;

            saveSearchInfo(this); // persist the default search paramters
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date mg-check-in">
                        <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                        <input type="text" className="form-control" ref="checkInDate" placeholder="Check In"/>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date mg-check-out">
                    <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                        <input type="text" className="form-control" ref="checkOutDate" placeholder="Check Out"/>
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
                        <button onClick={() =>{onSearchApartmentsClicked(this)}}  className="btn btn-main btn-block">Check Now</button>
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
