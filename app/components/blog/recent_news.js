const React = require('react');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const GalleryHelper = require('../../helpers/gallery_helper');
const DateHelper = require('../../helpers/date_helper');


const NewsHeading = function (props) {
    const contents = props.recentNews.map(singleNews => {
            return  <li key={singleNews.id}>
                        <div className="mg-recnt-post">
                            <div className="mg-rp-date">{ DateHelper.formatDate(singleNews.created_at,'D')} <div className="mg-rp-month">{ DateHelper.formatDate(singleNews.created_at, 'MMMM')}</div></div>
                            <h3><Anchor onClick={()=>{Actions.setRoute('/blog/' + singleNews.id)}} >{singleNews.title}</Anchor></h3>
                            <p>{singleNews.short_description}...</p>
                        </div>
                    </li>
    });


    return (
        <div className="col-md-5">
            <h2 className="mg-sec-left-title">Recent News</h2>
            <ul className="mg-recnt-posts">
                {contents}
            </ul>
        </div>
    );
}

class NewsGalleries extends React.Component {

    componentDidMount(){
        GalleryHelper.reRenderGalleries();
    }

    render() {
        const {galleries} = this.props;

        const styledFullLi = galleries.map(item =>{
            return <li key={item.id}><img src={assetPath(item.full)} alt={item.caption}/></li>;
        });

        const styledThumbLi = galleries.map(item =>{
                return <li key={item.id*2}><img src={assetPath(item.thumb)} alt={item.caption}/></li>;
        });

        return (
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
}

class RecentNews extends React.Component {

    render() {
        return (
            <div className="mg-news-gallery">
                <div className="container">
                    <div className="row">
                    <NewsHeading recentNews = {this.props.recentNews} />
                    <NewsGalleries galleries={this.props.galleries} />
                    </div>
                </div>
            </div>

        );
    }
};

function getDefaultProps() {
    let props = {
        recentNews: [
            {
                "id"   : 1,
                "title": "Uganda number one tourist destination",
                "short_description": "Uganda number one tourist destination, Uganda number one tourist destination",
                "created_at": "2016-10-17 09:43:26"
            },
            {
                "id" : 2,
                "title": "Uganda joining forces with Kenya",
                "short_description": "Uganda, Kenya and Rwanda joing tourist forces, Uganda, Kenya and Rwanda joing tourist forces",
                "created_at": "2016-10-12 09:43:26"
            },
            {
                "id" : 3,
                "title": "New park opened in Uganda",
                "short_description": "New national park opened in Uganda, New national park opened in Uganda",
                "created_at": "2016-10-09 09:43:26"
            }
        ],
        galleries: [
            {
                "id" : 1,
                "full" : "images/gallery-01.png",
                "thumb" : "images/gallery-thumb-01.png",
                "caption" : "Partner Logo"
            },
            {
                "id" : 2,
                "full" : "images/gallery-02.png",
                "thumb" : "images/gallery-thumb-02.png",
                "caption" : "Partner Logo"
            },
            {
                "id" : 3,
                "full" : "images/gallery-05.png",
                "thumb" : "images/gallery-thumb-05.png",
                "caption" : "Partner Logo"
            },
            {
                "id" : 4,
                "full" : "images/gallery-06.png",
                "thumb" : "images/gallery-thumb-06.png",
                "caption" : "Partner Logo"
            },
            {
                "id" : 5,
                "full" : "images/gallery-07.png",
                "thumb" : "images/gallery-thumb-07.png",
                "caption" : "Partner Logo"
            },
            {
                "id" : 6,
                "full" : "images/gallery-08.png",
                "thumb" : "images/gallery-thumb-08.png",
                "caption" : "Partner Logo"
            }
        ]
    }

    return props;
}


RecentNews.defaultProps = getDefaultProps();

module.exports = RecentNews;