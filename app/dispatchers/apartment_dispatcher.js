const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    clearApartment() {
        this.setStoreVal('apartment', null);
    },

    async getBestApartments() {
        const url = 'apartments?bestApartments=true&pageSize=3';
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('bestApartments').length == 0) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    if (response.data && response.data.results && response.data.results.length > 0) {
                        this.setStoreVal('bestApartments', response.data.results);
                    }
                } catch (error) {
                    this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch best apartments'
                        }
                    });
                }
                this.releaseLock('getBestApartments');
            }
        }
    },

    async getApartments(data) {
        const url = 'apartments?bestApartments=true&pageSize=3';
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('apartments').length == 0 ) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    if (response.data && response.data.results && response.data.results.length > 0) {
                        this.setStoreVal('apartments', response.data.results);
                    }
                    this.mergeStoreVal('bookingStage', {activeStage: 'search'}); // now in searching stage
                } catch (error) {
                    this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch apartments'
                        }
                    });
                }

                this.releaseLock('getApartments');
            }
        }
    },

    async getApartment({apartmentId}) {
        const url = 'apartments/' + apartmentId;
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartment')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    if (response.data && response.data.results && response.data.results.length > 0) {
                        this.setStoreVal('apartment', response.data.results[0]);
                    }
                } catch (error) {
                    this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch apartment'
                        }
                    });
                }
                this.releaseLock('getApartment');
            }
        }
    },

    searchApartmentsClicked(data) {
        this.mergeStoreVal('bookingStage', {searchingInfo: data});
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    bookApartmentClicked({apartmentId}) {
        let apartment = this.getStoreVal('apartments').find(apt => apt.id == apartmentId);
        this.setStoreVal('apartment', apartment);
        console.log(apartment);
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goToPaymentClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    },

    goToConfirmationClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'confirmation'});
    },

    confirmationIsDone() {
        this.mergeStoreVal('bookingStage', {activeStage: ''});
    },

    goBackToSearch() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    goBackToPersonal() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goBackToPayment() {
        this.mergeStoreVal('bookingStage', {activeStage: 'payment'});
    }
};
