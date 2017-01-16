const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;
const FormValidator = require('../helpers/form_validation_helper');

import MDSpinner from "react-md-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const updatePassword = function (e) {
	let data = {
		'password' : e.refs.password.value,
		'confirmPassword' : e.refs.confirm_password.value
	};
	console.log('update password');
	console.log(data);
	Actions.updatePassword(data);
}

class ResetPasswordBody extends React.Component {

	sendCodeToEmail() {
		let data = { email : this.refs.email.value }
		let requiredFields = {'email' : "Please enter email address"};

		let result = FormValidator.validateRequiredDatas(this, data, requiredFields, 'Reset Password');
		if (result == false) {
			return ;
		}

		let isProcessing = {resettingPassword: true};
		Actions.setIsProcessing(isProcessing);

		let sendResetPasswordResponse = Actions.sendResetPasswordToken(data);
		sendResetPasswordResponse.then(response => {
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Reset Password', 5000);
			}

			let isProcessing = {resettingPassword: false};
			Actions.setIsProcessing(isProcessing);
		});
	}

	componentDidMount() {
		const {resetPassword : {email}} = this.props;
		this.refs.email.value = email
	}

	render() {
		let {isProcessing : {resettingPassword}} = this.props;

		let disabled = resettingPassword;
		let spinnerClassName = resettingPassword ? 'margin-left-20' : 'hide margin-left-20';

		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email Address</label><span className='required-input'> * </span>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input disabled={disabled} ref='email' type="text" className="input-with-validation form-control" />
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<Anchor disabled={disabled} onClick = {this.sendCodeToEmail.bind(this)} className="width-265 btn btn-primary">Send Code To Email</Anchor>
								<MDSpinner className={spinnerClassName} />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>
				</div>
			</div>
		);
	}
}


class EnterCodeBody extends React.Component {
	goBackToResetPasswordBody() {
		Actions.goBackToResetPasswordBody();
	}

	submitCode() {
		let data = {
			code : e.refs.code.value
		};

		Actions.validateResetPasswordToken(data);
	}

	render() {
		let {errors} = this.props;
		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Enter Code</label><span className='required-input'> * </span>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input ref='code' type="code" className="input-with-validation form-control"/>
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row margin-bottom-20">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="row">
								<div className="col-md-7"> </div>
								<div className="col-md-5 ">
									<Anchor onClick = {this.goBackToResetPasswordBody.bind(this)} className="primary-blue">resend code</Anchor>
								</div>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {this.submitCode.bind(this)}} className="width-265 btn btn-primary">Submit Code</Anchor>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>
				</div>
			</div>
		);
	}
}

class CreatePasswordBody extends React.Component {
	render() {
		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Password</label><span className='required-input'> * </span>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input ref='password' type="password" className="input-with-validation form-control"/>
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Confirm Password</label><span className='required-input'> * </span>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input ref='confirm_password' type="password" className="input-with-validation form-control"/>
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {updatePassword(this)}} className="width-265 btn btn-primary">Update Password</Anchor>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>
				</div>
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


class ResetPasswordPage extends React.Component {

	render() {
		const{store: {resetPassword, isProcessing}} = this.props;
		const {email, stage} = resetPassword;
		console.log('email is' + email);
		console.log('stage is ' + stage);

		let section ;

		switch (stage) {
			case 'code-sent':
				section = (email)? <EnterCodeBody  isProcessing={isProcessing} resetPassword={resetPassword} /> : <ResetPasswordBody isProcessing={isProcessing} resetPassword={resetPassword} />
				break;
			case 'code-validated' :
				section = (email)?  <CreatePasswordBody isProcessing={isProcessing}  resetPassword={resetPassword} /> : <ResetPasswordBody isProcessing={isProcessing} resetPassword={resetPassword} />
				break;
			default :
				section = <ResetPasswordBody isProcessing={isProcessing} resetPassword={resetPassword} />
				break;
		}

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				{section}
			</div>
		);
	}
};

module.exports = ResetPasswordPage;