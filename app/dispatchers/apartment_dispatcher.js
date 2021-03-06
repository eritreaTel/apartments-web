const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');
const ApartmentFilterHelper = require('../helpers/apartment_filter_helper');


module.exports = {
    clearApartments() {
        this.setStoreVal('apartment', null);
        this.setStoreVal('apartments', []);
    },

    clearApartment() {
        this.setStoreVal('apartment', null);
        return this.dispatch({type: 'prepareResponse'});
    },

    async getBestApartments() {
        let url = 'available_apartments?best_apartments=1';
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, adult, children}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");
        url = url + '&check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&adult=' + adult + '&children=' + children ;

        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('bestApartments') == null || this.getStoreVal('bestApartments').length == 0) {
            this.setStoreVal('requestUrl', url);
            if (this.acquireLock('getBestApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('bestApartments', results);
                    }
                } catch (error) {
                    await this.dispatch({
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
    },

    async getApartments() {
        let url = 'available_apartments?';
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, adult, children, pageNumber}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");

        if (typeof pageNumber ==='undefined') {
            pageNumber = 1;
        }

        url = url + 'check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&adult=' + adult + '&children=' + children + '&pageNumber=' + pageNumber;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('apartments') == null ) {
            console.log('apartment url : ' + url);
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartments')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                        this.setStoreVal('apartments', []);
                    } else {
                        this.setStoreVal('pageNumber', pageNumber);
                        this.setStoreVal('filteredApartments', results);
                        this.setStoreVal('apartments', results);
                        //populating bestApartments
                        this.dispatch({type: 'getBestApartments', data: {errors}});
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch apartments'
                        }
                    });
                }
                this.releaseLock('getApartments');
            }
        }
        return this.dispatch({type: 'prepareResponse'});
    },


    async getOtherApartmentsInHotel() {
        let url = 'available_apartments_in_hotel?';
        let bookingStage = this.getStoreVal('bookingStage');
        let apartment  = this.getStoreVal('apartment');
        let {searchInfo : {checkInDate, checkOutDate, room, adult, children, pageNumber}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");

        let exclude_apartment_id = apartment.apartments[0].id ;
        let guest_house_id = apartment.apartments[0].guestHouse.id;

        if (typeof pageNumber ==='undefined') {
            pageNumber = 1;
        }

        url = url + 'exclude_apartment_id=' + exclude_apartment_id + '&guest_house_id=' + guest_house_id + '&check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&adult=' + adult + '&children=' + children + '&pageNumber=' + pageNumber;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('otherApartmentsInHotel') == null ) {
            console.log('otherApartmentInHotel url : ' + url);
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getOtherApartmentsInHotel')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                        this.setStoreVal('otherApartmentsInHotel', []);
                    } else {
                        this.setStoreVal('pageNumber', pageNumber);
                        this.setStoreVal('otherApartmentsInHotel', results);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch other apartments in hotel'
                        }
                    });
                }
                this.releaseLock('getOtherApartmentsInHotel');
            }
        }
        return this.dispatch({type: 'prepareResponse'});
    },

    async getComboApartmentInHotel({guestHouseId, apartmentKey}) {
        let url = 'available_combo_apartment_in_hotel?';
        let bookingStage = this.getStoreVal('bookingStage');

        let {searchInfo : {checkInDate, checkOutDate, room, adult, children, pageNumber}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");

        url = url + 'guest_house_id=' + guestHouseId + '&apartmentKey=' + apartmentKey + '&check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&adult=' + adult + '&children=' + children;
        if ( url !== this.getStoreVal('requestUrl') ) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getComboApartmentInHotel')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                    } else {
                        this.setStoreVal('apartment', object);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch other apartments in hotel'
                        }
                    });
                }
                this.releaseLock('getComboApartmentInHotel');
            }
        }
        return this.dispatch({type: 'prepareResponse'});
    },


    async getApartment({apartmentId}) {
        let url = 'apartments?apartment_id=' + apartmentId;
        let bookingStage = this.getStoreVal('bookingStage');
        let {searchInfo : {checkInDate, checkOutDate, room, adult, children, pageNumber}} = bookingStage;
        let formattedCheckIn = checkInDate.format("YYYY-MM-DD");
        let formattedCheckOut = checkOutDate.format("YYYY-MM-DD");

        url = url + '&check_in_date=' + formattedCheckIn + '&check_out_date=' + formattedCheckOut + '&room=' + room + '&adult=' + adult + '&children=' + children ;
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getApartment')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('apartment', object);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch apartment'
                        }
                    });
                }
                this.releaseLock('getApartment');
            }
        }
    },

    async saveApartmentReview(data) {
        const url = 'apartment_reviews';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('saveApartmentReview')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data , method: 'POST'});
                const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('apartmentReviews', results);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot create apartment review. Please try again'
                    }
                });
            }

            this.releaseLock('saveApartmentReview');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async getApartmentReviews({apartmentId}) {
        const url = 'apartment_reviews?apartmentId=' + apartmentId;
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('getApartmentReviews')) {
            try {
                const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else  {
                    this.setStoreVal('apartmentReviews', results);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Cannot get apartment review. Please try again'
                    }
                });
            }

            this.releaseLock('getApartmentReviews');
        }
    },

    async applyApartmentFilters({filterCriteria}) {

        let apartments = this.getStoreVal('apartments');
        let filteredApartments = apartments;

        let {propertyType, priceRange, starRating, locations, showMe, sortBy} = filterCriteria;
        if (propertyType.length > 0) {
            filteredApartments = ApartmentFilterHelper.filterApartmentByType(propertyType, filteredApartments);
        }

        if (priceRange.length > 0) {
            filteredApartments = ApartmentFilterHelper.filterApartmentByPriceRange(priceRange, filteredApartments);
        }

        if (starRating.length > 0) {
            filteredApartments = ApartmentFilterHelper.filterApartmentByStarRating(starRating, filteredApartments);
        }

        if (locations.length > 0) {
            filteredApartments = ApartmentFilterHelper.filterApartmentByLocation(locations, filteredApartments);
        }


        //The below two methods should always be at the end.
        if (showMe != null) {
            filteredApartments = ApartmentFilterHelper.filterByShowMe(showMe, filteredApartments);
        }

        if (sortBy != null) {
            filteredApartments = ApartmentFilterHelper.sortByCriteria(sortBy, filteredApartments);
        }


        this.setStoreVal('filteredApartments', filteredApartments);
    }

};
