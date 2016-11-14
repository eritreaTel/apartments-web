const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    processPayment(data) {
        this.mergeStoreVal('bookingStage', {payment: data});
        return true;
        // This is where a call to Stripe API is done. This is awesome, as the data don't hit our server but theirs.
    },

    async createApartmentBooking(data) {
        const url = 'apartment-bookings';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createApartmentBooking')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data, method: 'POST'});
                if (response.data && response.data.results && response.data.results.length > 0) {
                    this.setStoreVal('confirmation', response.data.results[0]);
                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Can not create apartment booking'
                    }
                });
            }
            this.releaseLock('createApartmentBooking');
        }
    }
};
