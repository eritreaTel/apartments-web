const React = require('react');
const Anchor = require('../shared/anchor');

class BlogTags extends React.Component {

    render() {
        const {blogMetaData, parentClassName} = this.props;

        const styledTags = blogMetaData && blogMetaData.map(metaData => {
            if (metaData.type == 'tag') {
                return 	<Anchor key={metaData.id}>{metaData.value}</Anchor>;
            }
        });

        return (
            <div className={parentClassName}> {styledTags} </div>
        );
    }


};

module.exports = BlogTags;