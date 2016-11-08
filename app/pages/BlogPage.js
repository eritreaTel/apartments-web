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
				<RightSection tags={props.blog.tags} categories={props.blog.categories} recentNews={props.recentNews}/>
				</div>
			</div>
		</div>
	);
}

const BlogMainContent = function (props) {
	return (
		<main>
			<article className="mg-post">
				<BlogHeader blog={props.blog} />

				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspicor magnitudinem venisset attento delectus ennii cursu constituamus, amarissimam infantes susciperet metrodorus, legimus videbitur. Electram optinere. Opibus innumerabiles appellat dediti nutu fuisset semper corpora perveniri aptissimum. Quem nonne cuiquam commune metrodorus quaeque umquam meminerimus maiorum stulti. Orestem tempus, debet habent percurri ponti quaeri aptior tradere, ennii solvantur dixerit veniam iisque, concederetur optari improborum, vide honesto. Opibus disputari permagna amet inter vitae patriam expleantur caelo angere, doctus attento videamus fecerit democritus triario porro.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pueros voluptatum dubitemus afferat cumque licebit corrupte. Modi accessio disputatione certamen. Eruditionem postea careret optime consequentium magnitudinem triario, omittam, torquatos verbi perturbatur, conducunt careat se provincias natum exitum molita desiderat viam, nullo historiae, efficiantur theatro parendum, sibi veritatis eos maiorum dicenda opinemur crudeli stultus, impendere occultum familiaritatem istius nescius physico fortitudo posuit graecos distinguantur, secutus istam comparaverit, aequo. Noster beate omnes patientia latine legant, sumus. Facultas detracto horreat horrent turpius amicitiam nondum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Angusti stoicos gaudemus democritea uterque graeca confidet menandro desiderent, maximam, locos factorum videntur dolemus, contrariis meminerit expedire ceramico noris sol, dum pulcherrimum cui. Puerilis adiungimus ennius adduci futuros nullo numquidnam ducem expleantur, mala indicaverunt fere municipem theseo, voluptaria caritatem finiri protervi eruditionem expeteremus possit proprius tum maximis, seditione fugienda laboramus filio greges emancipaverat consistat hominem. Defuturum sophocles aliae iudicari parte infanti, dissensio summa, everti eruditus parvam futuros malo varias everti invidia, male.</p>
				</div>

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
				<label>Full Name</label>
				<input type="text" className="form-control"/>
			</div>
			<div>
				<label>Email</label>
				<input type="email" className="form-control"/>
			</div>
			<div>
				<label>Website</label>
				<input type="text" className="form-control"/>
			</div>
			<div>
				<label>Comment</label>
				<textarea className="form-control" rows="7"></textarea>
			</div>

			<input type="button" value="Post Comment" className="btn btn-dark-main"/>
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
		const {store : {blog, recentNews}} = this.props;
		return (
			<BlogBody>
				<BlogContent blog={blog} recentNews={recentNews} />
			</BlogBody>
		);
	}
}


const WithUserLoaded = withDataLoaded({
	WithData: BlogPage,
	WithoutData: () => (
		<BlogBody >
			<div className="load-spin">
				<SvgImage name="dark-sun"/> Loading
			</div>
		</BlogBody>
	),
	data: [
		{
			storeKeys: ['blog'],
			loadDataFn: ({view : {blogId}}) => Actions.getBlog({blogId})
		}
	]
});

module.exports = WithUserLoaded;
