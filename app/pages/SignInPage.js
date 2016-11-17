const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');
import Validation from 'react-validation';
const ValidationHelper = require('../helpers/validation_helper');
const Danger = require('../components/ribbons/danger');


const authenticateUser = function (e) {
	let credentials = {
		email : e.refs.email.value,
		password : e.refs.password.value
	}
	Actions.logIn(credentials);
}

class SignInBody extends React.Component {

	componentWillMount() {
		Object.assign(Validation.rules, ValidationHelper.getRules());
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
								<input ref='email' name='email' type="text" className="form-control" validations={['required', 'email']}/>
							</div>
						</div>
						<div className="col-md-4"> </div>
					</div>

					<div className="row">
						<div className="col-md-4"> </div>
						<div className="col-md-3">
							<div className="mg-book-form-input">
								<label>Password</label>
								<input name='password' ref='password' type="password" className="form-control" validations={['required']}/>
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
									<Anchor onClick = {() => {Actions.setRoute('/reset-password')}} className="primary-blue"> &nbsp; forgot password</Anchor>
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
		console.log('inside signIn page');
		let errorMessage = errors ? errors[0] : null;
		console.log(errors[0]);

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<SignInBody errorMessage={errorMessage} />
			</div>
		);
	}
};

module.exports = SignInPage;