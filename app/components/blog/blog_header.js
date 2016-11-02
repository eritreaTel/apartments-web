const React = require('react');
const Moment = require('moment');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');

class BlogHeader extends React.Component {

    render() {
        const {blog} = this.props;

        return (
            <header>
                {this._renderImages(blog.images)}
                <h2 className="mg-post-title">
                    <Anchor onClick={()=>{Actions.setRoute('/blog')}}> {blog.title}</Anchor>
                </h2>
                <div className="mg-post-meta">
                    <span><Anchor>{Moment(blog.created_at).format('D MMM, YYYY')}</Anchor></span>
                    <span>by <Anchor>{blog.created_by}</Anchor></span>
                    <span><Anchor > {blog.comments_cnt} Comments</Anchor></span>
                </div>
            </header>
        );
    }

    _renderImages(images) {
        const styledImgs = images && images.map(blogImage => {
            return <Anchor onClick={()=>{Actions.setRoute('/blog')}}> <img src={blogImage.full} alt="" className="img-responsive"/> </Anchor>
        });

        return styledImgs ? <div className="mg-post-images-slider"> {styledImgs}</div> : '';
    }
};

module.exports = BlogHeader;