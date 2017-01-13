const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');


module.exports = {
    processPayment() {
        //This is where a call to Stripe API is done. This is awesome, as the data don't hit our server but theirs.
        this.mergeStoreVal('bookingStage', {payment: data});
        return true;
    },

    async createApartmentBooking({stripe_token}) {
        const url = 'apartment_bookings';
        this.setStoreVal('requestUrl', url);

        if (this.acquireLock('createApartmentBooking')) {
            try {

                let apartment = this.getStoreVal('apartment');
                let pricingInfo = apartment.pricingInfo;
                let user = this.getStoreVal('user');

                let bookingData = {
                    'apartment_id'  : apartment.id,
                    'user_id'       : user.id,
                    'stripe_token'  : stripe_token,
                    'start_date'    : pricingInfo.start_date,
                    'end_date'      : pricingInfo.end_date,
                    'price_per_day' : pricingInfo.price_per_day,
                    'price_per_week': pricingInfo.price_per_week,
                    'price_per_month': pricingInfo.price_per_month,
                    'days_cnt'       : pricingInfo.days_cnt,
                    'total_price'    : pricingInfo.total_price,
                    'paid_amount'    : pricingInfo.total_price,
                }

                const response = await FetchHelper.fetchJson(url, {body: bookingData , method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.mergeStoreVal('bookingStage', {confirmation: object});
                }

            } catch (error) {
                this.dispatch({
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
    }
};
