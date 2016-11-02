const React = require('react');
const Anchor = require('../shared/anchor');

class BlogTags extends React.Component {

    render() {
        const {tags, parentClassName} = this.props;

        const styledTags = tags.map(tag => {
            return 	<Anchor>{tag.title}</Anchor>;
        });

        return (
            <div className={parentClassName}> {styledTags} </div>
        );
    }


};

module.exports = BlogTags;