const Moment = require('moment');
const DateHelper = {

    getDaysTotalBetweenDates(checkInDate, checkOutDate) {
        return 12;
    },

    getTomorrow() {
        return '11/20/2016';
    },

    addDaysToDate(inputDays, days) {
        return '11/27/2016';
    },

    formatDate(inputDate, format){
        return Moment(inputDate).format(format);
    }
};

module.exports = DateHelper;
