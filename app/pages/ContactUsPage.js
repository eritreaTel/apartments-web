const React = require('react');
const PageTitle = require('../components/shared/pageTitle');

class ContactUsPage extends React.Component {

	render() {
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				{this.renderBody()}
			</div>
		);
	}

	renderBody() {
		return (
			<div className="mg-page">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<h2 className="mg-sec-left-title">Send an E-mail</h2>
								<div className="mg-contact-form-input">
									<label for="full-name">Full Name</label>
									<input type="text" className="form-control" id="full-name"/>
								</div>
								<div className="mg-contact-form-input">
									<label for="email">E-mail</label>
									<input type="text" className="form-control" id="email"/>
								</div>
								<div className="mg-contact-form-input">
									<label for="subject">Subject</label>
									<input type="text" className="form-control" id="subject"/>
								</div>
								<div className="mg-contact-form-input">
									<label for="subject">Message</label>
									<textarea className="form-control" id="subject" rows="5"></textarea>
								</div>
								<input type="button" className="btn btn-dark-main pull-right" value="Send"/>
						</div>

						<div className="col-md-7">
							<h2 className="mg-sec-left-title">Office Address</h2>
							<p>Thank you for contacing us. We take customer feedback seriously and our customer support team will get back to you as soon as possible. We thrive to give the best customer expierence exeperience and you feedback means a lot to us. Thank you again.</p>
							<ul className="mg-contact-info">
								<li><i className="fa fa-map-marker"></i> Level 13, 2 Elizabeth St, Kampala, Uganda</li>
								<li><i className="fa fa-phone"></i> +000-123-456-789 (Sale)</li>
								<li><i className="fa fa-envelope"></i> <a href="mailto:#">support@ugandaGuestHouses.com</a></li>
							</ul>
							<div id="mg-map" className="mg-map">

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

};

module.exports = ContactUsPage;