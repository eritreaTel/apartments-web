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
const CookiesHelper  = require('../helpers/cookies_helper');
const FormValidator = require('../helpers/form_validation_helper');
const DateHelper = require('../helpers/date_helper');
const Constants = require('../helpers/constants');

import {NotificationContainer, NotificationManager} from 'react-notifications';
import MDSpinner from "react-md-spinner";

class BlogContent extends React.Component {
	componentWillMount() {
		Actions.getBlogMetaData();
		Actions.getRecentNews()
	}

	render() {
		const {blog, user, isProcessing, recentNews, blogMetaData} = this.props;
		return (
			<div className="mg-blog-list">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<BlogMainContent blog ={blog}/>
							<BlogComments blog={blog} />
							<FeedBackForm user={user} isProcessing={isProcessing} blog={blog} />
						</div>
						<RightSection blogMetaData={blogMetaData} recentNews={recentNews}/>
					</div>
				</div>
			</div>
		);
	}
}

class BlogMainContent extends React.Component {

	render() {
		const {blog} = this.props;
		const {blogComments, tags, content} = blog;

		return (
			<main>
				<article className="mg-post">
					<BlogHeader blog={blog} blogComments={blogComments}/>

					<div dangerouslySetInnerHTML={{__html: content}}></div>

					<footer className="clearfix">
						<BlogTags tags={tags} parentClassName="mg-single-post-tags tagcloud" />
					</footer>
				</article>
			</main>
		);
	}
}

class BlogComments extends React.Component {
	render() {
		const {blog: {blogComments}} = this.props;
		let commentCount, styledComments;
		if (blogComments && blogComments.length > 0) {
			styledComments = blogComments && blogComments.map(blogComment =>{
								return <SingleComment key={blogComment.id} blogComment={blogComment} />;
							 });
			commentCount = blogComments.length;
		} else {
			commentCount = 'No';
			styledComments = <span> Be the first one to write comment about this article </span>
		}



		return (
				<div className="mg-single-comments-list">
					<h2 className="mg-sec-left-title">{commentCount} Comments</h2>
					{styledComments}
				</div>
			);
	}
}

const SingleComment = function (props) {
	return (
		<div className="media">
			<div className="media-left">
				<Anchor><img className="media-object" src={assetPath("images/comment3.png")} alt=""/></Anchor>
			</div>
			<div className="media-body">
				<div className="mg-comment-body">
					<h4 className="media-heading"><Anchor>{props.blogComment.full_name}</Anchor></h4>
					<span>{DateHelper.formatDate(props.blogComment.created_at, 'D MMM, YYYY')} at {DateHelper.formatDate(props.blogComment.created_at, 'H:mm')}</span>
					<p>{props.blogComment.comment}</p>
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

class FeedBackForm extends React.Component {

	onBlogFeedbackClicked() {
		let {blog} = this.props;
		let info = {
			blog_id : blog.id,
			full_name : this.refs.full_name.value,
			email : this.refs.email.value,
			website : this.refs.website.value,
			comment : this.refs.comment.value
		};

		let requiredFields = {'full_name' : "Please enter full name",
							  'email' : "Please enter email", 'comment' : "Please enter comment"};

		let result = FormValidator.validateRequiredDatas(this, info, requiredFields, 'Blog Comment');
		if (result == false) {
			return ;
		}

		let isProcessing = {creatingBlogComment: true};
		Actions.setIsProcessing(isProcessing);

		let blogCommentResponse = Actions.createBlogComment(info);

		blogCommentResponse.then(response => {
			if (response.status == 'fail') {
				NotificationManager.error(response.error, 'Blog Comment', Constants.ERROR_DISPLAY_TIME);
			} else {
				NotificationManager.success('Thank you for commenting on our blog', 'Blog Comment', Constants.SUCCESS_DISPLAY_TIME);
			}

			let isProcessing = {creatingBlogComment: false};
			Actions.setIsProcessing(isProcessing);
		});
	}

	render() {
		let {user, blog, isProcessing : {creatingBlogComment}} = this.props;
		const loggedIn = (!!CookiesHelper.getSessionCookie());
		let full_name = undefined, email = undefined;

		if (loggedIn && user) {
			full_name = user.first_name + ' ' + user.last_name;
			email = user.email;
		}

		let disabled = creatingBlogComment;
		let disabledKnownInput = disabled || loggedIn;
		let spinnerClassName = creatingBlogComment ? 'margin-left-20' : 'hide margin-left-20';

		return (
			<div className="">
				<h2 className="mg-sec-left-title">Leave a Reply</h2>
				<div>
					<input placeholder="Full Name" value={full_name} disabled={disabledKnownInput} ref='full_name' type="text" className="mg-blog-form-input form-control"/>
				</div>
				<div>
					<input placeholder="Email" value={email} disabled={disabledKnownInput} ref="email" type="email" className="mg-blog-form-input form-control"/>
				</div>
				<div>
					<input placeholder="Website" disabled={disabled} ref="website" type="text" className="mg-blog-form-input form-control"/>
				</div>
				<div>
					<textarea placeholder="Comment" disabled={disabled} ref="comment" className="mg-blog-form-input form-control" rows="7"></textarea>
				</div>

				<input disabled={disabled} onClick={this.onBlogFeedbackClicked.bind(this)} type="button" value="Post Comment" className="btn btn-dark-main"/>
				<MDSpinner className={spinnerClassName} />
			</div>
		);
	}
}

class BlogBody extends React.Component {
	render() {
		return (
			<div>
				{<PageTitle parentClassName="mg-page-title-space parallax"/>}
				{this.props.children}
			</div>
		);
	}
}

class BlogPage extends React.Component {
	componentWillMount() {
		const {store : {blog}} = this.props;
		Actions.getAuthenticatedUser();
	}

	componentDidMount() {
		const {store : {view : {blogId}}} = this.props;
		Actions.getBlog({blogId});
		window.scrollTo(0, 0);
	}

	shouldComponentUpdate() {
		return true;
	}

	componentWillUpdate() {
		const {store : {view : {blogId}}} = this.props;
		Actions.getBlog({blogId});
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}


	render() {
		const {store : {blog, recentNews, blogMetaData, isProcessing, user}} = this.props;
		let {loadingBlog} = isProcessing;
		let content;
		if (loadingBlog) {
			content = <div className="load-spin"><MDSpinner /></div>
		} else {
			content = <BlogContent blog={blog} recentNews={recentNews} blogMetaData={blogMetaData} isProcessing={isProcessing} user={user} />
		}

		return (
			<BlogBody>
				{content}
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
			loadDataFn: ({view : {blogId}}) => Actions.getBlog({blogId}),
			alwaysLoad : true
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
