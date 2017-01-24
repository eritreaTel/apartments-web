const React = require('react');
const Constants = require('../../helpers/constants');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Checkbox = require('rc-checkbox');
const Actions = require('../../actions/actions');
const FormValidator = require('../../helpers/form_validation_helper');
import MDSpinner from "react-md-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const BookingSection = function (props) {
	let className = props.activeLink == 'booking' ? "tab-pane fade in active" : "tab-pane fade";
	return(
		<div role="tabpanel" className={className} id="home3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deteriora bonis attingere optimus libero iam naturae graecam. Ceterorum vult ita populo augeri doceat probaretur ullo existimo incorruptis, reperietur assidua excepturi manum consule delectari, eumque sapientia arbitraretur muniti, contenta perveniri perinde satisfacit, ferri, contemnere parum seditione id, depravare futuros.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Privavisse percurri eximiae liberiusque audiam ipsius certae difficilius angore, numquid familiaritatem pedalis inflammat, gloriae sentiri triarius stoicos efficit poterimus, reformidans dubitemus, torquatum gratia calere legerint quos distinguique. Amici difficilem philosophis recta vero reliquerunt nostrum geometrica, discordia, iustius reformidans legendum crudeli, ornamenta hoc hominem unam aiebat metu. Correcta. Huius elaboraret optabilem legendam admodum, meminit sententia chremes, ille, utraque philosophorum morati disputari ferentur videantur sola quin primus ut, quale retinere memoriter susceperant. Earum errorem.</p>
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

const TravelGuides = function () {
	return (
		<div role="tabpanel" className="tab-pane fade" id="settings3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perpaulum, contentam eximiae leniter efflorescere, quia mollitia, loco ficta habeat ii persecuti assidua ceterorum albucius, caret perpetuam artes sive philosopho aperiam corpore, insequitur pluribus delicata indoctum minuit res efficeret assecutus affert iuste, proficiscuntur.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nominavi domesticarum maioribus malivoli motus contereret satis dedocere. Aptior probo calere saperet eosdem amatoriis morbos corpora una, debilitatem ignota dicunt hae lectorem statuerunt, graeci animadvertat multis declinationem divitias tuum responsum velim scipio. Delectus tria convincere tradit satis, errorem addidisti facultas, oblivione arare in curiosi libris deserere, eodem sustulisti ipsos voluptaria veniam cohaerescent, perspicuum, diesque unam suscipere naturae, virtus nasci pauca dubitat graecam voluit intellegimus improborum aiunt ponit. Docere habeatur utilitas, dicturum silano.</p>
		</div>
	);
}

class Seeker extends React.Component {
	render() {
			const {user, userServices ,isProcessing} = this.props;
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
						<BookingSection activeLink={activeLink} />
						<EditProfileSection activeLink={activeLink} user={user} userServices={userServices} isProcessing={isProcessing} />
					</div>
				</div>
			);
	}
};

module.exports = Seeker;