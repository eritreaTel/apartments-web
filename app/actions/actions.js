const Dispatcher = require('../dispatchers/dispatcher');

const Actions = {
    setRoute(data) {
        Dispatcher.dispatch({type: 'setRoute', data});
    },

    setView(data) {
        Dispatcher.dispatch({type: 'setView', data});
    },

    home(data) {
        Dispatcher.dispatch({type: 'home', data})
    },

    apartmentsList(data) {
        Dispatcher.dispatch({type: 'apartmentsList', data});
    },

    getBestApartments() {
        return Dispatcher.dispatch({type: 'getBestApartments'});
    },

    getApartments() {
        return Dispatcher.dispatch({type: 'getApartments'});
    },

    getApartment(data) {
        return Dispatcher.dispatch({type: 'getApartment', data});
    },

    getBlogs() {
        return Dispatcher.dispatch({type: 'getBlogs'});
    },

    getBlog() {
        return Dispatcher.dispatch({type: 'getBlog'});
    },

    apartment(data) {
        Dispatcher.dispatch({type: 'apartment', data});
    },

    blogsList(data) {
        Dispatcher.dispatch({type: 'blogsList', data});
    },

    blog(data) {
        Dispatcher.dispatch({type: 'blog', data});
    },

    clearApartment() {
        Dispatcher.dispatch({type: 'clearApartment'});
    },

};

module.exports = Actions;
