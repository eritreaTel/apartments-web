const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    async getBestApartments() {
        const url = 'apartments?bestApartments=true&pageSize=3';
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    console.log("response from API");
                    console.log(response.data.results.length);
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
    }
};
