const React = require('react');
const Moment = require('moment');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');

const BlogImage = function (props) {
    const styledImgs = props.blog.images && props.blog.images.map(blogImage => {
        return <Anchor onClick={()=>{Actions.setRoute('/blog/' + props.blog.id)}}> <img src={assetPath(blogImage.full)} alt="" className="img-responsive"/> </Anchor>
    });

    return styledImgs ? <div className="mg-post-images-slider"> {styledImgs}</div> : <div/>;
}

class BlogHeader extends React.Component {
    render() {
        const {blog} = this.props;

        return (
            <header>
                <BlogImage blog = {blog} />
                <h2 className="mg-post-title">
                    <Anchor onClick={()=>{Actions.setRoute('/blog/' + blog.id)}}> {blog.title}</Anchor>
                </h2>
                <div className="mg-post-meta">
                    <span><Anchor>{Moment(blog.created_at).format('D MMM, YYYY')}</Anchor></span>
                    <span>by <Anchor>{blog.created_by}</Anchor></span>
                    <span><Anchor > {blog.comments_cnt} Comments</Anchor></span>
                </div>
            </header>
        );
    }
};

module.exports = BlogHeader;