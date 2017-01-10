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

    clearApartment() {
        return Dispatcher.dispatch({type: 'clearApartment'});
    },

    saveApartmentReview(data) {
        return Dispatcher.dispatch({type: 'saveApartmentReview', data});
    },

    getApartmentReviews(data) {
        Dispatcher.dispatch({type: 'getApartmentReviews', data});
    },


    getBlogs() {
        return Dispatcher.dispatch({type: 'getBlogs'});
    },

    getBlog(data) {
        return Dispatcher.dispatch({type: 'getBlog', data});
    },

    getRecentNews() {
        return Dispatcher.dispatch({type: 'getRecentNews'});
    },

    getBlogMetaData() {
        return Dispatcher.dispatch({type: 'getBlogMetaData'});
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

    searchApartmentsClicked() {
        Dispatcher.dispatch({type: 'searchApartmentsClicked'});
    },

    searchApartmentsUpdated(data) {
        Dispatcher.dispatch({type: 'searchApartmentsUpdated', data});
    },

    persistSearchInfo(data) {
        Dispatcher.dispatch({type: 'persistSearchInfo', data});
    },

    personalInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'personalInfoUpdated', data});
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

    goToPaymentClicked() {
        Dispatcher.dispatch({type: 'goToPaymentClicked'});
    },

    goToConfirmationClicked() {
        Dispatcher.dispatch({type: 'goToConfirmationClicked'});
    },

    goBackToPersonal(data) {
        Dispatcher.dispatch({type: 'goBackToPersonal', data});
    },

    goBackToSearch() {
        Dispatcher.dispatch({type: 'goBackToSearch'});
    },

    goBackToPayment() {
        Dispatcher.dispatch({type: 'goBackToPayment'});
    },

    confirmationIsDone() {
        Dispatcher.dispatch({type: 'confirmationIsDone'});
    },

    createUser(data) {
        return Dispatcher.dispatch({type: 'createUser', data});
    },

    saveUserSearches(data) {
        Dispatcher.dispatch({type: 'saveUserSearches', data});
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
    },

    setIsProcessing(data) {
        Dispatcher.dispatch({type: 'setIsProcessing', data});
    }
};

module.exports = Actions;
