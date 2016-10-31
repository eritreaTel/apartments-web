const React = require('react');
const PageTitleBar = require('../components/shared/pageTitleBar');

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<PageTitleBar />
			</div>
		);
	}
};

module.exports = HomePage;