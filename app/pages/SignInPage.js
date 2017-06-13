const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');
const Country = require('../components/shared/country');
const Constants = require('../helpers/constants');
const CookiesHelper = require('../helpers/cookies_helper');

const FormValidator = require('../helpers/form_validation_helper');
const StringHelper = require('../helpers/string_helper');

import MDSpinner from "react-md-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const authenticateUser = function (e) {
	let credentials = {
		email : e.refs.email.value,
		password : e.refs.password.value
	}

	let requiredFields = {'email' : "Please enter email address", 'password' : "Please enter password"};

	let result = FormValidator.validateRequiredDatas(e, credentials, requiredFields, 'Log In');
	if (result == false) {
		return ;
	}

	let isProcessing = {authenticatingUser: true};
	Actions.setIsProcessing(isProcessing);

	let logInResponse = Actions.logIn(credentials);

	logInResponse.then(response => {
		let isProcessing = {authenticatingUser: false};
		Actions.setIsProcessing(isProcessing);

		if (response.status == 'fail') {
			NotificationManager.error(response.error, 'Log In', Constants.ERROR_DISPLAY_TIME);
		} else {
			let userType = CookiesHelper.getDataFromCookie('userType');
			if (userType == 'seeker') {
				Actions.setRoute('/seeker-account');
			} else if (userType == 'owner') {
				Actions.setRoute('/owner-account');
			}
		}
	});
}

class SignInBody extends React.Component {

	handleKeyPress(target) {
		if(target.charCode==13){
			//authenticateUser(this); implement this in the future
		}
	}

	goToSignUp() {
		Actions.goToSignUp();
	}

	componentDidMount() {
		this.refs.email.focus();
	}

	render() {
		let {user, isProcessing : {authenticatingUser}} = this.props;

		let disabled = authenticatingUser;
		let spinnerClassName = authenticatingUser ? 'margin-left-20' : 'hide margin-left-20';

		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<label>Email Address</label><span className='required-input'> * </span>
								<input disabled={disabled} tabIndex="1" ref='email' type="text" className="width-300 input-with-validation form-control" />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<label>Password</label><span className='required-input'> * </span>
								<input disabled={disabled} tabIndex="2"  ref='password' onKeyPress = {this.handleKeyPress} type="password" className="width-300 input-with-validation form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row margin-bottom-20">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<Anchor tabIndex="3" onClick = {() => {Actions.setRoute('/reset-password')}} className="margin-left-190 primary-blue">forgot password</Anchor>
						</div>
						<div className="col-md-4"> </div>
					</div>


					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<button  disabled={disabled}tabIndex="4" type="submit" onClick = {() => {authenticateUser(this)}} className="h4 width-300 btn btn-primary">Sign In</button>
								<MDSpinner className={spinnerClassName} />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4 h4"> Don't have an account <Anchor className="primary-blue" onClick = {this.goToSignUp.bind(this)}> Sign Up </Anchor></div>
						<div className="col-md-4"> </div>
					</div>

				</div>
			</div>
		);
	}
}

class SignUpBody extends React.Component {

	createUser() {
		let {signUpData} = this.props;
		let country = signUpData ? signUpData.country : '';
		let userInfo = {
			'full_name' : this.refs.full_name.value,
			'country'   : country,
			'email'     : this.refs.email.value,
			'password'  : this.refs.password.value,
			'type'      : 'seeker',
			'is_active' : 1
		}

		let {first_name, last_name} = StringHelper.extractNames(userInfo.full_name);
		userInfo.first_name = first_name;
		userInfo.last_name  = last_name;
		
		let requiredFields = { 'first_name' : "Please enter full name", 'last_name' : "please enter full name",
			                   'country' : "Please select your country", 'email' : "Please enter email",
			                   'password' : "Please enter password" };
		let result = FormValidator.validateRequiredDatas(this, userInfo, requiredFields, 'Sign Up');
		if (result == false) {
			return ;
		}

		let isProcessing = {creatingUser: true};
		Actions.setIsProcessing(isProcessing);

		const createUserPromise = Actions.createUser(userInfo);
		createUserPromise.then(response => {
			let isProcessing = {creatingUser: false};
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Sign Up', Constants.ERROR_DISPLAY_TIME);
				Actions.setIsProcessing(isProcessing);
			} else {
				let credentials = {
					email    : userInfo.email,
					password : userInfo.password
				}

				Actions.logIn(credentials);
				Actions.setRoute('/seeker-account');
				Actions.setIsProcessing(isProcessing);
			}
		});
	}

	componentDidMount() {
		this.refs.full_name.focus();
	}

	render () {
		let {isProcessing : {creatingUser}, signUpData} = this.props;

		let disabled = creatingUser;
		let spinnerClassName = creatingUser ? 'margin-left-20' : 'hide margin-left-20';

		let country = signUpData && signUpData.country;


		return (
			<div className="mg-signup-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Full Name</label><span className='required-input'> * </span>
								<input disabled={disabled} tabIndex="1" ref='full_name' type="text" className="input-with-validation form-control" />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Country</label><span className='required-input'> * </span>
								<Country tabIndex="2" onChange={(val)=>{Actions.signUpInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email</label><span className='required-input'> * </span>
								<input disabled={disabled} tabIndex="3" ref='email' type="text" className="input-with-validation form-control" />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Password</label><span className='required-input'> * </span>
								<input disabled={disabled} tabIndex="4"  ref='password' onKeyPress = {this.handleKeyPress} type="password" className="input-with-validation form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<button  disabled={disabled}tabIndex="5" type="submit" onClick = {this.createUser.bind(this)} className="h4 width-265 btn btn-primary">Sign Up</button>
								<MDSpinner className={spinnerClassName} />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4"> </div>
						<div className="col-md-4"> </div>
					</div>
				</div>
			</div>
		);
	}
}




class SignInPage extends React.Component {

	componentWillUnmount() {
		Actions.goToSignInPage();
	}

	render() {
		const {store: {isProcessing, user, userServices}} = this.props;
		let {activeSignInSection, signUpData} = userServices;

		let content;
		if (activeSignInSection == 'signUp') {
			content = <SignUpBody isProcessing={isProcessing} signUpData={signUpData}/>;
		} else {
			content = <SignInBody isProcessing={isProcessing} user={user}/>;
		}

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				{content}
			</div>
		);
	}
};

module.exports = SignInPage;