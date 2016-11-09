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
    setApartmentSearchParams(data) {
        console.log(data);
        this.setStoreVal('apartmentSearchParams', data);
    }
};
