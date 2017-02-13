const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Actions = require('../actions/actions');
const FormValidator = require('../helpers/form_validation_helper');
const CookiesHelper  = require('../helpers/cookies_helper');
const Constants = require('../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";


const submitContactUsForm = function (e) {
	let info = {
		full_name : e.refs.full_name.value,
		email : e.refs.email.value,
		subject : e.refs.subject.value,
		message : e.refs.message.value
	};

	let requiredFields = {'full_name' : "Please enter full name", 'email' : "Please enter email",
		'subject' : "Please enter subject", 'message'   : "Please enter message"};

	let result = FormValidator.validateRequiredDatas(e, info, requiredFields, 'Contact Us');
	if (result == false) {
		return ;
	}

	let isProcessing = {creatingContactUs: true};
	Actions.setIsProcessing(isProcessing);

	let contactUsResponse = Actions.createContactUs(info);


	contactUsResponse.then(response => {
		if (response.status == 'fail') {
			NotificationManager.error(response.error, 'Contact Us', Constants.ERROR_DISPLAY_TIME);
		} else {
			NotificationManager.success('Thank you for contacting us. We will get back to you in less than 24 hours.', 'Contact Us', Constants.SUCCESS_DISPLAY_TIME);
		}

		let isProcessing = {creatingContactUs: false};
		Actions.setIsProcessing(isProcessing);
	});
}


class ContactUsForm extends React.Component {

	componentWillMount() {
		Actions.getAuthenticatedUser();
	}

	componentDidMount() {
		const loggedIn = (!!CookiesHelper.getSessionCookie());
		if (loggedIn) {
			this.refs.subject.focus();
		} else {
			this.refs.full_name.focus();
		}
		window.scrollTo(0, 0);
	}

	render() {
		let {user, isProcessing : {creatingContactUs}} = this.props;
		const loggedIn = (!!CookiesHelper.getSessionCookie());
		let full_name = undefined, email = undefined;
		let disabled = creatingContactUs;
		let disabledExistingFields = creatingContactUs;

		if (loggedIn && user) {
			full_name = user.first_name + ' ' + user.last_name;
			email = user.email;
			disabledExistingFields = true;
		}


		let spinnerClassName = creatingContactUs ? 'margin-right-20' : 'hide margin-right-20';

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2 className="mg-sec-left-title">Send an E-mail</h2>
						<div className="mg-contact-form-input">
							<input placeholder="Full Name" disabled={disabledExistingFields} value={full_name} ref='full_name' type="text" className="input-with-validation form-control" />
						</div>
						<div className="mg-contact-form-input">
							<input placeholder="E-mail" disabled={disabledExistingFields} value={email} type="text" className="input-with-validation form-control" ref="email"/>
						</div>
						<div className="mg-contact-form-input">
							<input placeholder="Subject" disabled={disabled} type="text" className="input-with-validation form-control" ref="subject"/>
						</div>
						<div className="mg-contact-form-input">
							<textarea placeholder="Message" disabled={disabled} className="input-with-validation form-control" ref="message" rows="5"></textarea>
						</div>
						<div className="pull-right">
							<MDSpinner className={spinnerClassName} />
							<input disabled={disabled} onClick={() => {submitContactUsForm(this)}}  type="submit" className="btn btn-dark-main" value="Send"/>
						</div>
					</div>

					<div className="col-md-7">
						<h2 className="mg-sec-left-title">Office Address</h2>
						<p>Thank you for contacing us. We take customer feedback seriously and our customer support team will get back to you as soon as possible. We thrive to give the best customer exeperience and you feedback means a lot to us. Thank you again.</p>
						<ul className="mg-contact-info">
							<li><i className="fa fa-map-marker"></i> Level 13, 2 Elizabeth St, Kampala, Uganda</li>
							<li><i className="fa fa-phone"></i> +000-123-456-789 (Sale)</li>
							<li><i className="fa fa-envelope"></i> <a href="mailto:#">support@ugandaBooking.com</a></li>
						</ul>
						<div id="mg-map" className="mg-map">

						</div>
					</div>
				</div>
			</div>
		);
	}
}

class ContactUsPage extends React.Component {

	render() {
		const {store : {user, isProcessing }} = this.props;

		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<div className="mg-page">
					<ContactUsForm user={user}  isProcessing={isProcessing} />
				</div>
			</div>
		);
	}
};

module.exports = ContactUsPage;