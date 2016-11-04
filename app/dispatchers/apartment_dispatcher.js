const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    async getBestApartments() {
        const url = 'guesthouses?bestApartments=true&pageSize=3';
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    if (response.count > 0) {
                        this.concatStoreVal('bestApartments', response.results);
                    }
                } catch (error) {
                    this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch customers'
                        }
                    });
                }
            this.releaseLock('getBestApartments');
            }
        }
    }
};
