const Moment = require('moment');
const DateHelper = {

    getOneWeeksFromNow() {
        return Moment().add(7, 'days');
    },

    getThreeWeeksFromNow() {
        return Moment().add(21, 'days');
    },

    formatDate(inputDate, format){
        return Moment(inputDate).format(format);
    }
};

module.exports = DateHelper;
