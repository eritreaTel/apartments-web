const React = require('react');
const PageTitle = require('../components/shared/pageTitle');


const SignInBody = function (props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4"> </div>
				<div className="col-md-4">
					<div className="mg-book-form-input">
						<label>Email Address</label>
						<input ref='email' type="email" className="form-control"/>
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
		</div>
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