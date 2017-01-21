const React = require('react');

const ValidationHelper = require('../../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;
const Constants = require('../../helpers/constants');
const Country = require('../shared/country');
const Anchor = require('../shared/anchor');
const Checkbox = require('rc-checkbox');
const Actions = require('../../actions/actions');

const BookingSection = function (props) {
	return(
		<div role="tabpanel" className="tab-pane fade in active" id="home3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deteriora bonis attingere optimus libero iam naturae graecam. Ceterorum vult ita populo augeri doceat probaretur ullo existimo incorruptis, reperietur assidua excepturi manum consule delectari, eumque sapientia arbitraretur muniti, contenta perveniri perinde satisfacit, ferri, contemnere parum seditione id, depravare futuros.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Privavisse percurri eximiae liberiusque audiam ipsius certae difficilius angore, numquid familiaritatem pedalis inflammat, gloriae sentiri triarius stoicos efficit poterimus, reformidans dubitemus, torquatum gratia calere legerint quos distinguique. Amici difficilem philosophis recta vero reliquerunt nostrum geometrica, discordia, iustius reformidans legendum crudeli, ornamenta hoc hominem unam aiebat metu. Correcta. Huius elaboraret optabilem legendam admodum, meminit sententia chremes, ille, utraque philosophorum morati disputari ferentur videantur sola quin primus ut, quale retinere memoriter susceperant. Earum errorem.</p>
		</div>
	);
}

const DealsSection = function () {
	return (
		<div role="tabpanel" className="tab-pane fade" id="profile3">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proprius, oblivione commodi. Utriusque invenire, re beatae videro amicorum rationis inhumanus metuamus reliquisti epularum tempus. Pertinaces atque inveniri quorum efficeret statua audivi, dolere opus soluta concordia placuit metuque veritatis stultorum ita.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nascuntur eligendi morbis fuisse accusantibus. Dissentientium vera quadam delectu illa, comit hostem illas complectitur coniunctione poetis degendae caeco antiquis, vos, persecuti idem verbum nimis, veserim approbantibus acuti variis malo. Tantalo fecerit gessisse docti eiusdem gloriatur loqueretur igitur, subtilius. Huc. Pugnare exaudita inprobitatem comprehenderit cernimus inertissimae solitudo caeco sibi timiditatem, praeterierunt forte variari persequeretur tranquilli tite provincias inducitur, iustioribus viderer praebeat, huic molestiam intellegimus sitne populo, satisfacit expetendis principes noctesque emolumento regione, approbantibus.</p>
		</div>
	)
}

class EditProfileSection extends React.Component{

	getValueFromStoreOrDb(value, userStore, userDb) {
		let returnVal = userDb[value]
		if (userStore && userStore[value]) {
			console.log('here');
			console.log(userStore[value]);
			returnVal = userStore[value];
		}
		console.log('retrun value is ' + returnVal);
		return returnVal;
	}

	render() {
		const {user, userServices} = this.props;
		let updateUserInfo = userServices.updateUserInfo;

		let first_name = this.getValueFromStoreOrDb('first_name', updateUserInfo, user);
		let last_name = this.getValueFromStoreOrDb('last_name', updateUserInfo, user);
		let city = this.getValueFromStoreOrDb('city', updateUserInfo, user);
		let country = this.getValueFromStoreOrDb('country', updateUserInfo, user);
		let phone_number = this.getValueFromStoreOrDb('phone_number', updateUserInfo, user);
		let will_reset_password = this.getValueFromStoreOrDb('will_reset_password', updateUserInfo, user);
		let showPasswordCss = will_reset_password == true ? 'row show' : 'row hide';
		
		let disabled = false;

		return (
			<div role="tabpanel" className="tab-pane fade" id="messages3">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>First Name</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired]}>
										<input  placeholder="first name" value={first_name} disabled={disabled} ref='first_name' type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'first_name': this.refs.first_name.value})}}/>
									</Validate>
								</div>
							</div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Last Name</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired]}>
										<input placeholder="last name" value={last_name} disabled={disabled} ref='last_name' type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'last_name': this.refs.last_name.value})}}/>
									</Validate>
								</div>
							</div>
							<div className="col-md-1"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>City</label>
									<Validate>
										<input value={city} placeholder="city"  disabled={disabled} ref='city' type="text" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'city': this.refs.city.value})}}/>
									</Validate>
								</div>
							</div>
							<div className="col-md-5">
								<div className="mg-book-form-input">
									<label>Country</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired]}>
										<Country onChange={(val)=>{Actions.userInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
									</Validate>
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
									<Validate validators={[ValidationHelper.isRequired]}>
										<input placeholder="Password" disabled={disabled} ref='password' type="password" className="input-with-validation form-control" onChange={()=>{Actions.userInfoUpdated({'password': this.refs.phone_number.value})}}/>
									</Validate>
								</div>
							</div>
							<div className="col-md-6"> </div>
						</div>

						<div className="row">
							<div className="col-md-1"> </div>
							<div className="col-md-5">
								<div className="pull-left">
									<Anchor disabled={disabled} onClick={() => {}}  className="btn btn-dark-main btn-next-tab">Save Changes</Anchor>
								</div>
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
			const {user, userServices} = this.props;
			return (
				<div className="mg-tab-left-nav">
					<ul className="nav nav-tabs nav-justified" role="tablist">
						<li role="presentation" className="active">
							<a href="#home3" aria-controls="home3" role="tab" data-toggle="tab"><i className="fa fa-home"></i> Bookings</a>
						</li>
						<li role="presentation">
							<a href="#profile3" aria-controls="profile3" role="tab" data-toggle="tab"><i className="fa fa-user"></i> Deals</a>
						</li>
						<li role="presentation">
							<a href="#messages3" aria-controls="messages3" role="tab" data-toggle="tab"><i className="fa fa-pencil"></i> Edit Profile</a>
						</li>
						<li role="presentation">
							<a href="#settings3" aria-controls="settings3" role="tab" data-toggle="tab"><i className="fa fa-cogs"></i> Travel Guides</a>
						</li>
					</ul>

					<div className="tab-content">
						<BookingSection />
						<DealsSection />
						<EditProfileSection user={user} userServices={userServices} />
						<TravelGuides />
					</div>
				</div>
			);
	}
};

module.exports = Seeker;