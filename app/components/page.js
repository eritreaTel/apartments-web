const HomePage          = require('../pages/HomePage');
const GuestHousesPage   = require('../pages/GuestHousesPage');
const ApartmentPage     = require('../pages/ApartmentPage');
const AboutUsPage       = require('../pages/AboutUsPage');
const ContactUsPage     = require('../pages/ContactUsPage');
const BlogsPage         = require('../pages/BlogsPage');
const NotFoundPage      = require('../pages/NotFoundPage');
const BlogPage          = require('../pages/BlogPage');
const SignInPage        = require('../pages/SignInPage');
const MyAccountPage = require('../pages/MyAccountPage');
const TermsOfUse = require('../pages/TermsOfUse');
const PrivacyPolicy = require('../pages/PrivacyPolicy');
const ResetPasswordPage = require('../pages/ResetPasswordPage');
const ComboApartmentsPage = require('../pages/ComboApartmentsPage');
const YourTripPage = require('../pages/YourTripPage');

const CookiesHelper = require('../helpers/cookies_helper');

//Import third party css
import 'react-select/dist/react-select.css';
import 'react-notifications/lib/notifications.css';
import 'rc-checkbox/assets/index.css';
import 'react-dates/lib/css/_datepicker.css';
import '../../public/css/bootstrap.min.css';
import '../../public/css/font-awesome.min.css';
import '../../public/css/cs-select.css';
import '../../public/css/bootstrap-datepicker3.min.css';
import '../../public/css/freepik.hotels.css';
import '../../public/css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HeaderBar = require('./ribbons/header_bar');
const Footer = require('./shared/footer');
const Logger = require('../helpers/log_helper');

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
        
        Logger.log("Loaded page is " + view.page);

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
            case 'your-trip' :
                content = <YourTripPage {...{store}} />
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
            case 'combo-apartment':
                content = <ComboApartmentsPage {...{store}} />
                break;
            case 'my-account' :
                content = loggedIn == true? <MyAccountPage {...{store}} /> : <SignInPage {...{store}} />;
                break;
            case 'reset-password' :
                content = <ResetPasswordPage {...{store}} />
                break;
            case 'terms-of-use' :
                content = <TermsOfUse {...{store}} />
                break;
            case 'privacy-policy' :
                content = <PrivacyPolicy {...{store}} />
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
                <Footer {...{store}}/>
            </div>
        );
    }
}



Page.propTypes = {
    store: types.object.isRequired
};

module.exports = Page;
