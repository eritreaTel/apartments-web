const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const sendCodeToEmail = function (e) {
	//Send code to Email
}

const updatePassword = function (e) {

}

class ResetPasswordBody extends React.Component {
	render() {
		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email Address</label>
								<input ref='username' type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {sendCodeToEmail(this)}} className="width-260 btn btn-primary">Send Code To Email</Anchor>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>
				</div>
			</div>
		);
	}
}


class SendCodeBody extends React.Component {
	render() {
		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Enter Code</label>
								<input ref='code' type="code" className="form-control"/>
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
									<Anchor onClick = {() => {Actions.setRoute('/reset-password')}} className="primary-blue">resend code</Anchor>
								</div>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {resetPassword(this)}} className="width-260 btn btn-primary">Submit Code</Anchor>
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
								<label>Password</label>
								<input ref='password' type="password" className="form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Confirm Password</label>
								<input ref='confirm_password' type="password" className="form-control"/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {updatePassword(this)}} className="width-260 btn btn-primary">Update Password</Anchor>
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
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<ResetPasswordBody />
			</div>
		);
	}
};

module.exports = ResetPasswordPage;