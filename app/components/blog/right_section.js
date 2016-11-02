const React = require('react');
const Moment = require('moment');
const Anchor = require('../shared/anchor');
const BlogTags = require('./blog_tags');

class RightSection extends React.Component {

    render() {
        return (
            this._renderRightSection(this.props)
        );
    }

    _renderRightSection(props) {
        return (
            <div className="col-md-4">
                <div className="mg-widget-area">
                    <aside className="mg-widget">
                        <input type="text" placeholder="Search..." className="form-control"/>
                    </aside>

                    <aside className="mg-widget">
                        <h2 className="mg-widget-title">Recent Posts</h2>
                        {this._renderRecentPosts(props.news)}
                    </aside>

                    <aside className="mg-widget">
                        <h2 className="mg-widget-title">Category</h2>
                        {this._renderCategories(props.category)}
                    </aside>

                    <aside className="mg-widget">
                        <h2 className="mg-widget-title">Tags</h2>
                        <BlogTags tags={props.tags} parentClassName="tagcloud" />
                    </aside>
                </div>
            </div>
        );
    }

    _renderRecentPosts(news){
        const styledLi = news.map(singleNews => {
            return	<li>
                        <div className="mg-recnt-post">
                            <div className="mg-rp-date"> {Moment(singleNews.created_at).format('D')} <div className="mg-rp-month"> {Moment(singleNews.created_at).format('MMMM')} </div></div>
                            <h3><Anchor> {singleNews.title} </Anchor></h3>
                            <p>{singleNews.short_description}</p>
                        </div>
                    </li>
        });

        return (<ul className="mg-recnt-posts"> {styledLi} </ul>);
    }

    _renderCategories(categories) {
        const styledLi = categories.map(category => {
            return <li><Anchor >{category.title}</Anchor></li>;
        });

        return (<ul> {styledLi}</ul>);
    }

}

function getDefaultProps() {
    let props = {
        news: [
            {
                "title": "Uganda number one tourist",
                "short_description": "Uganda number one tourist destination ...",
                "created_at": "2016-10-17 09:43:26"
            },
            {
                "title": "Uganda joining forces with ",
                "short_description": "Uganda, Kenya and Rwanda joing tourist forces ...",
                "created_at": "2016-10-12 09:43:26"
            },
            {
                "title": "New park opened in Uganda",
                "short_description": "New national park opened in Uganda, New national ...",
                "created_at": "2016-10-09 09:43:26"
            }
        ],
        category: [
            {
                "id": "1",
                "title": "Video"
            },
            {
                "id": "2",
                "title": "Apartments"
            },
            {
                "id": "3",
                "title": "Promotion"
            },
            ,
            {
                "id": "4",
                "title": "Events"
            }
        ],
        tags: [
            {
                "id": "1",
                "title": "Video"
            },
            {
                "id": "2",
                "title": "Apartments"
            },
            {
                "id": "3",
                "title": "Promotion"
            },
            ,
            {
                "id": "4",
                "title": "Events"
            },
            {
                "id": "5",
                "title": "Gallery"
            },
            {
                "id": "6",
                "title": "New"
            },
            {
                "id": "7",
                "title": "Travel"
            }
        ]
    }

    return props;
}


RightSection.defaultProps = getDefaultProps();

module.exports = RightSection;