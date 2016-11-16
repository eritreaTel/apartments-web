const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');
import Validation from 'react-validation';
const ValidationHelper = require('../helpers/validation_helper');


const authenticateUser = function (e) {
	let credentials = {
		username : e.refs.username.value,
		password : e.refs.password.value
	}
	Actions.logIn(credentials);
}

const forgetPassword = function (e) {

}

class SignInBody extends React.Component {

	componentWillMount() {
		console.log(ValidationHelper.getRules());
		Object.assign(Validation.rules, ValidationHelper.getRules());
	}

	render() {
		return (
			<div className="mg-about-features">
				<div className="container">
					<Validation.components.Form>
						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Email Address</label>
									<Validation.components.Input name='username' ref='username' errorClassName="is-invalid-input" type="text" className="form-control" validations={['required', 'email']}/>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>

						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<label>Password</label>
									<Validation.components.Input name='password' ref='password' errorClassName="is-invalid-input" type="password" className="form-control" validations={['required']}/>
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
										<Anchor onClick = {() => {forgetPassword(this)}} className="primary-blue">reset password</Anchor>
									</div>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>


						<div className="row">
							<div className="col-md-4"> </div>
							<div className="col-md-3">
								<div className="mg-book-form-input">
									<Anchor onClick = {() => {authenticateUser(this)}} className="width-260 btn btn-primary">Sign In</Anchor>
								</div>
							</div>
							<div className="col-md-4"> </div>
						</div>
					</Validation.components.Form>
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
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<SignInBody />
			</div>
		);
	}
};

module.exports = SignInPage;