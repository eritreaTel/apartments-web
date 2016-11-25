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

    clearApartments() {
        Dispatcher.dispatch({type: 'clearApartments'});
    },

    searchApartmentsClicked(data) {
        Dispatcher.dispatch({type: 'searchApartmentsClicked', data});
    },

    saveSearchInfo(data) {
        Dispatcher.dispatch({type: 'saveSearchInfo', data});
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

    goBackToPersonal(data) {
        console.log('inside action');
        console.log(data);
        Dispatcher.dispatch({type: 'goBackToPersonal', data});
    },

    goBackToSearch(data) {
        Dispatcher.dispatch({type: 'goBackToSearch', data});
    },

    goBackToPayment() {
        Dispatcher.dispatch({type: 'goBackToPayment'});
    },

    confirmationIsDone() {
        Dispatcher.dispatch({type: 'confirmationIsDone'});
    },

    createUser(data) {
        Dispatcher.dispatch({type: 'createUser', data});
    },
    processPayment(data) {
        Dispatcher.dispatch({type: 'processPayment', data});
    },

    createApartmentBooking(data) {
        Dispatcher.dispatch({type: 'createApartmentBooking', data});
    },

    createContactUs(data) {
        Dispatcher.dispatch({type: 'createContactUs', data});
    },

    logIn(data) {
        Dispatcher.dispatch({type: 'logIn', data});
    },

    logOut() {
        Dispatcher.dispatch({type: 'logOut'});
    },

    getAuthenticatedUser() {
        Dispatcher.dispatch({type: 'getAuthenticatedUser'});
    },

    sendResetPasswordToken(data) {
        Dispatcher.dispatch({type: 'sendResetPasswordToken', data});
    },

    validateResetPasswordToken(data) {
        Dispatcher.dispatch({type: 'validateResetPasswordToken', data});
    },

    updatePassword(data) {
        Dispatcher.dispatch({type: 'updatePassword', data});
    },

    goBackToResetPasswordBody(data) {
        Dispatcher.dispatch({type: 'goBackToResetPasswordBody'});
    },

    acceptTermsAndServices(data) {
        Dispatcher.dispatch({type: 'acceptTermsAndServices', data});
    }
};

module.exports = Actions;
