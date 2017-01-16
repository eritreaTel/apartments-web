const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     	= ReactValiation.Validate;
const ErrorMessage 	= ReactValiation.ErrorMessage;
const ValidateGroup = ReactValiation.ValidateGroup;

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
										<Anchor tabIndex="3" onClick = {() => {Actions.setRoute('/reset-password')}} className="primary-blue">forgot password</Anchor>
									</div>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>


						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-4">
								<div className="mg-book-form-input">
									<button  disabled={disabled}tabIndex="4" type="submit" onClick = {() => {authenticateUser(this)}} className="width-265 btn btn-primary">Sign In</button>
									<MDSpinner className={spinnerClassName} />
								</div>
							</div>
							<div className="col-md-3"> </div>
						</div>
					</div>
				</ValidateGroup>
			</div>
		);
	}
}

const SignUpBody = function (props) {
	return (
		<div> sign up </div>
	);
}

const ResetMyPasswordBody = function (props) {
	return (
		<div> reset </div>
	);
}


class SignInPage extends React.Component {

	render() {

		const {store: {isProcessing, user}} = this.props;

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<SignInBody isProcessing={isProcessing} user={user}/>
			</div>
		);
	}
};

module.exports = SignInPage;