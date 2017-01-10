const React = require('react');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const BookingDetails = require('./booking_details');
const CookiesHelper  = require('../../helpers/cookies_helper');
const Checkbox = require('../shared/checkbox');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;


const goToPaymentInfoClicked = function (e) {
    let info = getPersonalInfo(e);
    Actions.personalInfoUpdated(info);

    const loggedIn = (!!CookiesHelper.getSessionCookie());
    if (!loggedIn) {
        Actions.createUser(info);
    }
    Actions.goToPaymentClicked();
}

const goBackToSearch = function (e) {
    let info = getPersonalInfo(e);
    Actions.personalInfoUpdated(info);

    Actions.goBackToSearch();
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
        'terms' : e.refs.termsCmp.refs.terms.value,
        'type' : 'seeker',
        'is_active' : 1
    }
}

class PersonalInfo extends React.Component {

    render() {
        const {apartment, bookingStage, acceptToS, user} = this.props;
        let personal = bookingStage ? bookingStage.personal : null;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let first_name = undefined, last_name = undefined, city = undefined , phone_number = undefined, email = undefined, terms = undefined;
        let country = 'Select your country' ;
        let acceptTermsCss = 'clearfix mg-terms-input', passwordSectionClass ='row', disableElement = '';
        if (loggedIn) {
            first_name      = user.first_name;
            last_name       = user.last_name;
            city            = user.city;
            phone_number    = user.phone_number;
            email           = user.email;
            terms           = user.terms;
            country         = user.country;

            disableElement  = true;
            acceptTermsCss = 'hide clearfix mg-terms-input';
            passwordSectionClass = 'hide row';

        } else if (personal) {
            first_name      = personal.first_name;
            last_name       = personal.last_name;
            city            = personal.city;
            phone_number    = personal.phone_number;
            email           = personal.email;
            terms           = personal.terms;
            country = personal && personal.country ? personal.country : 'Select your country';
        }

        return (
                <div className="row">
                    <div className="col-md-8">
                        <div className="mg-book-form-personal">
                            <h2 className="mg-sec-left-title">Personal Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>First Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={first_name} disabled={disableElement} ref='first_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Last Name</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={last_name} disabled={disableElement} ref='last_name' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>City</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={city}  disabled={disableElement} ref='city' type="text" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Country</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <Country value={country} disabled={loggedIn} ref='countryCmp' />
                                        </Validate>
                                    </div>
                                </div>
                            </div>

                            <h2 className="mg-sec-left-title">Account Info</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Email Address</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={email} disabled={disableElement} ref='email' type="email" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Phone</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input value={phone_number} disabled={disableElement} ref='phone_number' type="tel" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>
                            <div className={passwordSectionClass}>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mg-book-form-input">
                                        <label>Re-Password</label><span className='required-input'> * </span>
                                        <Validate validators={[ValidationHelper.isRequired]}>
                                            <input disabled={disableElement} ref='renter_password' type="password" className="input-with-validation form-control"/>
                                        </Validate>
                                    </div>
                                </div>
                            </div>

                            <div className={acceptTermsCss}>
                                <div className="pull-right">
                                    <Checkbox name='terms' defaultChecked={acceptToS} checked={acceptToS} ref ='termsCmp' label=' By Sign up you are agree with our terms and condition' />
                                </div>
                            </div>

                            <Anchor onClick={() => {goToPaymentInfoClicked(this)}}  className="btn btn-dark-main btn-next-tab pull-right">Next</Anchor>
                            <Anchor onClick={() => {goBackToSearch(this)}} className="btn btn-default btn-prev-tab pull-left">Back</Anchor>
                        </div>
                    </div>
                    <BookingDetails apartment={apartment} bookingStage={bookingStage} />
                </div>
            );
        }
}

module.exports = PersonalInfo;
