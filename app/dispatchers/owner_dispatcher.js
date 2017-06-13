const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');
const CookiesHelper = require('../helpers/cookies_helper');

module.exports = {

    async getApartmentsByOwner({ownerId}) {
        let url = 'owner/get_my_apartments?owner_id=' + ownerId;
        let {ownerUserInfo : {myApartments}} = this.getStoreVal('userServices');

        if ( url !== this.getStoreVal('requestUrl') || myApartments == null ) {

            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getMyApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                    } else {
                        let userServices = this.getStoreVal('userServices');
                        userServices.ownerUserInfo.myApartments = results;
                        this.setStoreVal('userServices', userServices);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot get owner apartments'
                        }
                    });
                }
                this.releaseLock('getMyApartments');
            }
        }
        return this.dispatch({type: 'prepareResponse'});
        },

    async getGuestHouseByOwner() {

        let userId = CookiesHelper.getDataFromCookie('userId');
        let url = 'owner/my_guesthouse?owner_id=' + userId;
        let {ownerUserInfo : {guestHouse}} = this.getStoreVal('userServices');

        if ( url !== this.getStoreVal('requestUrl') || guestHouse == null ) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getMyGuestHouse')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                    } else {
                        this.setStoreVal('ownerGuestHouse', object);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot get owner guesthouse'
                        }
                    });
                }
                this.releaseLock('getMyGuestHouse');
            }
        }
        return this.dispatch({type: 'prepareResponse'});
    },

    async updateGuestHouse(data) {
        let url = "owner/update_my_guesthouse/" + data.owner_id; //+ "?XDEBUG_SESSION_START='PHPSTORM'";
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('updateGuestHouse')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'PUT'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('ownerGuestHouse', object);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot update accommodation. Please try again'
                    }
                });
            }
            this.releaseLock('updateGuestHouse');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async updateApartment(data) {
        let url = "owner/update_apartment/" + data.id + "?XDEBUG_SESSION_START='PHPSTORM'";
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('updateApartment')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'PUT'});
                const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data: {errors}});
                } else {
                    let userServices = this.getStoreVal('userServices');
                    userServices.ownerUserInfo.myApartments = results;
                    this.setStoreVal('userServices', userServices);
                }

            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot update room. Please try again'
                    }
                });
            }
            this.releaseLock('updateApartment');
            return this.dispatch({type: 'prepareResponse'});
        }
    }
};
