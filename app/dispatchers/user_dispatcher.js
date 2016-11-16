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
                    CookiesHelper.addDataToCookie('userId', user.id, 3600);
                    CookiesHelper.addDataToCookie('userType', user.type, 3600);
                    this.dispatch({type: 'setRoute', data: '/my-account'});

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
    },

    async logOut(data) {
        const url = 'users/logout';
        this.setStoreVal('requestUrl', url);

        try {
            console.log('getting authenticated user');
            this.dispatch({type: 'fetchAuthenticatedUser'});
            console.log('after fetching authetnciated user');
            let user = this.getStoreVal('user');
            console.log(user);
            data = {'userId' : user.id};

            console.log('data for logout is');
            console.log(data);


            CookiesHelper.deleteSessionCookie();
            await FetchHelper.fetchJson(url, {body: data , method: 'POST'});
        } catch (error) {
            this.dispatch({
                type: 'handleRequestError',
                data: {
                    error,
                    defaultErrorMessage: 'Cannot authenticate user'
                }
            });
        }
    },

    async getAuthenticatedUser() {
        try {
            let user;
            let userId = CookiesHelper.getDataFromCookie('userId');
            let url = 'users/' + userId;
            const response = await FetchHelper.fetchJson(url, {method: 'GET'});
            console.log(response);
            if (response.data && response.data.results && response.data.results.length > 0) {
                user = response.data.results[0];
                this.setStoreVal('user', user);
            }
        } catch (error) {
            this.dispatch({type: 'handleRequestError', data: {error, defaultErrorMessage: 'Failed to get authenticated user'}});
        }
        return user;
    }
};
