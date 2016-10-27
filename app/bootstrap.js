/* eslint-disable no-unused-vars */
const React = require('react');
/* eslint-enable no-unused-vars */
const ReactDOM = require('react-dom');

module.exports = {
  init(Entry, props = {}) {
    if (typeof document === 'undefined') return;

    // we add this to be able to force events in integration specs where capybara's click is failing
    global.TestUtils = require('react-addons-test-utils');

    ReactDOM.render(<Entry {...props}/>, root);
  }
};


