const React = require('react');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const GalleryHelper = require('../../helpers/gallery_helper');
const DateHelper = require('../../helpers/date_helper');
const withDataLoaded = require('../with_data_loaded');
const Slider = require('react-slick');

import MDSpinner from "react-md-spinner";


class NewsBody extends React.Component{
    render() {
        const {isProcessing} = this.props;
        let loadingBlog = isProcessing ? isProcessing.loadingBlog : false;
        let spinnerCss = loadingBlog ? 'float-right show' : 'hide';

        return (
            <div className="mg-news-gallery container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="mg-sec-left-title">Recent News</h2>
                        <MDSpinner className={spinnerCss}>Loading </MDSpinner>
                    </div>
                    <div className="col-md-7">
                        <h2 className="mg-sec-left-title">Our Gallery</h2>
                    </div>
                </div>

                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const onBlogClicked = function (blogId) {
    let isProcessing = {loadingBlog: true};
    Actions.setIsProcessing(isProcessing);

    let blogPromise = Actions.getBlog({blogId})
    blogPromise.then(result => {
        let isProcessing = {loadingBlog: false};
        Actions.setIsProcessing(isProcessing);
        Actions.setRoute('/blog/'+blogId);
    });
}

class NewsHeading extends React.Component {
    render() {
        const contents = this.props.recentNews.map(singleNews => {
            return  <li key={singleNews.id}>
                        <div className="mg-recnt-post">
                            <div className="mg-rp-date">{ DateHelper.getDay(singleNews.created_at)} <div className="mg-rp-month">{ DateHelper.formatDate(singleNews.created_at, 'MMMM')}</div></div>
                                <h3><Anchor onClick={()=>{onBlogClicked(singleNews.id)}} >{singleNews.title}</Anchor></h3>
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
}

class NewsGalleries extends React.Component {


    render() {
        let sliderProps = {
            arrows    : true,
            autoplay  : false,
            dots : true,
            slidesToShow : 1,
            slidesToScroll : 1,
            infinite : true
        }

        const {recentNews} = this.props;
        let galleries = [];
        _.each(recentNews, (oneNew) => {
            _.each(oneNew.galleries, (gallery) => {
                galleries.push(gallery);
            });
        });

        const styledGalleries = galleries.map(item =>{
                                return <img key={item.id} width="670px" height ="350px" src={assetPath(item.full_image)} alt={item.caption}/>
                             });

        return (
            <div className="col-md-7">
                <Slider {...sliderProps}>
                    {styledGalleries}
                </Slider>
            </div>
        );
    }
}

class RecentNews extends React.Component {
    render() {
        const {store: {recentNews, isProcessing}} = this.props;

        return (
            <NewsBody isProcessing={isProcessing}>
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
