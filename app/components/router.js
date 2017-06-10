const Actions = require('../actions/actions');
const React = require('react');

const types = React.PropTypes;

const Router = React.createClass({
    propTypes: {
        router: types.oneOfType([types.object, types.func])
    },

    componentDidMount() {
        const {router} = this.props;
        router.configure({strict: false, html5history: true, resource: this});
        router.init();
    },

    render() {
        return null;
    },

    index(data) {
        Actions.setView({page: 'home', data});
    },

    aboutUs(data) {
        Actions.setView({page: 'about-us', data});
    },

    contactUs(data) {
        Actions.setView({page: 'contact-us', data});
    },

    hotels(data) {
        Actions.setView({page: 'hotels', data});
    },

    additionalServices(data) {
        Actions.setView({page: 'additional-services', data});
    },

    payment(data) {
        Actions.setView({page: 'payment', data});
    },

    orderConfirmation(data) {
        Actions.setView({page: 'order-confirmation', data});
    },

    blogs(data) {
        Actions.setView({page: 'blogs', data});
    },

    YourTrip(data) {
        Actions.setView({page: 'your-trip', data});
    },

    ATrip(trip, tripId) {
        Actions.setView({page: 'your-trip', tripId});
    },

    signIn(data) {
        Actions.setView({page: 'sign-in', data});
    },

    viewApartment(description, apartmentId) {
        Actions.setView({page: 'apartment', apartmentId});
    },

    viewComboApartment(description, apartmentId) {
        Actions.setView({page: 'combo-apartment', apartmentId});
    },

    viewBlog(blogId) {
        Actions.setView({page: 'blog', blogId});
    },

    seekerAccount() {
        Actions.setView({page: 'seeker-account'});
    },

    ownerAccount() {
        Actions.setView({page: 'owner-account'});
    },

    resetPassword() {
        Actions.setView({page: 'reset-password'});
    },

    termsOfUse() {
        Actions.setView({page: 'terms-of-use'});
    },

    privacyPolicy() {
        Actions.setView({page: 'privacy-policy'});
    }
});

module.exports = Router;
