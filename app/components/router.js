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

    about(data) {
        Actions.setView({page: 'about', data});
    },

    contact(data) {
        Actions.setView({page: 'contact', data});
    },

    guestHouses(data) {
        Actions.setView({page: 'guest-houses', data});
    },

    blogs(data) {
        Actions.setView({page: 'blogs', data});
    },

    login(data) {
        Actions.setView({page: 'login', data});
    },

    apartment(data) {
        Actions.setView({page: 'apartment', data});
    },

    blog(blogId) {
        Actions.setView({page: 'blog', blogId});
    }
});

module.exports = Router;
