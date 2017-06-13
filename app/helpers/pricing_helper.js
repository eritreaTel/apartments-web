const CurrencyFormatter = require('currency-formatter');
const _ = require('lodash');

const PricingHelper = {

    getTotalPrice(roomTotalAmount, additional) {
        let totalAmount = roomTotalAmount;
        let airportPickup = additional && additional.airport_pickup;
        if (airportPickup) {
            totalAmount = totalAmount + 30;
        }
        return totalAmount;
    },

    getGoogleAddValue(roomTotalAmount, additional){
        let value = roomTotalAmount * .09;
        let airportPickup = additional && additional.airport_pickup;
        if (airportPickup) {
            value = value + 10;
        }

        return _.round(value, 2);
    },

    getMinimumPrice(roomTotalAmount, additional) {
        let totalAmount = roomTotalAmount;
        let airportPickup = additional && additional.airport_pickup;
        if (airportPickup) {
            totalAmount = roomTotalAmount + 30;
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

    paymentAmountIsValid(paymentAmount, totalRoomAmount, additional) {
        let totalAmount   = this.getTotalPrice(totalRoomAmount, additional);
        let minimumAmount = this.getMinimumPrice(totalRoomAmount, additional);
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
