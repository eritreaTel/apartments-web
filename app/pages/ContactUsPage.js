const React = require('react');
const PageTitle = require('../components/shared/pageTitle');

class ContactUsPage extends React.Component {

	render() {
		return (
			<div>
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
			</div>
		);
	}
};

module.exports = ContactUsPage;