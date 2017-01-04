const React = require('react');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const GalleryHelper = require('../../helpers/gallery_helper');
const DateHelper = require('../../helpers/date_helper');
const withDataLoaded = require('../with_data_loaded');
import MDSpinner from "react-md-spinner";


const NewsBody = function (props) {
    return (
        <div className="mg-news-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="mg-sec-left-title">Recent News</h2>
                    </div>
                    <div className="col-md-7">
                        <h2 className="mg-sec-left-title">Our Gallery</h2>
                    </div>
                </div>

                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

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
        const {recentNews} = this.props;
        let galleries = [];
        _.each(recentNews, (oneNew) => {
            _.each(oneNew.galleries, (gallery) => {
                galleries.push(gallery);
            });
        });

        const styledFullLi = galleries.map(item =>{
            return <li key={item.id}><img src={assetPath(item.full_image)} alt={item.caption}/></li>;
        });

        const styledThumbLi = galleries.map(item =>{
                return <li key={item.id*2}><img src={assetPath(item.thumbnail_image)} alt={item.caption}/></li>;
        });

        return (
            <div className="col-md-7">
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
        const {store: {recentNews}} = this.props;

        return (
            <NewsBody recentNews = {recentNews}>
                <NewsHeading recentNews = {recentNews} />
                <NewsGalleries recentNews={recentNews} />
            </NewsBody>
        );
    }
}


const WithUserLoaded = withDataLoaded({
        WithData: RecentNews,
        WithoutData: () => (
            <NewsBody >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <MDSpinner>Loading </MDSpinner>
                        </div>

                        <div className="col-md-5">
                            <MDSpinner>Loading </MDSpinner>
                        </div>
                    </div>
                </div>
            </NewsBody>
        ),
        data: [
            {
                storeKeys: ['recentNews'],
                loadDataFn: () => Actions.getRecentNews()
            }
        ]
});

module.exports = WithUserLoaded;
