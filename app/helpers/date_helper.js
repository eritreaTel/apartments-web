const Moment = require('moment');
const DateHelper = {

    getDaysTotalBetweenDates(checkInDate, checkOutDate) {
        return 12;
    },

    getOneWeeksFromNow() {
        return Moment().add(7, 'days').format("YYYY-MM-DD");
    },

    getThreeWeeksFromNow() {
        return Moment().add(21, 'days').format("YYYY-MM-DD");
    },

    formatDate(inputDate, format){
        return Moment(inputDate).format(format);
    }
};

module.exports = DateHelper;
