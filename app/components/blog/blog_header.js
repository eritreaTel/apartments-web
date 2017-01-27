const React = require('react');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');
const DateHelper = require('../../helpers/date_helper')
const GalleryHelper = require('../../helpers/gallery_helper');
const Carousel = require('react-responsive-carousel').Carousel;

class BlogImage extends React.Component {


    render() {
        let {blog} = this.props;
        let {galleries} = blog;
        let styledImgs = <div />;
        if (galleries && galleries.length > 0) {
            styledImgs = galleries.map(blogImage => {
                            return <Anchor key={blogImage.id} onClick={()=>{Actions.setRoute('/blog/' + blog.id)}}> <img height="350px" width="770px" src={assetPath(blogImage.full_image)} alt="" className="img-responsive"/> </Anchor>
                        });
        }
        return (
            <div className="margin-bottom-20 mg-post-images-slider">
                {styledImgs}
            </div>
        );
    }
}

class BlogHeader extends React.Component {

    render() {
        const {blog} = this.props;
        let {blogComments} = blog;
        let blogCommentSection = '' ;
        if (blogComments && blogComments.length > 0 ) {
            blogCommentSection = <span><Anchor > {blogComments.length} Comments</Anchor></span>
        }

        return (
            <header>
                <h2 className="mg-post-title">
                    <Anchor onClick={()=>{Actions.setRoute('/blog/' + blog.id)}}> {blog.title}</Anchor>
                </h2>
                <div className="mg-post-meta">
                    <span>{ DateHelper.formatDate(blog.created_at, 'D MMM, YYYY')}</span>
                    <span>by UgandaBooking team</span>
                    {blogCommentSection}
                </div>

                <BlogImage blog = {blog} />

            </header>
        );
    }
};

module.exports = BlogHeader;