const React = require('react');
const Anchor = require('../shared/anchor');
const BlogTags = require('./blog_tags');
const Actions = require('../../actions/actions');
const DateHelper = require('../../helpers/date_helper');


const onBlogCategoryClicked = function (category) {
    let isProcessing = {searchingBlogs: true};
    Actions.setIsProcessing(isProcessing);

    let blogsPromise = Actions.getBlogs({'category' : category});
    blogsPromise.then(blogPromise => {
        let isProcessing = {searchingBlogs: false};
        Actions.setIsProcessing(isProcessing);
        Actions.setRoute('/blogs');
    });
}

const onRecentPostClicked = function (blogId) {
    let isProcessing = {loadingBlog: true};
    Actions.setIsProcessing(isProcessing);

    let blogPromise = Actions.getBlog({blogId})
    blogPromise.then(result => {
        let isProcessing = {loadingBlog: false};
        Actions.setIsProcessing(isProcessing);
        Actions.setRoute('/blog/'+blogId);
    });
}


const RecentPost = function (props) {
    const styledLi = props.news && props.news.map(singleNews => {
        return  <li key={singleNews.id}>
                    <div className="mg-recnt-post">
                        <div className="mg-rp-date"> {DateHelper.formatDate(singleNews.created_at, 'D')} <div className="mg-rp-month"> {DateHelper.formatDate(singleNews.created_at, 'MMMM')} </div></div>
                        <h3><Anchor onClick={() => {onRecentPostClicked(singleNews.id)}} > {singleNews.title} </Anchor></h3>
                        <p>{singleNews.short_description}</p>
                    </div>
                </li>
        });

    return (<ul className="mg-recnt-posts"> {styledLi} </ul>);
}

const Categories = function (props) {
    const styledLi =  props.blogMetaData && props.blogMetaData.map(metaData => {
            if (metaData.type == 'category') {
                return <li key={metaData.id}><Anchor onClick={()=>{onBlogCategoryClicked(metaData.value)}} >{metaData.value}</Anchor></li>;
            }
    });

    return (<ul> {styledLi}</ul>);
}

const RightSectionBody = function (props) {
    return (
        <div className="col-md-4">
            <div className="mg-widget-area">
                {props.children}
            </div>
        </div>
    );
}


const RightSection =  function (props) {
    const {blogMetaData, recentNews} = props;

    return (
        <RightSectionBody>
            <aside className="mg-widget">
                <h2 className="mg-widget-title">Recent Posts</h2>
                <RecentPost news={recentNews} />
            </aside>

            <aside className="mg-widget">
                <h2 className="mg-widget-title">Category</h2>
                <Categories blogMetaData={blogMetaData} />
            </aside>

            <aside className="mg-widget">
                <h2 className="mg-widget-title">Tags</h2>
                <BlogTags blogMetaData={blogMetaData} parentClassName="tagcloud" />
            </aside>
        </RightSectionBody>
    );
}

module.exports = RightSection;