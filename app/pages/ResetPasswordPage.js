const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');
const FormValidator = require('../helpers/form_validation_helper');
const Constants = require('../helpers/constants');

import MDSpinner from "react-md-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
				NotificationManager.error(response.error, 'Reset Password', Constants.ERROR_DISPLAY_TIME);
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
		let {isProcessing : {sendingResetPassword}} = this.props;

		let disabled = sendingResetPassword;
		let spinnerClassName = sendingResetPassword ? 'margin-left-20' : 'hide margin-left-20';

		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email Address</label><span className='required-input'> * </span>
								<input disabled={disabled} ref='email' type="text" className="input-with-validation form-control" />
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
		let data = { code : this.refs.code.value };
		let requiredFields = {'code' : "Please enter code"};

		let result = FormValidator.validateRequiredDatas(this, data, requiredFields, 'Reset Password - Enter Code');
		if (result == false) {
			return ;
		}

		let isProcessing = {processingResetCode: true};
		Actions.setIsProcessing(isProcessing);

		let validateResponse = Actions.validateResetPasswordToken(data);
		validateResponse.then(response => {
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Reset Password - Enter Code', Constants.ERROR_DISPLAY_TIME);
			}

			let isProcessing = {processingResetCode: false};
			Actions.setIsProcessing(isProcessing);
		});
	}

	render() {
		let {isProcessing : {processingResetCode}} = this.props;

		let disabled = processingResetCode;
		let spinnerClassName = processingResetCode ? 'margin-left-20' : 'hide margin-left-20';


		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Enter Code</label><span className='required-input'> * </span>
								<input disabled={disabled} ref='code' type="code" className="input-with-validation form-control"/>
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
									<Anchor disabled={disabled} onClick={this.goBackToResetPasswordBody.bind(this)} className="primary-blue">resend code</Anchor>
								</div>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick={this.submitCode.bind(this)} className="width-265 btn btn-primary">Submit Code</Anchor>
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

class UpdatePasswordBody extends React.Component {

	updatePassword() {

		let {resetPassword : {email}} = this.props;
		let data = { 'password' : this.refs.password.value, 'confirm_password' : this.refs.confirm_password.value };
		let requiredFields = {'password' : "Please enter password", "confirm_password": " Please enter confirm password"};

		let result = FormValidator.validateRequiredDatas(this, data, requiredFields, 'Reset Password - Update Password');
		if (result == false) {
			return ;
		}

		if (data.confirm_password != data.password) {
			NotificationManager.error("Please enter matching password.", 'Reset Password - Update Password', Constants.ERROR_DISPLAY_TIME);
			this.refs.password.focus();
			return;
		}

		let isProcessing = {updatingPassword: true};
		Actions.setIsProcessing(isProcessing);

		let updatePasswordResponse = Actions.updatePassword(data);
		updatePasswordResponse.then(response => {
			let isProcessing = {updatingPassword: false};

			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Reset Password - Update Password', Constants.ERROR_DISPLAY_TIME);
				Actions.setIsProcessing(isProcessing);
			} else {
				let credentials = { email : email, password : data.password}

				let logInResponse = Actions.logIn(credentials);
				logInResponse.then(response => {
					Actions.setIsProcessing(isProcessing);
					if (response.status == 'fail') {
						NotificationManager.error(response.error, 'Reset Password - Update Password', Constants.ERROR_DISPLAY_TIME);
					} else {
						Actions.setRoute('/my-account');
					}
				});
			}
		});

	}

	render() {
		let {isProcessing : {updatingPassword}} = this.props;
		let disabled = updatingPassword;
		let spinnerClassName = updatingPassword ? 'margin-left-20' : 'hide margin-left-20';

		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Password</label><span className='required-input'> * </span>
								<input disabled={disabled} ref='password' type="password" className="input-with-validation form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Confirm Password</label><span className='required-input'> * </span>
								<input disabled={disabled} ref='confirm_password' type="password" className="input-with-validation form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<Anchor disabled={disabled} onClick = {this.updatePassword.bind(this)} className="width-265 btn btn-primary">Update Password</Anchor>
								<MDSpinner className={spinnerClassName} />
							</div>
						</div>
						<div className="col-md-3"> </div>
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

		let section ;

		switch (stage) {
			case 'code-sent':
				section = <EnterCodeBody  isProcessing={isProcessing} resetPassword={resetPassword} />
				break;
			case 'code-validated' :
				section = <UpdatePasswordBody isProcessing={isProcessing}  resetPassword={resetPassword} />
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