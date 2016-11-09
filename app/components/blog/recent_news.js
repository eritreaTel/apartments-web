const React = require('react');
const {assetPath} = require('../../helpers/asset_helper');
const moment = require('moment');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const GalleryHelper = require('../../helpers/gallery_helper');


const NewsHeading = function (props) {
    const contents = props.recentNews.map(singleNews => {
            return  <li>
                        <div className="mg-recnt-post">
                            <div className="mg-rp-date">{moment(singleNews.created_at).format('D')} <div className="mg-rp-month">{moment(singleNews.created_at).format('MMMM')}</div></div>
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
        /*
         * Owl Carousel for Gallery
         */
        var sync1 = $("#mg-gallery");
        var sync2 = $("#mg-gallery-thumb");
        sync1.owlCarousel({
            navigation : true,
            singleItem : true,
            pagination: false,
            afterAction : GalleryHelper.syncPosition(),
            navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],

        });

        sync2.owlCarousel({
            items : 3,
            itemsDesktop: [1199,3],
            itemsDesktopSmall: [979,3],
            itemsTablet: [768,3],
            itemsMobile: [479,3],
            navigation : false,
            pagination: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }

        });

        sync2.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
    }

    render() {
        const {galleries} = this.props;

        const styledFullLi = galleries.map(item =>{
            return <li><img src={assetPath(item.full)} alt={item.caption}/></li>;
        });

        const styledThumbLi = galleries.map(item =>{
                return <li><img src={assetPath(item.thumb)} alt={item.caption}/></li>;
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
                "full" : "images/gallery-01.png",
                "thumb" : "images/gallery-thumb-01.png",
                "caption" : "Partner Logo"
            },
            {
                "full" : "images/gallery-02.png",
                "thumb" : "images/gallery-thumb-02.png",
                "caption" : "Partner Logo"
            },
            {
                "full" : "images/gallery-05.png",
                "thumb" : "images/gallery-thumb-05.png",
                "caption" : "Partner Logo"
            },
            {
                "full" : "images/gallery-06.png",
                "thumb" : "images/gallery-thumb-06.png",
                "caption" : "Partner Logo"
            },
            {
                "full" : "images/gallery-07.png",
                "thumb" : "images/gallery-thumb-07.png",
                "caption" : "Partner Logo"
            },
            {
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