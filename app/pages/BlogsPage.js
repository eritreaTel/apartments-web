const React = require('react');
const PageTitleBar = require('../components/shared/pageTitleBar');
const Anchor = require('../components/shared/anchor');
const Moment = require('moment');

class BlogsPage extends React.Component {

	onBlogTitleClicked = () => {
	}

	render() {
		return (
			<div>
				{<PageTitleBar />}
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
						{this._renderRightSection(props)}
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

	_renderImages(images) {
		const styledImgs = images && images.map(blogImage => {
			return <Anchor onClick={this.onBlogTitleClicked()}><img src={blogImage.full} alt="" className="img-responsive"/></Anchor>
		});
		return styledImgs ? <div className="mg-post-images-slider"> {styledImgs}</div> : '';
	}

	_renderArticles(blogs){
		return blogs.map(blog => {
			return 	<article className="mg-post">
						<header>
							{this._renderImages(blog.images)}
							<h2 className="mg-post-title">
								<Anchor onClick={this.onBlogTitleClicked()}> {blog.title}</Anchor>
							</h2>
							<div className="mg-post-meta">
								<span><Anchor>{Moment(blog.created_at).format('D MMM, YYYY')}</Anchor></span>
								<span>by <Anchor>{blog.created_by}</Anchor></span>
								<span><Anchor > {blog.comments_cnt} Comments</Anchor></span>
							</div>
						</header>
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

	_renderRightSection(props) {
		return (
			<div className="col-md-4">
				<div className="mg-widget-area">
					<aside className="mg-widget">
						<input type="text" placeholder="Search..." className="form-control"/>
					</aside>
			
					<aside className="mg-widget">
						<h2 className="mg-widget-title">Recent Posts</h2>
						{this._renderRecentPosts(props.news)}
					</aside>

					<aside className="mg-widget">
						<h2 className="mg-widget-title">Category</h2>
						{this._renderCategories(props.category)}
					</aside>

					<aside className="mg-widget">
						<h2 className="mg-widget-title">Tags</h2>
						{this._renderTags(props.tags)}
					</aside>
				</div>
			</div>
		);
	}

	_renderRecentPosts(news){
		const styledLi = news.map(singleNews => {
			return	<li>
						<div className="mg-recnt-post">
							<div className="mg-rp-date"> {Moment(singleNews.created_at).format('D')} <div className="mg-rp-month"> {Moment(singleNews.created_at).format('MMMM')} </div></div>
							<h3><Anchor> {singleNews.title} </Anchor></h3>
							<p>{singleNews.short_description}</p>
						</div>
					</li>
		});

		return (
			<ul className="mg-recnt-posts">
				{styledLi}
			</ul>
		);
	}

	_renderCategories(categories) {
		const styledLi = categories.map(category => {
			return <li><Anchor >{category.title}</Anchor></li>;
		});

		return (
			<ul> {styledLi}</ul>
		);
	}

	_renderTags(tags) {
		const styledTags = tags.map(tag => {
			return 	<Anchor>{tag.title}</Anchor>;
		});

		return (
			<div className="tagcloud"> {styledTags} </div>
		);
	}

};

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

		],
		news: [
			{
				"title": "Uganda number one tourist",
				"short_description": "Uganda number one tourist destination ...",
				"created_at": "2016-10-17 09:43:26"
			},
			{
				"title": "Uganda joining forces with ",
				"short_description": "Uganda, Kenya and Rwanda joing tourist forces ...",
				"created_at": "2016-10-12 09:43:26"
			},
			{
				"title": "New park opened in Uganda",
				"short_description": "New national park opened in Uganda, New national ...",
				"created_at": "2016-10-09 09:43:26"
			}
		],
		category: [
			{
				"id": "1",
				"title": "Video"
			},
			{
				"id": "2",
				"title": "Apartments"
			},
			{
				"id": "3",
				"title": "Promotion"
			},
			,
			{
				"id": "4",
				"title": "Events"
			}
		],
		tags: [
			{
				"id": "1",
				"title": "Video"
			},
			{
				"id": "2",
				"title": "Apartments"
			},
			{
				"id": "3",
				"title": "Promotion"
			},
			,
			{
				"id": "4",
				"title": "Events"
			},
			{
				"id": "5",
				"title": "Gallery"
			},
			{
				"id": "6",
				"title": "New"
			},
			{
				"id": "7",
				"title": "Travel"
			}
		]
	}

	return props;
}

BlogsPage.defaultProps = getDefaultProps();
module.exports = BlogsPage;