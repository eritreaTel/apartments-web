const React = require('react');
const moment = require('moment');
const Anchor = require('../shared/anchor');


class NewsHeader extends React.Component {

    render() {
        const {news} = this.props;
        const contents = news.map(singleNews => {
            return <li>
                <div className="mg-recnt-post">
                <div className="mg-rp-date">{moment(singleNews.created_at).format('D')} <div className="mg-rp-month">{moment(singleNews.created_at).format('MMMM')}</div></div>
                <h3><Anchor>{singleNews.title}</Anchor></h3>
                <p>{singleNews.short_description}...</p>
                </div>
            </li>
        });

        return (
            <ul className="mg-recnt-posts">
                {contents}
            </ul>
        );
    }
};

module.exports = NewsHeader;