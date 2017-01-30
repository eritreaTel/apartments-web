const React = require('react');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');

function onBlogTagClicked(tag) {
    Actions.getBlogs({'tags' : tag})
    Actions.setRoute('/blogs');
}

class BlogTags extends React.Component {

    render() {
        const {blogMetaData, parentClassName} = this.props;

        const styledTags = blogMetaData && blogMetaData.map(metaData => {
            if (metaData.type == 'tag') {
                return 	<Anchor onClick={() => {onBlogTagClicked(metaData.value)}} key={metaData.id}>{metaData.value}</Anchor>;
            }
        });

        return (
            <div className={parentClassName}> {styledTags} </div>
        );
    }


};

module.exports = BlogTags;