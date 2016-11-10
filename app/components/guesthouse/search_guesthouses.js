const React = require('react');
const Rooms = require('./inputs/rooms');
const Beds = require('./inputs/beds');
const Actions = require('../../actions/actions');
const SearchDateHelper = require('../../helpers/search_date_helper');


const onSearchApartmentsClicked = function (checkIn, checkOut, room, bed) {
    const searchParams = {
        'checkInDate'   : checkIn,
        'checkOutDate'  : checkOut,
        'room' : room,
        'bed' : bed
    }

    Actions.setApartmentSearchParams(searchParams);
    Actions.setRoute('/guest-houses');
}


class SearchControls extends React.Component {

    componentDidMount() {
        SearchDateHelper.initializeDatePickers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date mg-check-in">
                        <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                        <input type="text" className="form-control" id="checkInDate" placeholder="Check In"/>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="input-group date mg-check-out">
                    <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                        <input type="text" className="form-control" id="checkOutDate" placeholder="Check Out"/>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="row">
                        <div className="col-xs-6">
                            <Rooms className="cs-select cs-skin-elastic"/>
                        </div>
                        <div className="col-xs-6">
                            <Beds className="cs-select cs-skin-elastic" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                        <button onClick={() =>{onSearchApartmentsClicked('11-05-2016', '11-21-2016', '1', '1')}}  className="btn btn-main btn-block">Check Now</button>
                </div>
            </div>
        );
    }
}


class searchApartment extends React.Component {
    render() {
        const {parentClassName, wrapInContainer} = this.props;

        return (
            <div className={parentClassName}>
                <div className={wrapInContainer}>
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="mg-bn-title">Guest Houses <span className="mg-bn-big">For rates & availability</span></h2>
                        </div>

                        <div className="col-md-9">
                            <div className="mg-bn-forms">
                                <SearchControls />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = searchApartment;
