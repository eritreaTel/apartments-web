const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');
const PricingHelper = require('../helpers/pricing_helper');
const ApartmentHelper = require('../helpers/apartment_helper');


module.exports = {

    async cleanUpBookingData() {
        this.mergeStoreVal('bookingStage', {activeStage: null});
        this.mergeStoreVal('bookingStage', {confirmation: {}});

        //reset payment information
        let bookingStage = this.getStoreVal('bookingStage');
        let existingVal = (bookingStage.payment != null) ? bookingStage.payment : {};
        let data  = {'payFull' : true, 'payLater' : false, 'payPartial' : false};
        await _.forEach(data, function(value, key) {
            existingVal[key] = value;
        });
        this.mergeStoreVal('bookingStage', {payment: existingVal});
    },

    async createApartmentBooking({stripe_token}) {
        const url = "apartment_bookings";
        //const url = "apartment_bookings?XDEBUG_SESSION_START='PHPSTORM'";
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createApartmentBooking')) {
            try {

                let apartment = this.getStoreVal('apartment');
                let {apartments, daysCnt, totalPrice, startDate, endDate, guestHouseId} = apartment;
                let bookingStage = this.getStoreVal('bookingStage');
                let user = this.getStoreVal('user');
                let pricingInfo = apartment.pricingInfo;
                let {additional, personal, payment, searchInfo} = bookingStage;
                let totalAmount = PricingHelper.getTotalPrice(totalPrice, additional);
                let skinnyApartments = ApartmentHelper.getSkinyApartmentsRepresentation(apartments);

                let carRental = (additional.car_rentals == 1) ? 1 : 0 ;
                let tourGuide = (additional.tour_guides == 1) ? 1 : 0 ;
                let airportPickup = (additional.airport_pickup == 1) ? 1 : 0 ;

                let bookingData = {
                    'skinnyApartments'  : skinnyApartments,
                    'guest_house_id'    : guestHouseId,
                    'room'              : searchInfo.room,
                    'adult'             : searchInfo.adult,
                    'child'             : searchInfo.children,
                    'user_id'           : user.id,
                    'first_name'        : personal.first_name,
                    'last_name'         : personal.last_name,
                    'city'              : personal.city,
                    'country'           : personal.country,
                    'stripe_token'      : stripe_token,
                    'start_date'        : startDate,
                    'end_date'          : endDate,
                    'days_cnt'          : daysCnt,
                    'total_price'       : totalAmount,
                    'paid_amount'       : payment.payment_amount,
                    'airport_pickup'    : airportPickup,
                    'tour_guide'        : tourGuide,
                    'car_rental'        : carRental
                };

                if (airportPickup) {
                    bookingData = {...bookingData ,
                        arrival_time : additional.arrival_date.format("YYYY-MM-DD") + ' ' + additional.arrival_time,
                        airline_name : additional.airline_name,
                        airport : 'Entebbe International'
                    }
                }

                const response = await FetchHelper.fetchJson(url, {body: bookingData , method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.mergeStoreVal('bookingStage', {confirmation: object});
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'Can not create apartment booking. Please try again'
                    }
                });
            }
            this.releaseLock('createApartmentBooking');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async getReservationConfirmations({userId}) {
        let url = 'reservation_confirmations?user_id=' + userId;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('apartmentBookings') == null ) {

            this.setStoreVal('requestUrl', url);
            if (this.acquireLock('getApartmentBookings')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    const {results, errors} = ResponseHelper.processResponseReturnMany(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data: {errors}});
                    } else {
                        this.setStoreVal('reservationConfirmations', results);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch apartment bookings'
                        }
                    });
                }
                this.releaseLock('getApartmentBookings');
            }
        }
    }

};
