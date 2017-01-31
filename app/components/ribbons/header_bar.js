const React = require('react');
const Header = require('../shared/header');
const {assetPath} = require('../../helpers/asset_helper');
const Anchor = require('../shared/anchor');
const Actions = require('../../actions/actions');
const CookiesHelper = require('../../helpers/cookies_helper');
const AnHelper = require('../../helpers/analytics_helper');

class HeaderBar extends React.Component {

    logOut(){
        Actions.logOut();
        window.location.reload()
        Actions.setRoute('/index');
    }

    onBlogsMenuClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_BLOGS_PAGE, AnHelper.ACTION_CLICKED);
        Actions.getBlogs({});
        Actions.setRoute('/blogs');
    }

    onHomeClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_HOME_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/index');
    }

    onGuestHousesClicked() {
        AnHelper.logEvent(AnHelper.CATEGORY_GUESTHOUSE_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/guest-houses');
    }

    onAboutUsClicked(){
        AnHelper.logEvent(AnHelper.CATEGORY_ABOUT_US_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/about-us');
    }

    onContactUsClicked(){
        AnHelper.logEvent(AnHelper.CATEGORY_CONTACT_US_PAGE, AnHelper.ACTION_CLICKED);
        Actions.setRoute('/contact-us');
    }

    onBookingsClicked() {
        console.log('booking clicked');
        AnHelper.logEvent(AnHelper.CATEGORY_SEEKER_ACCOUNT_BOOKING_PAGE, AnHelper.ACTION_CLICKED);
        Actions.seekerUserInfoUpdated({'activeLink' : 'booking'});
        Actions.setRoute('/my-account');

    }

    onEdiProfileClicked() {
        console.log('profile clicked');
        AnHelper.logEvent(AnHelper.CATEGORY_SEEKER_ACCOUNT_PROFILE_PAGE, AnHelper.ACTION_CLICKED);
        Actions.seekerUserInfoUpdated({'activeLink' : 'editProfile'});
        Actions.setRoute('/my-account');
    }

    render() {
        const {store : {view : {page}}, user} = this.props;
        const loggedIn = (!!CookiesHelper.getSessionCookie());

        let myAccount = <li  className={ page == 'my-account' ? 'active dropdown' : 'dropdown'}>
                            <Anchor className="dropdown-toggle" onClick={() => {}} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></Anchor>
                                <ul className="dropdown-menu">
                                    <li><Anchor onClick={this.onBookingsClicked.bind(this)}>Bookings</Anchor></li>
                                    <li><Anchor onClick={this.onEdiProfileClicked.bind(this)}>Edit Profile</Anchor></li>
                                    <li><Anchor onClick={this.logOut.bind(this)}>Log Out</Anchor></li>
                                </ul>
                        </li>;

        let signIn = <li  className={ page == 'sign-in' ? 'active' : ''}><Anchor onClick={()=>{Actions.setRoute('/sign-in')}}>Sign In</Anchor> </li>;
        let content = loggedIn ? myAccount : signIn;

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
                            <a className="navbar-brand" href="#"><img src={assetPath("images/logo.png")} alt="logo"/></a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li  className={page == 'home' ? 'active' : ''}><Anchor onClick={this.onHomeClicked.bind(this)}>Home</Anchor> </li>
                                <li  className={(page == 'guest-houses' || page == 'apartment') ? 'active' : ''}><Anchor onClick={this.onGuestHousesClicked.bind(this)}>Guest Houses</Anchor> </li>
                                <li  className={page == 'about-us' ? 'active' : ''}><Anchor onClick={this.onAboutUsClicked.bind(this)}>About Us</Anchor> </li>
                                <li  className={(page == 'blogs' || page == 'blog') ? 'active' : ''}><Anchor onClick={this.onBlogsClicked.bind(this)}>Blog</Anchor> </li>
                                <li  className={ page == 'contact-us' ? 'active' : ''}><Anchor onClick={this.onContactUsClicked.bind(this)}>Contact Us</Anchor> </li>
                                {content}
                            </ul>
                        </div>
                    </div>
                </nav>
            </Header>
        );
    }
};

module.exports = HeaderBar;