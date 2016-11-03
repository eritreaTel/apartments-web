const FetchHelper = require('../helpers/fetch_helper');

module.exports = {
    async fetchResources(data) {
        return this.dispatch({type: 'makeRequest', data: {...data, method: 'GET'}});
    },

    deleteResource(data) {
        return this.dispatch({type: 'makeRequest', data: {...data, method: 'DELETE'}});
    },

    createResource(data) {
        return this.dispatch({type: 'makeRequest', data: {...data, method: 'POST'}});
    },

    updateResource(data) {
        return this.dispatch({type: 'makeRequest', data: {...data, method: 'PUT'}});
    },

    async makeRequest({url, body, method, setAction, setActionData, storeKey, errorMessage, successMessage}) {
        try {
            let options = {method};
            if (body) options.body = body;
            const response = await FetchHelper.fetchJson(url, options);

            if (setActionData) response.results.setActionData = setActionData;

            if (setAction) this.dispatch({type: setAction, data: response.results});
            if (storeKey) this.setStoreVal(storeKey, response.results);
            if (successMessage) this.dispatch({type: 'setMessages', data: [successMessage]});

        } catch (error) {
            this.dispatch({
                type: 'handleRequestError', data: {
                    error,
                    defaultErrorMessage: errorMessage
                }
            });

            throw error;
        }
    }
};
