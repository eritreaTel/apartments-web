const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const RightSection = require('../components/blog/right_section');
const BlogHeader = require('../components/blog/blog_header');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const BlogHelper = require('../helpers/blog_helper');


const BlogList = function(props) {
	return (
		<div className="mg-blog-list">
			<div className="container">
				<div className="row">
					<Articles blogs = {props.blogs} />
					<RightSection tags={BlogHelper.getTags(props.blogsMetaData)}  categories={BlogHelper.getCategories(props.blogsMetaData)} recentNews={props.recentNews}/>
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
						<Anchor className="mg-read-more">Continue Reading
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
		const {store : {blogs, blogsMetaData, recentNews}} = this.props;

		return (
			<BlogsBody>
				<BlogList blogs={blogs} blogsMetaData={blogsMetaData} recentNews={recentNews} />
			</BlogsBody>
		);
	}

}

const WithUserLoaded = withDataLoaded({
	WithData: BlogsPage,
	WithoutData: () => (
		<BlogsBody >
			<div className="load-spin">
				<SvgImage name="dark-sun"/> Loading
			</div>
		</BlogsBody>
	),
	data: [
		{
			storeKeys: ['blogs'],
			loadDataFn: () => Actions.getBlogs()
		}
	]
});

module.exports = WithUserLoaded;
