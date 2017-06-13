const React = require('react');
const Anchor = require('../shared/anchor');
const Constants = require('../../helpers/constants');
const Actions = require('../../actions/actions');
import MDSpinner from "react-md-spinner";
const FormValidator = require('../../helpers/form_validation_helper');
import {NotificationContainer, NotificationManager} from 'react-notifications';


class EditGuestHouseSection extends React.Component {

	componentWillMount() {
		const {ownerGuestHouse} = this.props;
		if (ownerGuestHouse != null) {
			let guestHouseInfo = {
				'name': ownerGuestHouse.name,
				'website': ownerGuestHouse.website,
				'apartment_cnt': ownerGuestHouse.apartment_cnt,
				'street_address': ownerGuestHouse.street_address,
				'phone': ownerGuestHouse.phone,
				'neighborhood' : ownerGuestHouse.neighborhood,
				'city' : ownerGuestHouse.city,
				'country' : ownerGuestHouse.country,
				'email' : ownerGuestHouse.email,
			};
			Actions.guestHouseInfoUpdated(guestHouseInfo);
		}
	}

	componentDidMount() {
		this.refs.name.focus();
	}

	updateGuestHouseClicked() {
		const {ownerUserInfo, user, ownerGuestHouse} = this.props;
		let updateGuestHouseInfo = ownerUserInfo.updateGuestHouseInfo;
		let owner_id = user.id;
		let guest_house_id = ownerGuestHouse.id;

		let requiredFields = {	'name' : "Please enter accommodation name", 'street_address'    : "Please enter street address",
								'phone' : "Please enter phone number"
							 };

		let result = FormValidator.validateRequiredDatas(this, updateGuestHouseInfo, requiredFields, 'Update Accommodation Information');
		if (result == false) {
			return ;
		}

		let isProcessing = {updatingGuestHouse: true};
		Actions.setIsProcessing(isProcessing);

		const updateUserPromise = Actions.updateGuestHouse({ owner_id, guest_house_id , ...updateGuestHouseInfo});
		updateUserPromise.then(response => {
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Update Accommodation Information', Constants.ERROR_DISPLAY_TIME);
			} else {
				NotificationManager.success('You have successfully updated your accommodation.', 'Update Accommodation Information', Constants.SUCCESS_DISPLAY_TIME);
			}
			isProcessing = {updatingGuestHouse: false};
			Actions.setIsProcessing(isProcessing);
		});
	}

	render() {
		const {ownerUserInfo, isProcessing : {updatingGuestHouse}} = this.props;
		let updateGuestHouse = ownerUserInfo.updateGuestHouseInfo != null ? ownerUserInfo.updateGuestHouseInfo : {};
		let name          	= updateGuestHouse.name;
		let website         = updateGuestHouse.website;
		let apartment_cnt   = updateGuestHouse.apartment_cnt;
		let street_address  = updateGuestHouse.street_address;
		let phone        	= updateGuestHouse.phone;
		let star_rating		= (updateGuestHouse.star_rating > 0) ? updateGuestHouse.star_rating + ' star' : 'not rated' ;
		let neighborhood	= updateGuestHouse.neighborhood;
		let city			= updateGuestHouse.city;
		let country			= updateGuestHouse.country;
		let email			= updateGuestHouse.email;


		let className 		= ownerUserInfo.activeLink == 'edit-accommodation' ? "tab-pane fade in active" : "tab-pane fade";
		let spinnerClassName = (updatingGuestHouse == true) ? 'spinner-inline-display' : 'hide';
		let disabled  = updatingGuestHouse;

		return (
			<div role="tabpanel" className={className} id="edit-accommodation">
				<div className="row">
					<div className="col-md-12">
						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Name</label><span className='required-input'> * </span>
									<input  placeholder="name" value={name} disabled={disabled} ref="name"type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'name': this.refs.name.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Email</label>
									<input  placeholder="email" value={email} disabled={true} ref="email"type="text" className="input-with-validation form-control" />
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Phone</label><span className='required-input'> * </span>
									<input  placeholder="phone" value={phone} disabled={disabled} ref="phone"type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'phone': this.refs.phone.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Neighborhood</label>
									<input  placeholder="neighborhood" value={neighborhood} disabled={true} ref="neighborhood"type="text" className="input-with-validation form-control" />
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Website</label><span className='required-input'> * </span>
									<input placeholder="website" value={website} disabled={disabled} ref="website" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'website': this.refs.website.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>City</label>
									<input placeholder="city" value={city} disabled={true} ref="city" type="text" className="input-with-validation form-control" />
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Street Address</label><span className='required-input'> * </span>
									<input placeholder="street_address" value={street_address} disabled={disabled} ref="street_address" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'street_address': this.refs.street_address.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Country</label>
									<input  placeholder="country" value={country} disabled={true} ref="country"type="text" className="input-with-validation form-control" />
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Total Number of Apartments</label><span className='required-input'> * </span>
									<input placeholder="apartment_cnt" value={apartment_cnt} disabled={disabled} ref="apartment_cnt" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'apartment_cnt': this.refs.apartment_cnt.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Star Rating</label><span className='required-input'> * </span>
									<input placeholder="star_rating" value={star_rating} disabled={true} ref="star_rating" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'star_rating': this.refs.star_rating.value})}}/>
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<Anchor disabled={disabled} onClick={this.updateGuestHouseClicked.bind(this)}  className="btn btn-dark-main btn-next-tab">Save Changes</Anchor>
								<MDSpinner className={spinnerClassName}  />
							</div>
							<div className="col-md-6"> </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class EditRooms extends React.Component {

	render() {
		const {ownerUserInfo, isProcessing : {updatingApartment}} = this.props;
		let className = ownerUserInfo.activeLink == 'edit-rooms' ? "tab-pane fade in active" : "tab-pane fade";

		return(
			<div role="tabpanel" className={className} id="edit-rooms">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								I am here dude
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


class OwnerBody extends React.Component {
	render(){
		let activeLink 	 = this.props.ownerUserInfo.activeLink;
		return (
			<div className="mg-tab-left-nav">
				<ul className="nav nav-tabs nav-justified" role="tablist">
					<li role="presentation" className={activeLink == 'edit-accommodation'? 'active' : ''}>
						<a href="#edit-accommodation" aria-controls="edit-accommodation" role="tab" data-toggle="tab"><i className="fa fa-home"></i> Accommodation</a>
					</li>
					<li role="presentation" className={activeLink == 'edit-rooms'? 'active' : ''}>
						<a href="#edit-rooms" aria-controls="edit-rooms" role="tab" data-toggle="tab"><i className="fa fa-pencil"></i> Rooms</a>
					</li>
				</ul>
				<div className="tab-content">
					{this.props.children}
				</div>
			</div>
		)
	}
}


class Owner extends React.Component {

	componentWillMount() {
		const {user} = this.props;
		Actions.getApartmentsByOwner({'ownerId' : user.id});
	}

	render() {
		const {userServices : {ownerUserInfo} ,isProcessing, ownerGuestHouse, user} = this.props;

		return (
			<OwnerBody ownerUserInfo = {ownerUserInfo}>
				<EditGuestHouseSection user={user} ownerGuestHouse={ownerGuestHouse} ownerUserInfo={ownerUserInfo} isProcessing={isProcessing} />
				<EditRooms ownerUserInfo={ownerUserInfo} isProcessing={isProcessing}/>
			</OwnerBody>
		);
	}
}

module.exports = Owner