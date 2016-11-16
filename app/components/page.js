const HomePage = require('../pages/HomePage');
const GuestHousesPage = require('../pages/GuestHousesPage');
const ApartmentPage = require('../pages/ApartmentPage');
const AboutUsPage = require('../pages/AboutUsPage');
const ContactUsPage = require('../pages/ContactUsPage');
const BlogsPage = require('../pages/BlogsPage');
const NotFoundPage = require('../pages/NotFoundPage');
const BlogPage = require('../pages/BlogPage');
const SignInPage = require('../pages/SignInPage');
const MyAccountPage = require('../pages/MyAccountPage');
const CookiesHelper = require('../helpers/cookies_helper');

const HeaderBar = require('./ribbons/header_bar');
const Footer = require('./shared/footer');
const DebugHelper = require('../helpers/debug_helper');

const React = require('react');
const types = React.PropTypes;


class Page extends React.Component {

    render() {
        const {store} = this.props;
        const {view} = store;

        var content, loggedIn, type, userId ;
        loggedIn = (!!CookiesHelper.getSessionCookie());
        type = CookiesHelper.getDataFromCookie('userType');
        userId = CookiesHelper.getDataFromCookie('userId');
        switch (view.page) {
            case 'index' :
            case 'home' :
                content = <HomePage {...{store}}/>
                break;
            case 'guest-houses':
                content = <GuestHousesPage {...{store}} />
                break;
            case 'about-us':
                content = <AboutUsPage {...{store}} />
                break;
            case 'blogs':
                content = <BlogsPage {...{store}} />
                break;
            case 'blog':
                content = <BlogPage {...{store}} />
                break;
            case 'contact-us' :
                content = <ContactUsPage {...{store}} />;
                break;
            case 'sign-in':
                content = loggedIn == true? <MyAccountPage {...{store}} /> : <SignInPage {...{store}} />;
                break;
            case 'apartment':
                content = <ApartmentPage {...{store}} />
                break;
            case 'my-account' :
                content = loggedIn == true? <MyAccountPage {...{store}} /> : <SignInPage {...{store}} />;
                break;
            case '404':
            default:
                content = <NotFoundPage {...{store}}/>
                break;
        }

        return (
            <div>
                <div className="preloader hidden"></div>
                <HeaderBar {...{store}}/>
                {content}
                <Footer/>
            </div>
        );
    }
}

Page.propTypes = {
    store: types.object.isRequired
};

module.exports = Page;
