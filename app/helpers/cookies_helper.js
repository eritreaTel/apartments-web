const cookie = require('js-cookie');
const moment = require('moment');
const {cookieDomain} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',
  oauthApplicationAccessToken : 'oauthApplicationAccessToken',

  deleteSessionCookie() {
      cookie.remove(this.oauthToken);
  },

  setSessionCookie(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate();

    let options = {'expires' : expiresDate,  'path' : '/', 'domain' : cookieDomain };
    cookie.set(this.oauthToken, token, options);
  },

  addDataToCookie(fieldName, Value, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate();
    let options = {'expires' : expiresDate,  'path' : '/', 'domain' : cookieDomain };

    cookie.set(fieldName, Value, options);
  },

  getDataFromCookie(name) {
    return cookie.get(name);
  },

  removeDataFromCookie(name) {
    cookie.remove(name);
  },

  getSessionCookie() {
    return cookie.get(this.oauthToken);
  },

  getApplicationAccessToken() {
    return cookie.get(this.oauthApplicationAccessToken);
  },

  setApplicationAccessToken(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate();
    let options = {'expires' : expiresDate,  'path' : '/', 'domain' : cookieDomain };

    cookie.set(this.oauthApplicationAccessToken, token, options);
  },

};
