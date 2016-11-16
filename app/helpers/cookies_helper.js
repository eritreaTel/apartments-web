const cookie = require('react-cookie');
const moment = require('moment');
const {cookieDomain} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',

  deleteSessionCookie() {
      cookie.remove(`${this.oauthToken}`, `expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${cookieDomain}`);

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
