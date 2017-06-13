const React = require('react');
const Header = require('../shared/header');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const CookiesHelper = require('../../helpers/cookies_helper');
const AnHelper = require('../../helpers/analytics_helper');
const MyAccountMenu = require('./my_account_menu');

class HeaderBar extends React.Component {

    onBlogsClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_BLOGS_PAGE, AnHelper.ACTION_CLICKED);
        Actions.getBlogs({});
        Actions.setRoute('/blogs');
    }

    onPlanYourTripClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_PLAN_YOUR_TRIP, AnHelper.ACTION_CLICKED);
        Actions.getTrip({tripId : 1});
        Actions.setRoute('/your-trip');
    }

    onHomeClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_HOME_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/index');
    }

    onHotelsClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_HOTELS_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/hotels');
    }

    onAboutUsClicked(){
        AnHelper.logEvent(AnHelper.CATEGORY_ABOUT_US_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/about-us');
    }

    onContactUsClicked(){
        AnHelper.logEvent(AnHelper.CATEGORY_CONTACT_US_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/contact-us');
    }

    render() {
        const {store : {view : {page}}, user} = this.props;
        return (
            <Header className = 'header transp sticky'>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img className="margin-top-5" src={assetPath("images/logo.png")} alt="logo"/>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li  className={page == 'home' ? 'active' : ''}><Anchor onClick={this.onHomeClicked.bind(this)}>Home</Anchor> </li>
                                <li  className={(page == 'hotels' || page == 'apartment') ? 'active' : ''}><Anchor onClick={this.onHotelsClicked.bind(this)}>Hotels</Anchor> </li>
                                <li  className={(page == 'your-trip') ? 'active' : ''}><Anchor onClick={this.onPlanYourTripClicked.bind(this)}>Your Trip</Anchor> </li>
                                <li  className={(page == 'blogs' || page == 'blog') ? 'active' : ''}><Anchor onClick={this.onBlogsClicked.bind(this)}>Blog</Anchor> </li>
                                <li  className={page == 'about-us' ? 'active' : ''}><Anchor onClick={this.onAboutUsClicked.bind(this)}>About Us</Anchor> </li>
                                <li  className={ page == 'contact-us' ? 'active' : ''}><Anchor onClick={this.onContactUsClicked.bind(this)}>Contact Us</Anchor> </li>
                                <MyAccountMenu page={page} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </Header>
        );
    }
};

module.exports = HeaderBar;