const React = require('react');
const Constants = require('../../helpers/constants');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Checkbox = require('rc-checkbox');
const Actions = require('../../actions/actions');
const withDataLoaded = require('../../components/with_data_loaded');
const FormValidator = require('../../helpers/form_validation_helper');
const PricingHelper = require('../../helpers/pricing_helper');
const DateHelper = require('../../helpers/date_helper');
const CurrencyFormatter = require('currency-formatter');
import MDSpinner from "react-md-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const BookingSection = function (props) {
    let {apartmentBookings} = props;

    let content;
    if (apartmentBookings && apartmentBookings.length > 0) {
        content = apartmentBookings.map(apartmentBooking => {
                return <OneBooking key={apartmentBooking.id} apartmentBooking={apartmentBooking}/>
        });

    } else {
        content=<div className="row">
                    <div className="col-md-1"/>
                        <div className="col-md-10">
                            <div className="alert alert-info" role="alert">
                                <i className="fa fa-info-circle"></i>
                                <strong> You do not have any booking with us. If you think you do, feel free to <Anchor onClick={()=>{Actions.setRoute('/contact-us')}}>contact us</Anchor>. We are here to help.</strong>
                            </div>
                        </div>
                    <div className="col-md-1"/>
                </div>
    }


    let className = props.activeLink == 'booking' ? "tab-pane fade in active" : "tab-pane fade";
    return(
        <div role="tabpanel" className={className} id="home3">
            {content}
        </div>
    );

}

const OneBooking = function (props) {
    let apartmentBooking = props.apartmentBooking;
    let confirmationNumber =  PricingHelper.getReservationConfirmationNumber(apartmentBooking.id)
    let paidAmount = CurrencyFormatter.format(apartmentBooking.paid_amount, { code: 'USD' });
    let remainingAmount = CurrencyFormatter.format(apartmentBooking.total_price - apartmentBooking.paid_amount, { code: 'USD' });
    let guestHouse = apartmentBooking.guestHouse;

    let checkInDay = DateHelper.getDay(apartmentBooking.start_date);
    let checkInMonthNameYear = DateHelper.getMonthNameAndYear(apartmentBooking.start_date);
    let checkInDayName = DateHelper.getDayName(apartmentBooking.start_date);

    let checkOutDay = DateHelper.getDay(apartmentBooking.end_date);
    let checkOutMonthNameYear = DateHelper.getMonthNameAndYear(apartmentBooking.end_date);
    let checkOutDayName = DateHelper.getDayName(apartmentBooking.end_date);


    return(
			<div className="seeker-bookings-container">
				<div className ="row">
					<div className="col-md-3">
						<img src="images/room-1.png" alt="Delux Room" className="img-responsive"/>
					</div>

					<div className="col-md-5">
						<span className="gh-name" >{guestHouse.name}</span>
						<span className="booking-number">Booking number: <b>{confirmationNumber}</b> </span>
						<span className="total-price-label">Paid Amount: <label className="display-inline total-price-amount">{paidAmount}</label></span>
						<span className="total-price-label">Remaining Amount: <label className="display-inline total-price-amount">{remainingAmount}</label></span>
					</div>

					<div className="col-md-2">
						<span className="check-in-caption">CHECK-IN</span>
						<span className="check-in-day-number">{checkInDay}</span>
						<span className="check-in-month-year" >{checkInMonthNameYear}</span>
						<span className="check-in-day-name">{checkInDayName}</span>
					</div>
					<div className="col-md-2">
						<span className="check-in-caption">CHECK-Out</span>
						<span className="check-in-day-number">{checkOutDay}</span>
						<span className="check-in-month-year" >{checkOutMonthNameYear}</span>
						<span className="check-in-day-name">{checkOutDayName}</span>
					</div>
				</div>
				<div className="row">
                    <div className="footer-seeker-booking">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="guest-house-address">
                                        Address : {guestHouse.street_address}  - {guestHouse.neighborhood}, {guestHouse.city}, {guestHouse.country} <br/>
                                        Telephone : {guestHouse.phone}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span><Anchor onClick={() => {Actions.setRoute('/contact-us')}} className="btn btn-primary">Talk to Us</Anchor></span>
                                    <span><Anchor onClick={() => {Actions.setRoute('/guest-houses')}}  className="btn btn-primary" >Book again</Anchor></span>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
	);
}

class EditProfileSection extends React.Component{

	getValueFromStoreOrDb(value, userStore, userDb) {
		let returnVal = userDb[value]
		if (userStore && userStore[value]) {
			returnVal = userStore[value];
		}

		return returnVal;
	}

	componentWillMount() {
		const {user} = this.props;

		let userInfo = {
			'first_name' : user.first_name,
			'last_name' : user.last_name,
			'city' : user.city,
			'country' : user.country,
			'phone_number' : user.phone_number,
			'will_reset_password' : false
		};
		Actions.userInfoUpdated(userInfo);

	}

	componentDidMount() {
		this.refs.first_name.focus();
	}

