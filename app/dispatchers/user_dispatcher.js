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
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('user', object);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot create user. Please try again'
                    }
                });
            }
            this.releaseLock('createUser');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async updateUser(data) {
        let user = this.getStoreVal('user');
        const url = 'users/' + user.id;
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('updateUser')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'PUT'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('user', object);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot update user. Please try again'
                    }
                });
            }
            this.releaseLock('updateUser');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async saveUserSearches({checkInDate, checkOutDate, room, adult}) {
        const url = 'user_searches';
        this.setStoreVal('requestUrl', url);
        let user = this.getStoreVal('user');
        let userId = user? user.id : null;

        if (this.acquireLock('saveUserSearches')) {
            try {
                let searchInfo = {'check_in_date' : checkInDate, 'check_out_date' : checkOutDate, 'room' : room, "adult" : adult, 'user_id' : userId };
                const response = await FetchHelper.fetchJson(url, {body: searchInfo , method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot create user'
                    }
                });
            }
            this.releaseLock('saveUserSearches');
        }
    },

    async logIn(data) {
        const url = 'users/login';
        let user = undefined;
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('logIn')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});

                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    this.releaseLock('logIn');
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    user = object;
                    this.setStoreVal('user', user);
                    CookiesHelper.setSessionCookie(object.php_session_id, 3600);
                    CookiesHelper.addDataToCookie('userId', object.id, 3600);
                    CookiesHelper.addDataToCookie('userType', object.type, 3600);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot authenticate user. Please refersh page and try again'
                    }
                });
            }
            this.releaseLock('logIn');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async logOut(data) {
        const url = 'users/logout';
        this.setStoreVal('requestUrl', url);

        try {
            CookiesHelper.deleteSessionCookie();
            this.setStoreVal('user', null);
            //window.location.reload()
        } catch (error) {
            await this.dispatch({
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

            const {object, errors} = ResponseHelper.processResponseReturnOne(response);
            if (errors.length == 0) {
                this.setStoreVal('user', object);
            }
        } catch (error) {
            await this.dispatch({type: 'handleRequestError', data: {error, defaultErrorMessage: 'Failed to get authenticated user'}});
        }

    },

    async sendResetPasswordToken(data) {
        const url = 'users/send-reset-password-token';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('sendResetPasswordToken')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});

                const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                if (errors.length > 0) {
                    this.releaseLock('sendResetPasswordToken');
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    let {email} = data;
                    this.mergeStoreVal('resetPassword', {email: email, stage: 'code-sent'});
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'There is system error. Please refersh page and try again.'
                    }
                });
            }
            this.releaseLock('sendResetPasswordToken');
            return  this.dispatch({type: 'prepareResponse'});
        }
    },

    async validateResetPasswordToken({code}) {
        const url = 'users/validate-reset-password-token';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('validateResetPasswordToken')) {
            try {
                let {email} = this.getStoreVal('resetPassword');
                const response = await FetchHelper.fetchJson(url, {body: {code, email} , method: 'POST'});

                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.mergeStoreVal('resetPassword', {stage: 'code-validated', resetCode : code});
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'There is system error. Please refersh your page and try again.'
                    }
                });
            }
            this.releaseLock('validateResetPasswordToken');
            return  this.dispatch({type: 'prepareResponse'});
        }
    },

    async updatePassword(data) {
        const url = 'users/update-user-password';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('updatePassword')) {
            try {
                let {email, resetCode} = this.getStoreVal('resetPassword');
                let updatePassword = {...data, email, resetCode};

                const response = await FetchHelper.fetchJson(url, {body: updatePassword , method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot update user'
                    }
                });
            }
            this.releaseLock('updatePassword');
            return  this.dispatch({type: 'prepareResponse'});
        }
    },

    async goBackToResetPasswordBody() {
        this.mergeStoreVal('resetPassword', {stage: ''});
    },

    acceptTermsAndServices({checked}) {
        this.setStoreVal('acceptToS', checked);
    }
};
