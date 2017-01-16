const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const RightSection = require('../components/blog/right_section');
const BlogHeader = require('../components/blog/blog_header');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');

import MDSpinner from "react-md-spinner";

const BlogList = function(props) {
	console.log('metadata');
	console.log(props.blogMetaData);

	console.log('recent news');
	console.log(props.recentNews);
	return (
		<div className="mg-blog-list">
			<div className="container">
				<div className="row">
					<Articles blogs = {props.blogs} />
					<RightSection blogMetaData={props.blogMetaData}  recentNews={props.recentNews}/>
				</div>
			</div>
		</div>
	);
}

const Articles = function (props) {
	const StyledArticles = props.blogs.map(blog => {
		return 	<article className="mg-post" key={blog.id}>
					<BlogHeader blog={blog} />
					<div>
						<p>{blog.medium_description}</p>
					</div>
					<footer className="clearfix">
						<Anchor onClick={()=>{Actions.setRoute('/blog/' + blog.id)}} className="mg-read-more">Continue Reading
							<i className="fa fa-long-arrow-right"></i>
						</Anchor>
					</footer>
				</article>
		});


		return (
			<div className="col-md-8">
				<main>
					{StyledArticles}
				</main>
			</div>
		);
}

const BlogsBody = function (props) {
	return (
		<div>
			{<PageTitle parentClassName="mg-page-title-space parallax"/>}
			{props.children}
		</div>
	);
}


class BlogsPage extends React.Component {

	render() {
		const {store : {blogs, blogMetaData, recentNews}} = this.props;

		return (
			<BlogsBody>
				<BlogList blogs={blogs} blogMetaData={blogMetaData} recentNews={recentNews} />
			</BlogsBody>
		);
	}

}

const WithUserLoaded = withDataLoaded({
	WithData: BlogsPage,
	WithoutData: () => (
		<BlogsBody >
			<div className="load-spin">
				<MDSpinner />
			</div>
		</BlogsBody>
	),
	data: [
		{
			storeKeys: ['blogs'],
			loadDataFn: () => Actions.getBlogs()
		},
		{
			storeKeys: ['blogMetaData'],
			loadDataFn: () => Actions.getBlogMetaData()
		},
		{
			storeKeys: ['recentNews'],
				loadDataFn: () => Actions.getRecentNews()
		}
	]
});

module.exports = WithUserLoaded;
