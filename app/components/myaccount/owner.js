const React = require('react');
const Anchor = require('../shared/anchor');
const Constants = require('../../helpers/constants');
const Actions = require('../../actions/actions');
import MDSpinner from "react-md-spinner";
const FormValidator = require('../../helpers/form_validation_helper');
const Modal = require('../shared/modal');
const ApartmentHelper = require('../../helpers/apartment_helper')
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
				'check_in_time' : ownerGuestHouse.check_in_time,
				'check_out_time' : ownerGuestHouse.check_out_time
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

		const updateGuesthousePromise = Actions.updateGuestHouse({ owner_id, guest_house_id , ...updateGuestHouseInfo});
		updateGuesthousePromise.then(response => {
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
		let check_in_time   = updateGuestHouse.check_in_time;
		let check_out_time  = updateGuestHouse.check_out_time;


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
									<label>Star Rating</label>
									<input placeholder="star_rating" value={star_rating} disabled={true} ref="star_rating" type="text" className="input-with-validation form-control" />
								</div>
							</div>
						</div>

						<div className="row margin-left-20">
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Check-In-Time</label><span className='required-input'> * </span> <span> example, 11:00 a.m</span>
									<input placeholder="Check In Time" value={check_in_time} disabled={disabled} ref="check_in_time" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'check_in_time': this.refs.check_in_time.value})}}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mg-book-form-input">
									<label>Check-Out-Time</label><span className='required-input'> * </span> <span> example, 1:30 p.m</span>
									<input placeholder="Check Out Time" value={check_out_time} disabled={disabled} ref="check_out_time" type="text" className="input-with-validation form-control" onChange={()=>{Actions.guestHouseInfoUpdated({'check_out_time': this.refs.check_out_time.value})}}/>
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

class EditOneRoom extends React.Component {

	componentDidMount() {
		this.refs.bed.focus();
	}

	render() {
		let {isProcessing : {updatingApartment}, apartment, updateApartmentInfo, user} = this.props;
		let {title, maximum_people, maximum_adult, maximum_child} = apartment;
		let {bed, num_of_apartments, free_count} = updateApartmentInfo;
		let userId = user.id;

		bed = (bed == null || bed == undefined) ? apartment.bed : bed;
		num_of_apartments = (num_of_apartments == null || num_of_apartments == undefined) ? apartment.num_of_apartments :  num_of_apartments ;
		free_count = (free_count == null || free_count == undefined) ? apartment.free_count : free_count;


		let disabled = updatingApartment;
		return (
			<div>
				<div className="row">
					<div className="col-md-4 margin-top-10">
						Room Title:
					</div>
					<div className="col-md-8">
						<input placeholder="title" value={title} disabled={true} ref="title" type="text" className="input-with-validation form-control" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						Bed
					</div>
					<div className="col-md-8">
						<input placeholder="bed" value={bed} disabled={disabled} ref="bed" type="text" className="input-with-validation form-control"  onChange={()=>{Actions.apartmentInfoUpdated({'bed': this.refs.bed.value, 'id' : apartment.id, 'owner_id' : userId})}} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						Number of Rooms
					</div>
					<div className="col-md-8">
						<input placeholder="Number of Rooms" value={num_of_apartments} disabled={disabled} ref="num_of_apartments" type="text" className="input-with-validation form-control" onChange={()=>{Actions.apartmentInfoUpdated({'num_of_apartments': this.refs.num_of_apartments.value, 'id' : apartment.id, 'owner_id' : userId} )}} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						<strong>Number of Free Rooms</strong>
					</div>
					<div className="col-md-8">
						<input placeholder="Number Free Rooms" value={free_count} disabled={disabled} ref="free_count" type="text" className="input-with-validation form-control" onChange={()=>{Actions.apartmentInfoUpdated({'free_count': this.refs.free_count.value, 'id' : apartment.id,  'owner_id' : userId})}} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						Max Number of People
					</div>
					<div className="col-md-8">
						<input placeholder="Maximum Number of People" value={maximum_people} disabled={true} ref="maximum_people" type="text" className="input-with-validation form-control" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						Max Number of Adults
					</div>
					<div className="col-md-8">
						<input placeholder="Maximum Number of Adults" value={maximum_adult} disabled={true} ref="maximum_adult" type="text" className="input-with-validation form-control" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 margin-top-10">
						Max Number of Children
					</div>
					<div className="col-md-8">
						<input placeholder="Maximum Number of Children" value={maximum_child} disabled={true} ref="maximum_child" type="text" className="input-with-validation form-control" />
					</div>
				</div>

			</div>
		)
	}
}

class EditRooms extends React.Component {

