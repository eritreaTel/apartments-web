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

    searchApartmentsUpdated({checkInDate, checkOutDate, room, bed}) {
        let bookingStage = this.getStoreVal('bookingStage');
        let data = (bookingStage.searchInfo != null) ? bookingStage.searchInfo : {};

        if (checkInDate != null) {
            data.checkInDate = checkInDate;
        }
        if (checkOutDate != null) {
            data.checkOutDate = checkOutDate;
        }
        if (checkInDate != null) {
            data.room = room;
        }
        if (checkInDate != null) {
            data.bed = bed;
        }

        console.log("inside update search apartment clicked, and data is: ");
        console.log(data);
        this.mergeStoreVal('bookingStage', {searchInfo: data});
    },

    searchApartmentsClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    saveSearchInfo(data) {
        this.mergeStoreVal('bookingStage', {searchInfo: data});
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

    goBackToSearch(data) {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
        if (data != null || data != undefined) {
            this.mergeStoreVal('bookingStage', {personal: data});
        }
    },

    goBackToPersonal(data) {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
        if (data != null || data != undefined) {
            this.mergeStoreVal('bookingStage', {payment: data});
        }
    },

    goBackToPayment() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    }
};
