const React = require('react');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');
const DateHelper = require('../../helpers/date_helper');

const BlogImage = function (props) {
    const styledImgs = props.blog.galleries && props.blog.galleries.map(blogImage => {
        return <Anchor key={blogImage.id} onClick={()=>{Actions.setRoute('/blog/' + props.blog.id)}}> <img height="350px" width="770px" src={assetPath(blogImage.full_image)} alt="" className="img-responsive"/> </Anchor>
    });

    return styledImgs ? <div className="margin-bottom-20 mg-post-images-slider"> {styledImgs}</div> : <div/>;
}

class BlogHeader extends React.Component {

    componentDidMount() {
        $(".mg-post-images-slider").owlCarousel({
            singleItem : true,
            navigation : true,
            pagination: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        });
    }

    render() {
        const {blog, blogComments} = this.props;
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
                    <span><Anchor>{ DateHelper.formatDate(blog.created_at, 'D MMM, YYYY')}</Anchor></span>
                    <span>by UgandaBooking team</span>
                    {blogCommentSection}
                </div>

                <BlogImage blog = {blog} />

            </header>
        );
    }
};

module.exports = BlogHeader;