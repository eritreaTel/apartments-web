const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Actions = require('../actions/actions');


const authenticateUser = function (e) {
	let credentials = {
		username : e.refs.username.value,
		password : e.refs.password.value
	}

	Actions.authenticateUser(credentials);
}

class SignInBody extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4"> </div>
					<div className="col-md-4">
						<div className="mg-book-form-input">
							<label>Email Address</label>
							<input ref='username' type="email" className="form-control"/>
						</div>
					</div>
					<div className="col-md-4"> </div>
				</div>

				<div className="row">
					<div className="col-md-4"> </div>
					<div className="col-md-4">
						<div className="mg-book-form-input">
							<label>Password</label>
							<input ref='password' type="password" className="form-control"/>
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