const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const Moment = require('moment');

class BlogPage extends React.Component {

	onBlogTitleClicked = () => {
	}

	render() {
		return (
			<div>
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
				This is one Blog
			</div>
		);
	}








};

function getDefaultProps() {
	let props = {

	}

	return props;
}

BlogPage.defaultProps = getDefaultProps();
module.exports = BlogPage;