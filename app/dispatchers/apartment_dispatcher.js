const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');


module.exports = {
    clearApartments() {
        this.setStoreVal('apartment', null);
        this.setStoreVal('apartments', []);
    },

    clearApartment() {
        this.setStoreVal('apartment', null);
    },

    async getBestApartments() {
        let url = 'available_apartments?best_apartments=1';
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, bed}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");
        url = url + '&check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&bed=' + bed;

        console.log('get apartments section' + url);
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('bestApartments').length == 0) {
            this.setStoreVal('requestUrl', url);
            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('bestApartments', results);
                    }
                } catch (error) {
                    await this.dispatch({
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

        let url = 'available_apartments?';
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, bed, pageNumber}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");

        if (typeof pageNumber ==='undefined') {
            pageNumber = 1;
        }

        url = url + 'check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&bed=' + bed + '&pageNumber=' + pageNumber;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('apartments').length == 0 ) {
            console.log('apartment url : ' + url);
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                    } else {
                        this.setStoreVal('pageNumber', pageNumber);
                        this.setStoreVal('apartments', results);
                    }
                } catch (error) {
                    await this.dispatch({
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
                    await this.dispatch({
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

    async saveApartmentReview(data) {
        const url = 'apartment_reviews';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('saveApartmentReview')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});
                const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('apartmentReviews', results);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot create apartment review. Please try again'
                    }
                });
            }

            this.releaseLock('saveApartmentReview');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async getApartmentReviews({apartmentId}) {
        const url = 'apartment_reviews?apartmentId=' + apartmentId;
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('getApartmentReviews')) {
            try {
                const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else  {
                    this.setStoreVal('apartmentReviews', results);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot get apartment review. Please try again'
                    }
                });
            }

            this.releaseLock('getApartmentReviews');
        }
    }

};
