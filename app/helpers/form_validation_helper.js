const React = require('react');
const validator = require('validator');
const Constants = require('./constants');
import {NotificationContainer, NotificationManager} from 'react-notifications';

var BreakException = {};

module.exports = {
    validateRequiredDatas(e, data, rules, errorHeading) {
        let result = true;
        try {
            _.forEach(rules, function (value, key) {
                if (!data[key]) {
                    NotificationManager.error(value, errorHeading, Constants.ERROR_DISPLAY_TIME);
                    e.refs[key] && e.refs[key].focus();
                    result = false;
                    throw BreakException;
                }
            });
        } catch (error) {
                result = false;
        }
        return result;
    }
}


