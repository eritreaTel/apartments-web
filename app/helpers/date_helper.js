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

    isSameOrAfter(inputDate){
        let today = new Moment();
        today = this.formatDate(today, 'D-MMM-YYYY');
        return inputDate.isSameOrAfter(today);
    },

    isGreaterThanToday(inputDate){
        let today = new Moment();
        today = this.formatDate(today, 'D-MMM-YYYY');
        return inputDate.isAfter(today);
    }

};

module.exports = DateHelper;
