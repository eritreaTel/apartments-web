const cookie = require('react-cookie');
const moment = require('moment');
const {cookieDomain} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',

  deleteSessionCookie() {
      cookie.remove(`${this.oauthToken}`);
  },

  setSessionCookie(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    cookie.save(`${this.oauthToken}`, `${token}`, `expires=${expiresDate}; path=/; domain=${cookieDomain};`);
  },

  addDataToCookie(fieldName, Value, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    cookie.save(`${fieldName}`, `${Value}`, `expires=${expiresDate}; path=/; domain=${cookieDomain};`);
  },

  getDataFromCookie(name) {
    return cookie.load(`${name}`);
  },

  getSessionCookie() {
    return cookie.load(`${this.oauthToken}`);
  }
};
