const React = require('react');
const ReactGA = require('react-ga');

module.exports = {
    CATEGORY_BLOGS_PAGE  : 'blogs',
    ACTION_CLICKED       : 'clicked',

    logEvent(category, action) {
        ReactGA.event({
            category,
            action
        });
    }
}

