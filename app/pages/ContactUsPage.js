const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Actions = require('../actions/actions');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;


const submitContactUsForm = function (e) {
	let info = {
		full_name : e.refs.full_name.value,
		email : e.refs.email.value,
		subject : e.refs.subject.value,
		message : e.refs.message.value
	};
	Actions.createContactUs(info)
}


class ContactUsForm extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2 className="mg-sec-left-title">Send an E-mail</h2>
						<div className="mg-contact-form-input">
							<label htmlFor="full-name">Full Name</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input ref='full_name' type="text" className="input-with-validation form-control" />
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="email">E-mail</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input type="text" className="input-with-validation form-control" ref="email"/>
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="subject">Subject</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<input type="text" className="input-with-validation form-control" ref="subject"/>
							</Validate>
						</div>
						<div className="mg-contact-form-input">
							<label htmlFor="subject">Message</label><span className='required-input'> * </span>
							<Validate validators={[ValidationHelper.isRequired]}>
								<textarea className="input-with-validation form-control" ref="message" rows="5"></textarea>
							</Validate>
						</div>
						<input onClick={() => {submitContactUsForm(this)}}  type="submit" className="btn btn-dark-main pull-right" value="Send"/>
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
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<div className="mg-page">
					<ContactUsForm />
				</div>
			</div>
		);
	}
};

module.exports = ContactUsPage;