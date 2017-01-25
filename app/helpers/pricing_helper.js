const CurrencyFormatter = require('currency-formatter');

const PricingHelper = {

    getTotalPrice(apartment, additional) {
        let totalAmount = apartment.pricingInfo.total_price;
        let airportPickup = additional && additional.airport_pickup;
        if (airportPickup) {
            totalAmount = totalAmount + 30;
        }
        return totalAmount;
    },

    getMinimumPrice(apartment, additional) {
        let totalAmount = apartment.pricingInfo.total_price;
        let airportPickup = additional && additional.airport_pickup;
        if (airportPickup) {
            totalAmount = totalAmount + 30;
        }

        return totalAmount * .15;
    },

    getCurrentPayment(totalAmount, paymentAmount) {
        if (paymentAmount > totalAmount) {
            return totalAmount;
        }
        return paymentAmount;
    },

    getRemainingAmount(totalAmount, paymentAmount) {
        let remainingAmount = totalAmount - paymentAmount;
        if (paymentAmount > totalAmount) {
            return 0;
        }
        return remainingAmount;
    },

    paymentAmountIsValid(paymentAmount, apartment, additional) {
        let totalAmount   = this.getTotalPrice(apartment, additional);
        let minimumAmount = this.getMinimumPrice(apartment, additional);
        if (paymentAmount <  minimumAmount) {
            return "Payment amount should be greater than " + CurrencyFormatter.format(minimumAmount, { code: 'USD' }); ;
        }

        if (paymentAmount >  totalAmount) {
            return "Payment amount should be less than " + CurrencyFormatter.format(totalAmount, { code: 'USD' });
        }
        return "valid";
    },

    getReservationConfirmationNumber(apartmentBookingId) {
        return 525 + '-' + apartmentBookingId;
    }


};

module.exports = PricingHelper;
