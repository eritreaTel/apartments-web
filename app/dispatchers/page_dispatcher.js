const FetchHelper = require('../helpers/fetch_helper');
const CookiesHelper = require('../helpers/cookies_helper');
const DateHelper = require('../helpers/date_helper');


module.exports = {
    setView(data) {
        this.setStoreVal('view', data);
    },

    setRoute(data) {
        //this.router.setRoute('/')
        this.router.setRoute(data + '/');
    },

    async searchApartmentsUpdated(data) {
        let bookingStage = this.getStoreVal('bookingStage');
        let existing = (bookingStage.searchInfo != null) ? bookingStage.searchInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });
        this.mergeStoreVal('bookingStage', {searchInfo: existing});

        //add search data to cookie. That way, page refresh will still get us the data
        let {checkInDate , checkOutDate, room, adult, children} = existing;
        checkInDate = DateHelper.formatDate(checkInDate, 'D-MMM-YYYY') ;
        checkOutDate = DateHelper.formatDate(checkOutDate, 'D-MMM-YYYY') ;

        CookiesHelper.addDataToCookie('checkInDate', checkInDate, 360000);
        CookiesHelper.addDataToCookie('checkOutDate', checkOutDate, 360000);
        CookiesHelper.addDataToCookie('room', room, 360000);
        CookiesHelper.addDataToCookie('adult', adult, 360000);
        CookiesHelper.addDataToCookie('children', children, 360000);
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

    async guestHouseInfoUpdated(data) {
        let userServices = this.getStoreVal('userServices');
        let {ownerUserInfo} = userServices
        let existing = (ownerUserInfo.updateGuestHouseInfo != null) ? ownerUserInfo.updateGuestHouseInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        userServices.ownerUserInfo.updateGuestHouseInfo = existing;
        this.setStoreVal('userServices', userServices);
        return existing;
    },

    async apartmentInfoUpdated(data) {
        let userServices = this.getStoreVal('userServices');
        let {ownerUserInfo} = userServices
        let existing = (ownerUserInfo.updateApartmentInfo != null) ? ownerUserInfo.updateApartmentInfo : {};

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        userServices.ownerUserInfo.updateApartmentInfo = existing;
        this.setStoreVal('userServices', userServices);
        return existing;
    },

    async ownerUserInfoUpdated(data){
        let userServices = this.getStoreVal('userServices');
        let existing = userServices.ownerUserInfo;

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('userServices', {ownerUserInfo: existing});
        return existing;
    },


    async seekerUserInfoUpdated(data){
        let userServices = this.getStoreVal('userServices');
        let existing = userServices.seekerUserInfo;

        await _.forEach(data, function(value, key) {
            existing[key] = value;
        });

        this.mergeStoreVal('userServices', {seekerUserInfo: existing});
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
        return this.dispatch({type: 'prepareResponse'});
    },

    async bookApartmentClicked({apartmentKey}) {
        let apartment = await this.getStoreVal('apartments').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);
        return this.dispatch({type: 'prepareResponse'});
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
        return this.dispatch({type: 'prepareResponse'});
    },

    /*async viewOtherApartmentClicked({apartmentKey}) {
        let apartment = this.getStoreVal('otherApartmentsInHotel').find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        this.setStoreVal('apartment', apartment);

        let apartments = this.getStoreVal('apartments');
        apartments = (apartments != null) ? apartments : [];
        let found = await apartments && apartments.find(aptResponse => aptResponse.apartmentKey == apartmentKey);
        if (found == null) {
            apartments.push(apartment);
            this.setStoreVal('apartments', apartments);
        }
    },*/

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