	updateApartment() {
		const {ownerUserInfo : {updateApartmentInfo : {id, bed, num_of_apartments, free_count, owner_id}}} = this.props;
		//There is something to update, otherwise - there is nothing to update.
		if (id != null) {
			let data = {id};
			if (bed != null) {data = {bed, ...data}};
			if (num_of_apartments != null) {data = {num_of_apartments, ...data}};
			if (free_count != null) {data = {free_count, ...data}};
			if (owner_id != null) {data = {owner_id, ...data}};


			let isProcessing = {updatingApartment: true};
			Actions.setIsProcessing(isProcessing);

			const updateApartmentPromise = Actions.updateApartment(data);
			updateApartmentPromise.then(response => {
				if (response.status == 'fail') {
					NotificationManager.error(response.error, 'Update Room', Constants.ERROR_DISPLAY_TIME);
				} else {
					NotificationManager.success('Your room changes have been saved.', 'Update Room', Constants.SUCCESS_DISPLAY_TIME);
				}

				let isProcessing = {updatingApartment: false};
				Actions.setIsProcessing(isProcessing);
			});
		} else {
			NotificationManager.info('You did not change anything, yet.', 'Update Room', Constants.SUCCESS_DISPLAY_TIME);
		}
	}

	resetUpdateApartmentInfo() {
		Actions.apartmentInfoUpdated({"bed" : null, "num_of_apartments" : null, "free_count" : null, "id" : null})
	}

	render() {
		const {isProcessing, ownerUserInfo : {myApartments, activeLink, updateApartmentInfo}, ownerGuestHouse, user} = this.props;
		let className = activeLink == 'edit-rooms' ? "tab-pane fade in active" : "tab-pane fade";
		let spinnerClassName = (isProcessing.updatingApartment == true)? 'spinner-inline-display' : 'hide';

		let content = <tr><td/><td/><td/><td/><td><MDSpinner /> </td> <td/><td/><td/></tr>
		if (myApartments != null) {
			 content = myApartments.map(apartment =>{
					 	 let modalId = "apartment" + apartment.id;
						 let dataTarget = "#" + modalId;
						 let apartmentUrl = ApartmentHelper.getAptUrlByApartmentAndGuesthouse(apartment, ownerGuestHouse);

						 return <tr  key={apartment.id}>
									<td> {apartment.title} </td>
									<td> {apartment.bed} </td>
									<td> {apartment.num_of_apartments} </td>
									<td> <strong>{apartment.free_count}</strong> </td>
									<td> {apartment.maximum_people} </td>
									<td> {apartment.maximum_adult} </td>
									<td> {apartment.maximum_child} </td>
									<td>
										<button className="btn btn-warning btn-xs" data-toggle="modal" data-target={dataTarget}><i className="fa fa-pencil" /> Edit</button>
										<Modal  modalId= {modalId}>
											<div className="modal-header">
												<button onClick={this.resetUpdateApartmentInfo.bind(this)} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
												<h4 className="modal-title" id="myModalLabel4">Editing: {apartment.title}</h4>
											</div>
											<div className="modal-body">
												<EditOneRoom isProcessing={isProcessing} user={user}  updateApartmentInfo={updateApartmentInfo} apartment={apartment}> </EditOneRoom>
											</div>
											<div className="modal-footer">
												<button onClick={this.resetUpdateApartmentInfo.bind(this)} type="button" className="btn-u btn-u-default margin-right-20" data-dismiss="modal">Close</button>
												<button onClick={this.updateApartment.bind(this)} type="button" className="btn-u btn-u-primary">Save changes</button>
												<MDSpinner className={spinnerClassName}  />
											</div>
										</Modal>
										<a href ={apartmentUrl} target="_blank" className="btn btn-warning btn-xs" ><i className="fa fa-plus" /> Preview</a>
									</td>
								</tr>
						});
		}

		return(
			<div role="tabpanel" className={className} id="edit-rooms">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">

								<div className="panel panel-sea">
									<table className="table table-hover">
										<thead>
											<tr>
												<th>Title</th>
												<th>Beds</th>
												<th>Total Count</th>
												<th>Free Count</th>
												<th>Max People</th>
												<th>Max Adults</th>
												<th>Max Children</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{content}
										</tbody>
									</table>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class RoomPricing extends React.Component {
	render() {
		let {ownerUserInfo : {activeLink}} = this.props;
		let className = activeLink == 'room-pricing' ? "tab-pane fade in active" : "tab-pane fade";

		return(
			<div role="tabpanel" className={className} id="room-pricing">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								This feature is under development, please check us on June 25th, 2017.
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
					<li role="presentation" className={activeLink == 'room-pricing'? 'active' : ''}>
						<a href="#room-pricing" aria-controls="room-pricing" role="tab" data-toggle="tab"><i className="fa fa-pencil"></i> Room Pricing</a>
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
				<EditRooms ownerGuestHouse={ownerGuestHouse} user={user} ownerUserInfo={ownerUserInfo} isProcessing={isProcessing}/>
				<RoomPricing user={user} ownerUserInfo={ownerUserInfo} isProcessing={isProcessing}/>
			</OwnerBody>
		);
	}
}

module.exports = Owner