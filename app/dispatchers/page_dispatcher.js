const FetchHelper = require('../helpers/fetch_helper');

module.exports = {
    setLastEvent(e){
        e.persist();
        const {screenX, screenY, clientX, clientY, currentTarget} = e;
        const rect = e.currentTarget.getBoundingClientRect();
        const lastEvent = {
            clientX,
            clientY,
            rect,
            screenX,
            screenY,
            target: currentTarget
        };
        this.setStoreVal('lastEvent', lastEvent);
    },

    setView(data) {
        this.setStoreVal('view', data);
    },

    setRoute(data) {
        this.router.setRoute(data);
    },

    async searchApartmentsUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.searchInfo != null) ? bookingStage.searchInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });
        this.mergeStoreVal('bookingStage', {searchInfo: existing});
    },

    async filterCriteriaUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.filterCriteria != null) ? bookingStage.filterCriteria : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });
        this.mergeStoreVal('bookingStage', {filterCriteria: existing});

        this.dispatch({type: 'applyApartmentFilters', data : {filterCriteria : existing}});
    },

    async personalInfoUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.personal != null) ? bookingStage.personal : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {personal: existing});
        return existing;
    },

    async additionalServicesUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.additional != null) ? bookingStage.additional : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {additional: existing});
        return existing;
    },

    async paymentInfoUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.payment != null) ? bookingStage.payment : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('bookingStage', {payment: existing});
        return existing;
    },

    async signUpInfoUpdated(data) {
        let userServices = this.getStoreVal('userServices');
        let existing = (userServices.signUpData != null) ? userServices.signUpData : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('userServices', {signUpData: existing});
        return existing;
    },

    async userInfoUpdated(data) {
        let userServices = this.getStoreVal('userServices');
        let existing = (userServices.updateUserInfo != null) ? userServices.updateUserInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('userServices', {updateUserInfo: existing});
        return existing;
    },

    async seekerUserInfoUpdated(data){
        let userServices = this.getStoreVal('userServices');
        let existing = userServices.seekerUser;

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('userServices', {seekerUser: existing});
        return existing;
    },

    searchApartmentsClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    persistSearchInfo(data) {
        this.mergeStoreVal('bookingStage', {searchInfo: data});
    },

    async bookApartmentPageClicked({apartmentKey}) {
        let apartment = this.getStoreVal('apartment')
        let apartments = this.getStoreVal('apartments');
        apartments = (apartments != null) ? apartments : [];
        let found = await apartments && apartments.find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }

        //Sequence of this matter, this should be at the end
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
    },

    async bookApartmentClicked({apartmentKey}) {
        let apartment = await this.getStoreVal('apartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);

        //Sequence of this matter, this should be at the end
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
    },

    async bookBestApartmentClicked({apartmentKey}) {
        let apartment = await this.getStoreVal('bestApartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);

        let apartments = this.getStoreVal('apartments');
        apartments = (apartments != null) ? apartments : [];
        let found = await apartments && apartments.find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }

        //Sequence of this matter, this should be at the end
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
    },

    async viewBestApartmentClicked({apartmentKey}) {
        let apartment = this.getStoreVal('bestApartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);

        let apartments = this.getStoreVal('apartments');
        apartments = (apartments != null) ? apartments : [];
        let found = await apartments && apartments.find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }
    },

    async viewComboApartmentClickedFromSearch({apartmentKey}) {
        let apartment = await this.getStoreVal('apartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);
    },

    async  viewComboApartmentClickedFromHome({apartmentKey}) {
        let apartment = await this.getStoreVal('bestApartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);

        let apartments = this.getStoreVal('apartments');
        apartments = (apartments != null) ? apartments : [];
        let found = await apartments && apartments.find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }
    },

    goToPersonalInfoClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    goToConfirmationClicked() {
        this.mergeStoreVal('bookingStage', {activeStage: 'confirmation'});
    },

    goToSignUp() {
        this.mergeStoreVal('userServices', {activeSignInSection: 'signUp'});
    },

    goToSignInPage() {
        this.mergeStoreVal('userServices', {activeSignInSection: 'signIn'});
    },

    confirmationIsDone() {
        this.mergeStoreVal('bookingStage', {activeStage: ''});
    },

    goBackToAdditional() {
        this.mergeStoreVal('bookingStage', {activeStage: 'additional'});
    },

    goBackToSearch() {
        this.mergeStoreVal('bookingStage', {activeStage: 'search'});
    },

    goBackToPersonal() {
        this.mergeStoreVal('bookingStage', {activeStage: 'personal'});
    },

    setIsProcessing(data) {
        let isProcessing = this.getStoreVal('isProcessing');
        _.forEach(data, function(value, key) {
            isProcessing.key = value;
        });
        this.mergeStoreVal('isProcessing', data);
    }
};
