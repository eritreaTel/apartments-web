const HomePage = require('../pages/HomePage');
const GuestHousesPage = require('../pages/GuestHousesPage');
const ApartmentPage = require('../pages/ApartmentPage');
const AboutUsPage = require('../pages/AboutUsPage');
const ContactUsPage = require('../pages/ContactUsPage');
const BlogsPage = require('../pages/BlogsPage');
const NotFoundPage = require('../pages/NotFoundPage');
const BlogPage = require('../pages/BlogPage');
const SeekerDashboardPage = require('../pages/SeekerDashboardPage');
const OwnerDashboardPage = require('../pages/OwnerDashboardPage');
const AdminDashboardPage = require('../pages/AdminDashboardPage');
const EmployeeDashboardPage = require('../pages/EmployeeDashboardPage');


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
                content = 'Sign In';
                break;
            case 'my-account':
                content = 'My - Account';
                break;
            case 'apartment':
                content = <ApartmentPage {...{store}} />
                break;
            case 'guesthouse-seeker' :
                content = <SeekerDashboardPage {...{store}}/>;
                break;
            case 'guesthouse-owner' :
                content = <OwnerDashboardPage {...{store}}/>;
                break;
            case 'guesthouse-admin' :
                content = <AdminDashboardPage {...{store}}/>;
                break;
            case 'guesthouse-employee' :
                content = <EmployeeDashboardPage {...{store}}/>;
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
