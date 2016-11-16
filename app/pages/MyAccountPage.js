const React = require('react');
const PageTitle = require('../components/shared/pageTitle');



class MyAccountPage extends React.Component {

	render() {
		return (
			<div>
				<PageTitle parentClassName="mg-page-title-space parallax"/>
				<div>
					My Account Page
				</div>
			</div>
		);
	}
};

module.exports = MyAccountPage;