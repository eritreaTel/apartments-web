const React = require('react');
const PageTitle = require('../components/shared/pageTitle');
const Anchor = require('../components/shared/anchor');
const RightSection = require('../components/blog/right_section');
const BlogHeader = require('../components/blog/blog_header');
const BlogTags = require('../components/blog/blog_tags');
const withDataLoaded = require('../components/with_data_loaded');
const SvgImage = require('../components/shared/svg_image');
const Actions = require('../actions/actions');
const {assetPath} = require('../helpers/asset_helper');

const ValidationHelper = require('../helpers/validation_helper');
const ReactValiation = require('react-validate');
const Validate     = ReactValiation.Validate;
const ErrorMessage = ReactValiation.ErrorMessage;

import MDSpinner from "react-md-spinner";

const onBlogFeedbackClicked = function () {
	console.log('blog feedback clicked');
}

const BlogContent = function (props) {
	return (
		<div className="mg-blog-list">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<BlogMainContent blog = {props.blog} />
						<NavigationButton />
						<BlogComments />
						<FeedBackForm />
					</div>
				<RightSection blogMetaData={props.blogMetaData} recentNews={props.recentNews}/>
				</div>
			</div>
		</div>
	);
}

const BlogMainContent = function (props) {

	let content = props.blog.content;
	return (
		<main>
			<article className="mg-post">
				<BlogHeader blog={props.blog} />

				<div dangerouslySetInnerHTML={{__html: content}}></div>

				<footer className="clearfix">
					<BlogTags tags={props.blog.tags} parentClassName="mg-single-post-tags tagcloud" />
				</footer>
			</article>
		</main>
	);
}

const NavigationButton = function () {
	return (
		<div className="clearfix mg-post-nav">
			<div className="pull-left">
				<Anchor><i className="fa fa-angle-left"></i> Read previous article</Anchor>
			</div>
			<div className="pull-right">
				<Anchor>Read next article <i className="fa fa-angle-right"></i></Anchor>
			</div>
		</div>
	);
}

const BlogComments = function (props) {
	return (
			<div className="mg-single-comments-list">
				<h2 className="mg-sec-left-title">3 Responses</h2>
				<SingleCommentWithFeedback />
				<SingleComment />
			</div>
		);
}

const SingleComment = function () {
	return (
		<div className="media">
			<div className="media-left">
				<Anchor><img className="media-object" src={assetPath("images/comment3.png")} alt=""/></Anchor>
			</div>
			<div className="media-body">
				<div className="mg-comment-body">
					<h4 className="media-heading"><Anchor>Amanuel Yohannes</Anchor></h4>
					<span><Anchor>September 12, 2015 at 10:10 am</Anchor></span>
					<p>Very nice article about uganda tourism in general and guest houses in specific.</p>
					<Anchor className="btn btn-default btn-comment-reply">Reply</Anchor>
				</div>
			</div>
		</div>
	);
}

const SingleCommentWithFeedback = function () {
	return (
		<div className="media">
			<div className="media-left">
				<Anchor><img className="media-object" src={assetPath("images/comment.png")} alt=""/></Anchor>
			</div>
			<div className="media-body">
				<div className="mg-comment-body">
					<h4 className="media-heading"><Anchor>Ruth Yohannes</Anchor></h4>
					<span><a href="#">September 12, 2015 at 10:10 am</a></span>
					<p>Good article about Uganda, Youel this is a good place for you brother. Check it up, u will love it, it has a lot of food.</p>
					<Anchor href="#" className="btn btn-default btn-comment-reply">Reply</Anchor>
				</div>

				<SingleComment />
			</div>
		</div>
	);
}

const FeedBackForm = function () {
	return (
		<div className="">
			<h2 className="mg-sec-left-title">Leave a Reply</h2>
			<div>
				<label>Full Name</label><span className='required-input'> * </span>
				<Validate validators={[ValidationHelper.isRequired]}>
					<input type="text" className="input-with-validation form-control"/>
				</Validate>
			</div>
			<div>
				<label>Email</label><span className='required-input'> * </span>
				<Validate validators={[ValidationHelper.isRequired]}>
					<input type="email" className="input-with-validation form-control"/>
				</Validate>
			</div>
			<div>
				<label>Website</label>
				<input type="text" className="form-control"/>
			</div>
			<div>
				<label>Comment</label><span className='required-input'> * </span>
				<Validate validators={[ValidationHelper.isRequired]}>
					<textarea className="input-with-validation form-control" rows="7"></textarea>
				</Validate>
			</div>

			<input onClick={() => {onBlogFeedbackClicked()}} type="button" value="Post Comment" className="btn btn-dark-main"/>
		</div>
	);
}

const BlogBody = function (props) {
	return (
		<div>
			{<PageTitle parentClassName="mg-page-title-space parallax"/>}
			{props.children}
		</div>
	);
}

class BlogPage extends React.Component {

	render() {
		const {store : {blog, recentNews, blogMetaData}} = this.props;
		return (
			<BlogBody>
				<BlogContent blog={blog} recentNews={recentNews} blogMetaData={blogMetaData} />
			</BlogBody>
		);
	}
}


const WithUserLoaded = withDataLoaded({
	WithData: BlogPage,
	WithoutData: () => (
		<BlogBody >
			<div className="load-spin">
				<MDSpinner />
			</div>
		</BlogBody>
	),
	data: [
		{
			storeKeys: ['blog'],
			loadDataFn: ({view : {blogId}}) => Actions.getBlog({blogId})
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
