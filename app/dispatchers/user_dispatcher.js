const FetchHelper = require('../helpers/fetch_helper');
const CookiesHelper = require('../helpers/cookies_helper');


module.exports = {
    async createUser(data) {
        const url = 'users';
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
    },

    async logIn(data) {
        const url = 'users/login';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('logIn')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});

                if (response.data && response.data.results && response.data.results.length > 0) {
                    let user = response.data.results[0];
                    this.setStoreVal('user', user);
                    CookiesHelper.setSessionCookie(user.php_session_id, 3600);
                    this.dispatch({type: 'setRoute', data: '/guesthouse-seeker'});

                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot authenticate user'
                    }
                });
            }
            this.releaseLock('logIn');
        }
    }
};
