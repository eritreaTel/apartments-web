const Moment = require('moment');
const DateHelper = {

    getDateFromString(strDate) {
        return  Moment(strDate);
    },

    getTommorrow() {
        return Moment().add(1, 'days');
    },

    getNDaysFromToday(days) {
        return Moment().add(days, 'days');
    },

    formatDate(inputDate, format){
        return Moment(inputDate).format(format);
    },

    getDay(inputDate) {
        return this.formatDate(inputDate,'D')
    },

    getMonthNameAndYear(inputDate) {
        return this.formatDate(inputDate,'MMMM YYYY')
    },

    getDayName(inputDate) {
        return this.formatDate(inputDate,'dddd')
    },

    isGreaterThanToday(inputDate){
        return true; //TODO - Amanuel
    }

};

module.exports = DateHelper;
