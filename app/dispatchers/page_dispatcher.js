const FetchHelper = require('../helpers/fetch_helper');

module.exports = {
    setLastEvent(e){
        e.persist();
        const {screenX, screenY, clientX, clientY, currentTarget} = e;
        const rect = e.currentTarget.getBoundingClientRect();
        const lastEvent = {
            clientX,
            clientY,
            rect,
            screenX,
            screenY,
            target: currentTarget
        };
        this.setStoreVal('lastEvent', lastEvent);
    },

    setView(data) {
        this.setStoreVal('view', data);
    },

    setRoute(data) {
        this.router.setRoute(data);
    },

    searchApartmentsClicked(data) {
        this.mergeStoreVal('bookingStage', {searchInfo: data});
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    bookApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('apartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    bookBestApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('bestApartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    viewBestApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('bestApartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
    },

    goToPaymentClicked(data) {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
        this.mergeStoreVal('bookingStage', {personal: data});
    },

    goToConfirmationClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'confirmation'});
    },

    confirmationIsDone() {
        this.mergeStoreVal('bookingStage', {activeStage: ''});
    },

    goBackToSearch(personalInfo) {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
        if (personalInfo != null || personalInfo != undefined) {
            this.mergeStoreVal('bookingStage', {personal: data});
        }
    },

    goBackToPersonal() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goBackToPayment() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    }
};
