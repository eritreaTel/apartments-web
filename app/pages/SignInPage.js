const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const Danger = require('../components/ribbons/danger');
const ReactValiation = require('react-validate');
const Validate     	= ReactValiation.Validate;
const ErrorMessage 	= ReactValiation.ErrorMessage;
const ValidateGroup = ReactValiation.ValidateGroup;


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
				<ValidateGroup>
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
									<label>Email Address</label><span className='required-input'> * </span>
									<Validate validators={[ValidationHelper.isRequired, ValidationHelper.isEmail]}>
										<input tabIndex="1" ref='email' type="text" className="input-with-validation form-control" />
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
										<input tabIndex="2"  ref='password' onEnter = {() => {authenticateUser(this)}} type="password" className="input-with-validation form-control"/>
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
										<Anchor tabIndex="3" onClick = {() => {Actions.setRoute('/reset-password')}} className="margin-left-6 primary-blue">forgot password</Anchor>
									</div>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>


						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<button tabIndex="4" type="submit" onClick = {() => {authenticateUser(this)}} className="width-265 btn btn-primary">Sign In</button>
								</div>
							</div>
							<div className="col-md-4"> </div>
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