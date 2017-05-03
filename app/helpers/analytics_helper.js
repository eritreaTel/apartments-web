const React = require('react');
let ReactGA = require('react-ga');
ReactGA.initialize('UA-91184275-1 ');

module.exports = {
    CATEGORY_HOME_PAGE      : 'index',
    CATEGORY_HOTELS_PAGE:   'hotels',
    CATEGORY_SIGN_IN_PAGE   : 'sign-in',
    CATEGORY_SIGN_OUT_PAGE  : 'sign-out',
    CATEGORY_ABOUT_US_PAGE  : 'about-us',
    CATEGORY_APARTMENT_PAGE : 'apartment',
    CATEGORY_CONTACT_US_PAGE: 'contact-us',
    CATEGORY_BLOGS_PAGE     : 'blogs',
    CATEGORY_PLAN_YOUR_TRIP : 'your-trip',
    CATEGORY_BLOG_PAGE      : 'blog',
    CATEGORY_ERROR_PAGE     : 'error',
    CATEGORY_RESET_PASSWORD_PAGE : 'reset-password',
    CATEGORY_RESET_PASSWORD_PAGE : 'reset-password',
    CATEGORY_TERMS_OF_USE_PAGE   : 'terms-of-use',
    CATEGORY_PRIVACY_POLICY_PAGE : 'privacy-policy',
    CATEGORY_SEEKER_ACCOUNT_BOOKING_PAGE : 'seeker-account-booking',
    CATEGORY_SEEKER_ACCOUNT_PROFILE_PAGE : 'seeker-account-profile',

    ACTION_CLICKED : 'clicked',

    logEvent(category, action) {
        ReactGA.event({
            category,
            action
        });
    }
}