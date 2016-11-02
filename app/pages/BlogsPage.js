const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const RightSection = require('../components/blog/right_section');
const BlogHeader = require('../components/blog/blog_header');

class BlogsPage extends React.Component {

	render() {
		return (
			<div>
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
				{this.renderBlogList(this.props)}
			</div>
		);
	}

	renderBlogList(props) {
		return (
			<div className="mg-blog-list">
				<div className="container">
					<div className="row">
						{this._renderLeftSection(props.blogs)}
						<RightSection  />
					</div>
				</div>
			</div>
		);
	}

	_renderLeftSection(blogs){
		return (
			<div className="col-md-8">
				<main>
					{this._renderArticles(blogs)}
				</main>
			</div>
		);
	}

	_renderArticles(blogs){
		return blogs.map(blog => {
			return 	<article className="mg-post">
						<BlogHeader blog={blog} />
						<div>
							<p>{blog.medium_description}</p>
						</div>
						<footer className="clearfix">
							<Anchor className="mg-read-more">Continue Reading
								<i className="fa fa-long-arrow-right"></i>
							</Anchor>
						</footer>
					</article>
		});
	}

}

function getDefaultProps() {
	let props = {
		blogs : [
			{
				"id" : 3,
				"title": "Uganda number one tourist destination",
				"medium_description": "GuestHouses Uganda is founded by ArchSoftwareSolutions LLC. ArchSoftware solutions is based in San Francisco, USA and Kampala Uganda. Our mission is to give visibility to many great guest houses in Uganda to the outside world. Uganda is a beautiful country and it has many great guest houses that lack internet visibility. Our company’s top mission is to promote tourism in Uganda by making it easy to reserve guest house in Uganda. One of the first things a tourist does when traveling to a country is finding accommodation. We want to make this process as pleasant as possible while making sure the tourist gets the best deal on the market. We want to tourists to get the best out of their stay. Staying in a guest house is much better than staying in a hotel as it is less boring and it has home feeling. TODO-Amanuel, make this good.",
				"created_at": "2016-10-31 09:43:26",
				"created_by" : "Admin",
				"comments_cnt" : 4,

			},
			{
				"id" : 2,
				"title": "Uganda joining forces with Kenya",
				"medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
				"images" : [
					{
						"full" : "images/blog-2.png"
					},
					{
						"full" : "images/blog-3.png"
					},
					{
						"full" : "images/blog-4.png"
					},
					{
						"full" : "images/blog-5.png"
					}
				],
				"created_at": "2016-10-27 09:43:26",
				"created_by" : "Employee",
				"comments_cnt" : 7
			},
			{
				"id" : 1,
				"title": "New park opened in Uganda",
				"medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
				"created_at": "2016-10-23 09:43:26",
				"created_by" : "Manager",
				"comments_cnt" : 2
			}

		]
	}

	return props;
}

BlogsPage.defaultProps = getDefaultProps();
module.exports = BlogsPage;