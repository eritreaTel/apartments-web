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

    getApartments(data) {
        return Dispatcher.dispatch({type: 'getApartments', data});
    },

    getApartment(data) {
        return Dispatcher.dispatch({type: 'getApartment', data});
    },

    getBlogs() {
        return Dispatcher.dispatch({type: 'getBlogs'});
    },

    getBlog(data) {
        return Dispatcher.dispatch({type: 'getBlog', data});
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

    searchApartmentsClicked(data) {
        Dispatcher.dispatch({type: 'searchApartmentsClicked', data});
    },

    bookApartmentClicked(data) {
        Dispatcher.dispatch({type: 'bookApartmentClicked', data});
    },

    bookBestApartmentClicked(data) {
        Dispatcher.dispatch({type: 'bookBestApartmentClicked', data});
    },

    viewBestApartmentClicked(data) {
        Dispatcher.dispatch({type: 'viewBestApartmentClicked', data});
    },

    goToPaymentClicked(data) {
        Dispatcher.dispatch({type: 'goToPaymentClicked', data});
    },

    goToConfirmationClicked() {
        Dispatcher.dispatch({type: 'goToConfirmationClicked'});
    },

    goBackToPersonal() {
        Dispatcher.dispatch({type: 'goBackToPersonal'});
    },

    goBackToSearch(personalInfo) {
        Dispatcher.dispatch({type: 'goBackToSearch', personalInfo});
    },

    goBackToPayment() {
        Dispatcher.dispatch({type: 'goBackToPayment'});
    },

    confirmationIsDone() {
        Dispatcher.dispatch({type: 'confirmationIsDone'});
    },

    createUser(data) {
        Dispatcher.dispatch({type: 'createUser'});
    }
};

module.exports = Actions;
