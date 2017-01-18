const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');
const PricingHelper = require('../helpers/pricing_helper');


module.exports = {
    processPayment() {
        //This is where a call to Stripe API is done. This is awesome, as the data don't hit our server but theirs.
        this.mergeStoreVal('bookingStage', {payment: data});
        return true;
    },

    async createApartmentBooking({stripe_token}) {
        const url = 'apartment_bookings';
        this.setStoreVal('requestUrl', url);

        console.log("in here");
        if (this.acquireLock('createApartmentBooking')) {
            try {

                let apartment = this.getStoreVal('apartment');
                let bookingStage = this.getStoreVal('bookingStage');
                let user = this.getStoreVal('user');
                let pricingInfo = apartment.pricingInfo;
                let {additional, payment, searchInfo} = bookingStage;
                let totalAmount = PricingHelper.getTotalPrice(apartment, additional);

                let carRental = (additional.car_rentals == 1) ? 1 : 0 ;
                let tourGuide = (additional.tour_guides == 1) ? 1 : 0 ;
                let airportPickup = (additional.airport_pickup == 1) ? 1 : 0 ;

                let bookingData = {
                    'apartment_id'   : apartment.id,
                    'room'           : searchInfo.room,
                    'adult'          : searchInfo.adult,
                    'user_id'        : user.id,
                    'stripe_token'   : stripe_token,
                    'start_date'     : pricingInfo.start_date,
                    'end_date'       : pricingInfo.end_date,
                    'price_per_day'  : pricingInfo.price_per_day,
                    'price_per_week' : pricingInfo.price_per_week,
                    'price_per_month': pricingInfo.price_per_month,
                    'days_cnt'       : pricingInfo.days_cnt,
                    'total_price'    : totalAmount,
                    'paid_amount'    : payment.payment_amount,
                    'airport_pickup' : airportPickup,
                    'tour_guide'     : tourGuide,
                    'car_rental'     : carRental
                };

                console.log(bookingData);
                const response = await FetchHelper.fetchJson(url, {body: bookingData , method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.mergeStoreVal('bookingStage', {confirmation: object});
                    this.dispatch({type: 'createAirportPickup'}); // creates airport pickup record.
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

    async createAirportPickup() {
        const url = 'airport_pickups';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createAirportPickup')) {
            try {
                let bookingStage = this.getStoreVal('bookingStage');
                let apartment = this.getStoreVal('apartment');
                let user = this.getStoreVal('user');
                let {additional, payment, confirmation} = bookingStage;

                let airportPickup = (additional.airport_pickup == 1) ? 1 : 0 ;

                if (airportPickup == 1) {
                    let airportPickupData = {
                        'user_id': user.id,
                        'apartment_id': apartment.id,
                        'apartment_booking_id': confirmation.id,
                        'arrival_time': additional.arrival_date.format("YYYY-MM-DD") + ' ' + additional.arrival_time,
                        'airline_name': additional.airline_name,
                        'airport': 'Entebe'
                    }

                    const airportResponse = await FetchHelper.fetchJson(url, {body: airportPickupData, method: 'POST'});
                    const {object, errors} = ResponseHelper.processResponseReturnOne(response);

                    if (errors.length > 0) {
                        // We should somehow log this error and avoid blocking further progress.
                    }
                }
            } catch (error) {
                // If there is any error in this, it should not block reservation. We should do some logging and contact user again.
            }

            this.releaseLock('createAirportPickup');
        }
    }
};
