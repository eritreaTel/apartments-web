const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const Danger = require('../components/ribbons/danger');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;


const authenticateUser = function (e) {
	let credentials = {
		email : e.refs.email.value,
		password : e.refs.password.value
	}
	Actions.logIn(credentials);
}

class SignInBody extends React.Component {

	componentWillMount() {
		//Object.assign(Validation.rules, ValidationHelper.getRules());

	}

	render() {
		const errorMessage = this.props.errorMessage;
		let errorClass = (errorMessage == null || errorMessage == undefined) ? ' col-md-6 hide' : 'col-md-6 show';
		return (
			<div className="mg-about-features">
				<div className="container">
					<div className="row">
						<div className="col-md-3"> </div>
						<div className={errorClass}>
							<Danger message= {errorMessage} />
						</div>
						<div className="col-md-3"> </div>
					</div>
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Email Address</label>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input tabindex="1" ref='email' type="text" className="input-with-validation form-control" />
								</Validate>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Password</label>
								<Validate validators={[ValidationHelper.isRequired]}>
									<input tabindex="2"  ref='password' type="password" className="input-with-validation width-250 form-control"/>
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
								<div className="col-md-6 margin-left-minus-10">
									<Anchor tabindex="3" onClick = {() => {Actions.setRoute('/reset-password')}} className="primary-blue">forgot password</Anchor>
								</div>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>


					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<Anchor tabindex="4" onClick = {() => {authenticateUser(this)}} className="width-250 btn btn-primary">Sign In</Anchor>
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


class SignInPage extends React.Component {

	render() {

		const {store: {errors}} = this.props;
		//console.log('inside signIn page');
		let errorMessage = errors ? errors[0] : null;
		//console.log(errors[0]);

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<SignInBody errorMessage={errorMessage} />
			</div>
		);
	}
};

module.exports = SignInPage;