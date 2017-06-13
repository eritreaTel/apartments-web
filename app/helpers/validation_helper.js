const React = require('react');
const validator = require('validator');
module.exports = {
    isRequired(value) {
        return validator.isLength(value, { min: 1 });
    },

    isEmail(value) {
        return validator.isEmail(value);
    },

    isCreditCard(value) {
        return validator.isCreditCard(value);
    },

    isNumeric(value) {
        return validator.isNumeric(value);
    }
}


