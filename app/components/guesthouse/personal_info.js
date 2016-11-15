const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');


const goToPaymentInfoClicked = function (e) {
    let info = getPersonalInfo(e);
    Actions.createUser(info);
    Actions.goToPaymentClicked(info);
}

const goBackToSearch = function (e) {
    Actions.goBackToSearch(getPersonalInfo(e))
}

const getPersonalInfo = function (e) {
    return {
        'first_name' : e.refs.first_name.value,
        'last_name'  : e.refs.last_name.value,
        'city'  : e.refs.city.value,
        'country' : e.refs.countryCmp.refs.country.value,
        'phone_number' : e.refs.phone_number.value,
        'username' : e.refs.username.value,
        'password' : e.refs.password.value,
        'renter_password' : e.refs.renter_password.value,
        'terms' : e.refs.terms.value,
        'type' : 'seeker'
    }
}

class PersonalInfo extends React.Component {

    componentDidMount() {
        const {bookingStage} =  this.props;
        let personal = bookingStage ? bookingStage.personal : null;
        if (personal != null) {
            this.refs.first_name.value      = personal.first_name;
            this.refs.last_name.value       = personal.last_name;
            this.refs.city.value            = personal.city;
            this.refs.phone_number.value    = personal.phone_number;
            this.refs.username.value        = personal.username;
            this.refs.terms.value           = personal.terms;
            this.refs.country.value         = personal.country;
        }
    }

    render() {
        const {apartment, bookingStage} = this.props;
        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Personal Info</h2>
                            <div className="row pb40">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>First Name</label>
                                        <input ref='first_name' type="text" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>City</label>
                                        <input ref='city' type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label>
                                        <input ref='last_name' type="text" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>Country</label>
                                        <Country ref='countryCmp' />
                                    </div>
                                </div>
                            </div>

                            <h2 className="mg-sec-left-title">Account Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label>
                                        <input ref='phone_number' type="tel" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>Password</label>
                                        <input ref='password' type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Email Address</label>
                                        <input ref='username' type="email" className="form-control"/>
                                    </div>
                                    <div className="mg-book-form-input">
                                        <label>Re-Password</label>
                                        <input ref='renter_password' type="password" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix mg-terms-input">
                                <div className="pull-right">
                                    <label><input ref ='terms' type="checkbox"/> By Sign up you are agree with our <Anchor>terms and condition</Anchor></label>
                                </div>
                            </div>

                            <Anchor onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                            <Anchor onClick={() => {goBackToSearch(this)}} className="btn btn-dark-main btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = PersonalInfo;
