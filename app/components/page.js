const HomePage = require('../pages/Home');
const GuestHousesPage = require('../pages/GuestHouses');
const ApartmentPage = require('../pages/Apartment');
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

        let content, loggedIn = true;

        switch (view.page) {
            case 'guest-houses':
                content = <GuestHousesPage {...{store}} />
                break;
            case 'about' :
                content = 'Contact US';
                break;
            case 'blogs':
                content = 'Blogs';
                break;
            case 'about':
                content = 'About Us';
                break;
            case 'login':
                content = 'Log In';
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
