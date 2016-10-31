const HomePage = require('../pages/HomePage');
const GuestHousesPage = require('../pages/GuestHousesPage');
const ApartmentPage = require('../pages/ApartmentPage');
const AboutUsPage = require('../pages/AboutUsPage');
const HeaderBar = require('./ribbons/header_bar');
const Footer = require('./shared/footer');
const DebugHelper = require('../helpers/debug_helper');

const React = require('react');
const types = React.PropTypes;


class Page extends React.Component {

    render() {
        const {store} = this.props;
        const {view} = store;
        DebugHelper.trackStore(this.props);

        console.log('page defined in the view');
        console.log(view.page);
        let content, loggedIn = true;

        switch (view.page) {
            case 'guest-houses':
                content = <GuestHousesPage {...{store}} />
                break;
            case 'about-us':
                content = <AboutUsPage {...{store}} />
                break;
            case 'blogs':
                content = 'Blogs';
                break;
            case 'contact-us' :
                content = 'Contact US';
                break;
            case 'sign-in':
                content = 'Sign In';
                break;
            case 'contact':
                content = 'Log In';
                break;
            case 'apartment':
                content = <ApartmentPage {...{store}} />
                break;
            default:
                content = <HomePage {...{store}}/>
                break;
        }

        return (
            <div>
                <div className="preloader hidden"></div>
                <HeaderBar/>
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
