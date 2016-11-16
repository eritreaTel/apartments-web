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

class SignInBody extends React.Component {

	componentWillMount() {
		console.log(ValidationHelper.getRules());
		Object.assign(Validation.rules, ValidationHelper.getRules());
	}

	render() {
		return (
			<div className="container">
				<Validation.components.Form>
					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<label>Email Address</label>
								<Validation.components.Input name='username' ref='username' errorClassName="is-invalid-input" type="text" className="form-control" validations={['required', 'email']}/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-4">
							<div className="mg-book-form-input">
								<label>Password</label>
								<Validation.components.Input name='password' ref='password' errorClassName="is-invalid-input" type="password" className="form-control" validations={['required']}/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
							<div className="col-md-4">
							<div className="mg-book-form-input">
								<Anchor onClick = {() => {authenticateUser(this)}} className="btn btn-main">Sign In</Anchor>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>
				</Validation.components.Form>
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