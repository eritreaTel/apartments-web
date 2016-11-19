const React = require('react');
module.exports = {
    isRequired(value) {
        return value.toString().trim().length > 0;
    }
}


