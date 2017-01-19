const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     	= ReactValiation.Validate;
const ErrorMessage 	= ReactValiation.ErrorMessage;
const ValidateGroup = ReactValiation.ValidateGroup;
const Country = require('../components/shared/country');

const FormValidator = require('../helpers/form_validation_helper');

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
			NotificationManager.error(response.error, 'Log In', 5000);
		} else {
			Actions.setRoute('/my-account');
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
				<ValidateGroup>
					<div className="container">
						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Email Address</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
										<input disabled={disabled} tabIndex="1" ref='email' type="text" className="input-with-validation form-control" />
									</Validate>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Password</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired]}>
										<input disabled={disabled} tabIndex="2"  ref='password' onKeyPress = {this.handleKeyPress} type="password" className="input-with-validation form-control"/>
									</Validate>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row margin-bottom-20">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="row">
									<div className="col-md-6"> </div>
									<div className="col-md-6">
										<Anchor tabIndex="3" onClick = {() => {Actions.setRoute('/reset-password')}} className="primary-blue margin-left-20">forgot password</Anchor>
									</div>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>


						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-4">
								<div className="mg-book-form-input">
									<button  disabled={disabled}tabIndex="4" type="submit" onClick = {() => {authenticateUser(this)}} className="h4 width-265 btn btn-primary">Sign In</button>
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
				</ValidateGroup>
			</div>
		);
	}
}

class SignUpBody extends React.Component {

	createUser() {

		let {signUpData : {country}} = this.props;
		let userInfo = {
			'full_name' : this.refs.full_name.value,
			'country'   : country,
			'email'     : this.refs.email.value,
			'password'  : this.refs.password.value,
			'type'      : 'seeker',
			'is_active' : 1
		}

		//TODO - Amanuel - parse full name properly
		userInfo.first_name = userInfo.full_name;
		userInfo.last_name = userInfo.full_name;

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
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Sign Up', 3000);
			} else {
				let credentials = {
					email    : userInfo.email,
					password : userInfo.password
				}

				Actions.logIn(credentials);
			}

			let isProcessing = {creatingUser: false};
			Actions.setIsProcessing(isProcessing);
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
				<ValidateGroup>
					<div className="container">
						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Full Name</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
										<input disabled={disabled} tabIndex="1" ref='full_name' type="text" className="input-with-validation form-control" />
									</Validate>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Country</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
									<Country tabIndex="2" onChange={(val)=>{Actions.signUpInfoUpdated({'country' : val.value});}} value={country} disabled={disabled} />

									</Validate>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Email</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
										<input disabled={disabled} tabIndex="3" ref='email' type="text" className="input-with-validation form-control" />
									</Validate>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Password</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired]}>
										<input disabled={disabled} tabIndex="4"  ref='password' onKeyPress = {this.handleKeyPress} type="password" className="input-with-validation form-control"/>
									</Validate>
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
				</ValidateGroup>
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