	updateUserClicked() {
		const {userServices} = this.props;
		let updateUserInfo = userServices.updateUserInfo;

		let requiredFields = {'first_name' : "Please enter first name", 'last_name' : "Please enter last name",
							  'country'    : "Please select your country" };

		if (updateUserInfo.will_reset_password == true) {
			requiredFields = {...requiredFields, 'password' : 'Please enter password'};
		}

		let result = FormValidator.validateRequiredDatas(this, updateUserInfo, requiredFields, 'Update User Information');
		if (result == false) {
			return ;
		}

		let isProcessing = {updatingUser: true};
		Actions.setIsProcessing(isProcessing);

		const updateUserPromise = Actions.updateUser(updateUserInfo);
			updateUserPromise.then(response => {
				if (response.status == 'fail') {
					NotificationManager.error(response.error, 'Update User Information', Constants.ERROR_DISPLAY_TIME);
				} else {
					NotificationManager.success('You have successfully updated your profile.', 'Update User Information', Constants.SUCCESS_DISPLAY_TIME);
				}
				isProcessing = {updatingUser: false};
				Actions.setIsProcessing(isProcessing);
		});
	}

	render() {
		const {user, userServices, isProcessing : {updatingUser}, activeLink} = this.props;
		let updateUserInfo = userServices.updateUserInfo ? userServices.updateUserInfo : {};

		let first_name          = updateUserInfo.first_name;
		let last_name           = updateUserInfo.last_name;
		let city                = updateUserInfo.city;
		let country             = updateUserInfo.country;
		let phone_number        = updateUserInfo.phone_number;
		let will_reset_password = updateUserInfo && updateUserInfo.will_reset_password ? updateUserInfo.will_reset_password : false;
		let showPasswordCss     = will_reset_password == true ? 'row show' : 'row hide';

		let spinnerClassName = (updatingUser == true) ? 'show' : 'hide';
		let className = activeLink == 'editProfile' ? "tab-pane fade in active" : "tab-pane fade";
		let disabled  = updatingUser;

		return (
			<div role="tabpanel" className={className} id="messages3">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>First Name</label><span className='required-input'> * </span>
									<input  placeholder="first name" value={first_name} disabled={disabled} ref="first_name"type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'first_name': this.refs.first_name.value})}}/>
								</div>
							</div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Last Name</label><span className='required-input'> * </span>
									<input placeholder="last name" value={last_name} disabled={disabled} ref="last_name" type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'last_name': this.refs.last_name.value})}}/>
								</div>
							</div>
							<div className="col-md-1"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>City</label>
									<input value={city} placeholder="city"  disabled={disabled} ref='city' type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'city': this.refs.city.value})}}/>
								</div>
							</div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Country</label><span className='required-input'> * </span>
									<Country onChange={(val)=>{Actions.userInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
								</div>
							</div>
							<div className="col-md-1"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Phone Number</label>
									<input placeholder="phone number" value={phone_number} disabled={disabled} ref='phone_number' type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'phone_number': this.refs.phone_number.value})}}/>
								</div>
							</div>
							<div className="col-md-5"> </div>
							<div className="col-md-1"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-11 margin-bottom-40">
								<Checkbox  defaultChecked={will_reset_password}  onChange={(val)=>{Actions.userInfoUpdated({'will_reset_password': val.target.checked})}}/><div className="margin-left-10 fontsize-16 display-inline">Do you want to reset your password?</div>
							</div>
						</div>

						<div className={showPasswordCss}>
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Password</label><span className='required-input'> * </span>
									<input placeholder="Password" disabled={disabled} ref='password' type="password" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'password': this.refs.password.value})}}/>
								</div>
							</div>
							<div className="col-md-6"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<Anchor disabled={disabled} onClick={this.updateUserClicked.bind(this)}  className="btn btn-dark-main btn-next-tab">Save Changes</Anchor>
								<MDSpinner className={spinnerClassName}  />
							</div>
							<div className="col-md-6">
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

const SeekerBody = function (props) {
    let userServices = props.userServices;
    let activeLink = userServices.seekerUser.activeLink;

    return (
        <div className="mg-tab-left-nav">
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li role="presentation" className={activeLink == 'booking'? 'active' : ''}>
                    <a href="#home3" aria-controls="home3" role="tab" data-toggle="tab"><i className="fa fa-home"></i> Bookings</a>
                </li>
                <li role="presentation" className={activeLink == 'editProfile'? 'active' : ''}>
                    <a href="#messages3" aria-controls="messages3" role="tab" data-toggle="tab"><i className="fa fa-pencil"></i> Edit Profile</a>
                </li>
            </ul>
            <div className="tab-content">
                {props.children}
            </div>
        </div>
    )
}


class Seeker extends React.Component {
    render() {
        const {user, userServices ,isProcessing, apartmentBookings} = this.props;
        let activeLink = userServices.seekerUser.activeLink;

        let seekerData;

        if (apartmentBookings == null) {
            seekerData = <SeekerBody userServices = {userServices}>
                            <div className="load-spin">
                                <MDSpinner />
                            </div>
                        </SeekerBody>
        } else {
            seekerData = <SeekerBody userServices = {userServices}>
                            <BookingSection activeLink={activeLink} apartmentBookings={apartmentBookings}/>
                            <EditProfileSection activeLink={activeLink} user={user} userServices={userServices} isProcessing={isProcessing} />
                          </SeekerBody>
        }

        return (
            <div> {seekerData} </div>
        );
    }
}

module.exports = Seeker;