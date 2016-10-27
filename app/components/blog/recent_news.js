const React = require('react');
const NewsHeader = require('./news_header');


class RecentNews extends React.Component {

    renderNewsHeading(newsHeading) {
        return (
            <div className="col-md-5">
                <h2 className="mg-sec-left-title">Recent News</h2>
                <NewsHeader news={newsHeading} />
            </div>
        );
    }

    renderNewsGallery(gallery){
        const styledFullLi = gallery.map(item =>{
            return <li><img src={item.full_img} alt={item.caption}/></li>;
        });

        const styledThumbLi = gallery.map(item =>{
            return <li><img src={item.thumb} alt={item.caption}/></li>;
        });

        return(
            <div className="col-md-7">
                <h2 className="mg-sec-left-title">Our Gallery</h2>
                <div className="mg-gallery-container">
                    <ul className="mg-gallery" id="mg-gallery">
                        {styledFullLi}
                    </ul>
                    <ul className="mg-gallery-thumb" id="mg-gallery-thumb">
                        {styledThumbLi}
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="mg-news-gallery">
                <div className="container">
                    <div className="row">
                        {this.renderNewsHeading(this.props.news)}
                        {this.renderNewsGallery(this.props.gallery)}
                    </div>
                </div>
            </div>

        );
    }
};

function getDefaultProps() {
    let props = {
        news: [
            {
                "title": "Uganda number one tourist destination",
                "description_intro": "Uganda number one tourist destination, Uganda number one tourist destination",
                "created_at": "2016-10-17 09:43:26"
            },
            {
                "title": "Uganda joining forces with Kenya",
                "description_intro": "Uganda, Kenya and Rwanda joing tourist forces, Uganda, Kenya and Rwanda joing tourist forces",
                "created_at": "2016-10-12 09:43:26"
            },
            {
                "title": "New park opened in Uganda",
                "description_intro": "New national park opened in Uganda, New national park opened in Uganda",
                "created_at": "2016-10-09 09:43:26"
            }
        ],
        gallery: [
            {
                "full_img" : "images/gallery-01.png",
                "thumb" : "images/gallery-thumb-01.png",
                "caption" : "Partner Logo"
            },
            {
                "full_img" : "images/gallery-02.png",
                "thumb" : "images/gallery-thumb-02.png",
                "caption" : "Partner Logo"
            },
            {
                "full_img" : "images/gallery-05.png",
                "thumb" : "images/gallery-thumb-05.png",
                "caption" : "Partner Logo"
            },
            {
                "full_img" : "images/gallery-06.png",
                "thumb" : "images/gallery-thumb-06.png",
                "caption" : "Partner Logo"
            },
            {
                "full_img" : "images/gallery-07.png",
                "thumb" : "images/gallery-thumb-07.png",
                "caption" : "Partner Logo"
            },
            {
                "full_img" : "images/gallery-08.png",
                "thumb" : "images/gallery-thumb-08.png",
                "caption" : "Partner Logo"
            }
        ]
    }

    return props;
}


RecentNews.defaultProps = getDefaultProps();

module.exports = RecentNews;