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

    getComboApartmentInHotel(data) {
        return Dispatcher.dispatch({type: 'getComboApartmentInHotel', data});
    },

    getOtherApartmentsInHotel() {
        return Dispatcher.dispatch({type: 'getOtherApartmentsInHotel'});
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

    getReservationConfirmations(data) {
        Dispatcher.dispatch({type: 'getReservationConfirmations', data});
    },

    getApartmentsByOwner(data) {
        Dispatcher.dispatch({type: 'getApartmentsByOwner', data});
    },

    getGuestHouseByOwner() {
        Dispatcher.dispatch({type: 'getGuestHouseByOwner'});
    },

    getBlogs(data) {
        return Dispatcher.dispatch({type: 'getBlogs', data});
    },

    getBlog(data) {
        return Dispatcher.dispatch({type: 'getBlog', data});
    },

    getTrip(data) {
        return Dispatcher.dispatch({type: 'getTrip', data});
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

    additionalServicesUpdated(data) {
        return Dispatcher.dispatch({type: 'additionalServicesUpdated', data});
    },

    filterCriteriaUpdated(data) {
        return Dispatcher.dispatch({type: 'filterCriteriaUpdated', data});
    },

    userInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'userInfoUpdated', data});
    },

    guestHouseInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'guestHouseInfoUpdated', data});
    },

    apartmentInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'apartmentInfoUpdated', data});
    },

    ownerUserInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'ownerUserInfoUpdated', data});
    },

    paymentInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'paymentInfoUpdated', data});
    },

    signUpInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'signUpInfoUpdated', data});
    },

    seekerUserInfoUpdated(data) {
        return Dispatcher.dispatch({type: 'seekerUserInfoUpdated', data});
    },

    bookApartmentPageClicked(data) {
        return Dispatcher.dispatch({type: 'bookApartmentPageClicked', data});
    },

    bookApartmentClicked(data) {
        return Dispatcher.dispatch({type: 'bookApartmentClicked', data});
    },

    /*viewOtherApartmentClicked(data) {
        Dispatcher.dispatch({type: 'viewOtherApartmentClicked', data});
    },*/

    bookBestApartmentClicked(data) {
        return Dispatcher.dispatch({type: 'bookBestApartmentClicked', data});
    },

    viewBestApartmentClicked(data) {
        Dispatcher.dispatch({type: 'viewBestApartmentClicked', data});
    },

    viewComboApartmentClickedFromSearch(data) {
        return Dispatcher.dispatch({type: 'viewComboApartmentClickedFromSearch', data});
    },

    viewComboApartmentClickedFromHome(data) {
        return Dispatcher.dispatch({type: 'viewComboApartmentClickedFromHome', data});
    },

    goToPersonalInfoClicked() {
        Dispatcher.dispatch({type: 'goToPersonalInfoClicked'});
    },

    goToConfirmationClicked() {
        Dispatcher.dispatch({type: 'goToConfirmationClicked'});
    },

    goToSignUp() {
        Dispatcher.dispatch({type: 'goToSignUp'});
    },

    goToSignInPage() {
        Dispatcher.dispatch({type: 'goToSignInPage'});
    },

    goBackToPersonal() {
        Dispatcher.dispatch({type: 'goBackToPersonal'});
    },

    goBackToSearch() {
        Dispatcher.dispatch({type: 'goBackToSearch'});
    },

    goBackToAdditional() {
        Dispatcher.dispatch({type: 'goBackToAdditional'});
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

    updateUser(data) {
        return Dispatcher.dispatch({type: 'updateUser', data});
    },

    updateGuestHouse(data) {
        return Dispatcher.dispatch({type: 'updateGuestHouse', data});
    },

    updateApartment(data) {
        return Dispatcher.dispatch({type: 'updateApartment', data});
    },

    saveUserSearches(data) {
        Dispatcher.dispatch({type: 'saveUserSearches', data});
    },

    cleanUpBookingData() {
        Dispatcher.dispatch({type: 'cleanUpBookingData'});
    },

    createApartmentBooking(data) {
        return Dispatcher.dispatch({type: 'createApartmentBooking', data});
    },

    createContactUs(data) {
        return Dispatcher.dispatch({type: 'createContactUs', data});
    },

    createBlogComment(data) {
        return Dispatcher.dispatch({type: 'createBlogComment', data});
    },

    logIn(data) {
        return Dispatcher.dispatch({type: 'logIn', data});
    },

    logOut() {
        Dispatcher.dispatch({type: 'logOut'});
    },

    getAuthenticatedUser() {
        Dispatcher.dispatch({type: 'getAuthenticatedUser'});
    },

    sendResetPasswordToken(data) {
        return Dispatcher.dispatch({type: 'sendResetPasswordToken', data});
    },

    validateResetPasswordToken(data) {
        return Dispatcher.dispatch({type: 'validateResetPasswordToken', data});
    },

    updatePassword(data) {
        return Dispatcher.dispatch({type: 'updatePassword', data});
    },

    applyApartmentFilters(data) {
        return Dispatcher.dispatch({type: 'applyApartmentFilters', data});
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
