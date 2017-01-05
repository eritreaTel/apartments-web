const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');


module.exports = {
    clearApartments() {
        this.setStoreVal('apartment', null);
        this.setStoreVal('apartments', []);
    },

    async getBestApartments() {
        let url = 'available_apartments?best_apartments=1';
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, bed}} = bookingStage;
        url = url + '&check_in_date=' + checkInDate + '&check_out_date=' + checkOutDate + '&room=' + room + '&bed=' + bed;
        console.log("best apartments url is");
        console.log(url);

        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('bestApartments').length == 0) {
            this.setStoreVal('requestUrl', url);
            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('bestApartments', results);
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

    async getApartments() {
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo} = bookingStage;
        console.log('inside get apartments' );
        console.log(searchInfo);
        let {checkInDate, checkOutDate, room, bed, pageNumber} = searchInfo;

        if (typeof pageNumber ==='undefined') {
            pageNumber = 1;
        }
        const url = 'apartments?checkInDate=' + checkInDate + '&checkOutDate=' + checkOutDate + '&room=' + room + '&bed='+bed + '&pageNumber=' + pageNumber;

        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('apartments').length == 0 ) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    if (response.data && response.data.results && response.data.results.length > 0) {
                        this.setStoreVal('pageNumber', pageNumber);
                        this.concatStoreVal('apartments', response.data.results);
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
    }
};
