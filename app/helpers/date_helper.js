const Moment = require('moment');
const DateHelper = {

    getOneWeeksFromNow() {
        return Moment().add(7, 'days');
    },

    getTwoWeeksFromNow() {
        return Moment().add(14, 'days');
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
    }

};

module.exports = DateHelper;
