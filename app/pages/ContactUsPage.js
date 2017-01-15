const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;
const FormValidator = require('../helpers/form_validation_helper');
const CookiesHelper  = require('../helpers/cookies_helper');

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

	let result = FormValidator.validateRequiredDatas(e, info, requiredFields, 'Booking - Personal Information');
	if (result == false) {
		return ;
	}

	let isProcessing = {creatingContactUs: true};
	Actions.setIsProcessing(isProcessing);

	let contactUsResponse = Actions.createContactUs(info);


	contactUsResponse.then(response => {
		if (response.status == 'fail') {
			NotificationManager.error(response.error, 'Contact Us', 3000);
		} else {
			NotificationManager.success('Thank you for contacting us. We will get back to you in less than 24 hours.', 'Contact Us');
		}

		let isProcessing = {creatingContactUs: false};
		Actions.setIsProcessing(isProcessing);
	});
}


class ContactUsForm extends React.Component {

	render() {
		let {user, isProcessing : {creatingContactUs}} = this.props;
		const loggedIn = (!!CookiesHelper.getSessionCookie());
		let full_name = undefined, email = undefined;

		if (loggedIn && user) {
			full_name = user.first_name + ' ' + user.last_name;
			email = user.email;
		}

		let disabled = creatingContactUs;
		let spinnerClassName = creatingContactUs ? 'margin-right-20' : 'hide margin-right-20';

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2 className="mg-sec-left-title">Send an E-mail</h2>
						<div className="mg-contact-form-input">
							<label htmlFor="full-name">Full Name</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input disabled={disabled} value={full_name} ref='full_name' type="text" className="input-with-validation form-control" />
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="email">E-mail</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input disabled={disabled} value={email} type="text" className="input-with-validation form-control" ref="email"/>
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="subject">Subject</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input disabled={disabled} type="text" className="input-with-validation form-control" ref="subject"/>
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="subject">Message</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<textarea disabled={disabled} className="input-with-validation form-control" ref="message" rows="5"></textarea>
							</Validate>
						</div>
						<div className="pull-right">
							<MDSpinner className={spinnerClassName} />
							<input disabled={disabled} onClick={() => {submitContactUsForm(this)}}  type="submit" className="btn btn-dark-main" value="Send"/>
						</div>
					</div>

					<div className="col-md-7">
						<h2 className="mg-sec-left-title">Office Address</h2>
						<p>Thank you for contacing us. We take customer feedback seriously and our customer support team will get back to you as soon as possible. We thrive to give the best customer expierence exeperience and you feedback means a lot to us. Thank you again.</p>
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