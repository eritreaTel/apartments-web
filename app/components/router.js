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

    guestHouses(data) {
        Actions.setView({page: 'guest-houses', data});
    },

    blogs(data) {
        Actions.setView({page: 'blogs', data});
    },

    signIn(data) {
        Actions.setView({page: 'sign-in', data});
    },

    viewApartment(apartmentId) {
        Actions.setView({page: 'apartment', apartmentId});
    },

    viewBlog(blogId) {
        Actions.setView({page: 'blog', blogId});
    },

    myAccount() {
        Actions.setView({page: 'my-account'});
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
