const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

const sendCodeToEmail = function (e) {
	let data = {
		email : e.refs.email.value
	}
	Actions.sendResetPasswordToken(data);
}

const submitCode = function (e) {
	let data = {
		code : e.refs.code.value
	};

	Actions.validateResetPasswordToken(data);
}

const updatePassword = function (e) {
	let data = {
		'password' : e.refs.password.value,
		'confirmPassword' : e.refs.confirm_password.value
	};
	console.log('update password');
	console.log(data);
	Actions.updatePassword(data);
}

const goBackToResetPasswordBody = function () {
	Actions.goBackToResetPasswordBody();
}

class ResetPasswordBody extends React.Component {

	componentDidMount() {
		const {resetPassword : {email}} = this.props;
		this.refs.email.value = email
	}

	render() {
		const {errors} = this.props;
		console.log('inside reset password');
		console.log(errors);

		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email Address</label><span className='required-input'> * </span>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input ref='email' type="text" className="input-with-validation form-control" />
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {sendCodeToEmail(this)}} className="width-265 btn btn-primary">Send Code To Email</Anchor>
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
	render() {
		let {errors} = this.props;
		return (
			<div className="mg-about-features">
				<div className="container">
					<ShowMessage errors={errors} />
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
									<Anchor onClick = {() => {goBackToResetPasswordBody()}} className="primary-blue">resend code</Anchor>
								</div>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {submitCode(this)}} className="width-265 btn btn-primary">Submit Code</Anchor>
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
		const{store: {resetPassword, errors}} = this.props;
		const {email, stage} = resetPassword;
		console.log('email is' + email);
		console.log('stage is ' + stage);

		let section ;

		switch (stage) {
			case 'code-sent':
				section = (email)? <EnterCodeBody errors={errors} resetPassword={resetPassword} /> : <ResetPasswordBody resetPassword={resetPassword} errors={errors}/>
				break;
			case 'code-validated' :
				section = (email)?  <CreatePasswordBody errors={errors} resetPassword={resetPassword} /> : <ResetPasswordBody errors={errors} resetPassword={resetPassword} />
				break;
			default :
				section = <ResetPasswordBody errors={errors} resetPassword={resetPassword} />
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