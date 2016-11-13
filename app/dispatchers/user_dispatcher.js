const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    async createUser(data) {
        const url = 'user';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createUser')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});

                if (response.data && response.data.results && response.data.results.length > 0) {
                    this.setStoreVal('user', response.data.results[0]);
                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot create user'
                    }
                });
            }
            this.releaseLock('createUser');
        }
    }
};
