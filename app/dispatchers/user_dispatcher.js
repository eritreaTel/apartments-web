const FetchHelper = require('../helpers/fetch_helper');
const CookiesHelper = require('../helpers/cookies_helper');
const ResponseHelper = require('../helpers/response_helper');


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

                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                console.log(errors);
                if (errors) {
                    console.log('calling setErrorMessage with ');
                    console.log(errors);
                    this.releaseLock('logIn');
                    this.dispatch({type: 'setErrorMessages', errors});  //@ TODO:Amanuel, pass the whole array
                    return;
                }
                this.setStoreVal('user', object);
                CookiesHelper.setSessionCookie(object.php_session_id, 3600);
                CookiesHelper.addDataToCookie('userId', object.id, 3600);
                CookiesHelper.addDataToCookie('userType', object.type, 3600);
                this.dispatch({type: 'setRoute', data: '/my-account'});

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
            CookiesHelper.deleteSessionCookie();
            this.setStoreVal('user', null);
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
            let loggedIn = !!CookiesHelper.getSessionCookie();
            // If user is not logged in, do nothing and return null object
            if (loggedIn == false) {
                this.setStoreVal('user', null);
                return;
            }

            let userId = CookiesHelper.getDataFromCookie('userId');
            let url = 'users/' + userId;
            const response = await FetchHelper.fetchJson(url, {method: 'GET'});

            if (response.data && response.data.results && response.data.results.length > 0) {
                user = response.data.results[0];
                this.setStoreVal('user', user);
            }
        } catch (error) {
            this.dispatch({type: 'handleRequestError', data: {error, defaultErrorMessage: 'Failed to get authenticated user'}});
        }

    },

    async sendResetPasswordToken(data) {
        const url = 'users/reset-password-token';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('sendResetPasswordToken')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});

                if (response.data && response.data.results && response.data.results.length > 0) {
                    let {email} = data;
                    this.mergeStoreVal('resetPassword', {email: email, stage: 'code-sent'});
                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot send reset password code to the email. Please try again.'
                    }
                });
            }
            this.releaseLock('sendResetPasswordToken');
        }
    },

    async validateResetPasswordToken({code}) {
        const url = 'users/validate-reset-password-token';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('validateResetPasswordToken')) {
            try {
                let {email} = this.getStoreVal('resetPassword');
                const response = await FetchHelper.fetchJson(url, {body: {code, email} , method: 'POST'});

                if (response.data && response.data.results && response.data.results.length > 0) {
                    this.mergeStoreVal('resetPassword', {stage: 'code-validated'});
                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot send reset password code to the email. Please try again.'
                    }
                });
            }
            this.releaseLock('validateResetPasswordToken');
        }
    },

    async updatePassword({password, confirmPassword}) {
        const url = 'users';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createUser')) {
            try {
                let {email} = this.getStoreVal('resetPassword');

                //@TODO:Amanuel - uncomment the below code and make it work
                //const response = await FetchHelper.fetchJson(url, {body: {email, password, confirmPassword} , method: 'PUT'});
                const response = await FetchHelper.fetchJson(url + '/9', {method: 'GET'});

                if (response.data && response.data.results && response.data.results.length > 0) {
                    //now that they have updated the password, dispatch to logIn page using the new password
                    this.dispatch({
                        type: 'logIn',
                        data: {
                            email,
                            password
                        }
                    });
                }
            } catch (error) {
                this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot update user'
                    }
                });
            }
            this.releaseLock('createUser');
        }
    },

    async goBackToResetPasswordBody() {
        this.mergeStoreVal('resetPassword', {stage: ''});
    }
};
