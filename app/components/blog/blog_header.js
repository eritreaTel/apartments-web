const React = require('react');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const {assetPath} = require('../../helpers/asset_helper');
const DateHelper = require('../../helpers/date_helper')
const Slider = require('react-slick');


class NextButton extends React.Component {
    render() {
        return (
            <button {...this.props}>{this.children}</button>
        );
    }
}

class PrevButton extends React.Component {
    render() {
        return (
            <button {...this.props}>{this.children}</button>
        );
    }
}

class BlogImage extends React.Component {

    render() {
        let {blog} = this.props;
        let {galleries} = blog;
        let styledImgs = <div />;
        if (galleries && galleries.length > 0) {
            styledImgs = galleries.map(blogImage => {
                            return <img key={blogImage.id} height="350px" width="770px" src={assetPath(blogImage.full_image)} />
                        });
        }

        let sliderProps = {
            arrows    : true,
            autoplay  : false,
            dots : true,
            slidesToShow : 1,
            slidesToScroll : 1,
            infinite : true
        }

        return (
            <div className="margin-bottom-20">
                <Slider {...sliderProps}>
                    {styledImgs}
                </Slider>

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
            blogCommentSection = <span>{blogComments.length} Comments</span>
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