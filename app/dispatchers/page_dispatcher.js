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

    async searchApartmentsUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.searchInfo != null) ? bookingStage.searchInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });
        this.mergeStoreVal('bookingStage', {searchInfo: existing});
    },

    async personalInfoUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.personal != null) ? bookingStage.personal : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {personal: existing});
        return existing;
    },

    async AdditionalServicesUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.additional != null) ? bookingStage.additional : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {additional: existing});
        return existing;
    },

    async paymentInfoUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.payment != null) ? bookingStage.payment : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {payment: existing});
        return existing;
    },

    searchApartmentsClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    persistSearchInfo(data) {
        this.mergeStoreVal('bookingStage', {searchInfo: data});
    },

    bookApartmentClicked({apartmentId}) {
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
        let apartment = this.getStoreVal('apartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
    },

    bookBestApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('bestApartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});

        let apartments = this.getStoreVal('apartments');
        let found = apartments && apartments.find(apt => apt.id == apartmentId);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }
    },

    viewBestApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('bestApartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
    },

    goToPaymentClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    },

    goToPersonalInfoClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goToConfirmationClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'confirmation'});
    },

    confirmationIsDone() {
        this.mergeStoreVal('bookingStage', {activeStage: ''});
    },

    goBackToAdditional() {
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
    },

    goBackToSearch() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    goBackToPersonal() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goBackToPayment() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    },

    setIsProcessing(data) {
        let isProcessing = this.getStoreVal('isProcessing');
        _.forEach(data, function(value, key) {
            isProcessing.key = value;
        });
        this.mergeStoreVal('isProcessing', data);
    }
};
