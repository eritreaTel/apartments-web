const cookie = require('js-cookie');
const moment = require('moment');
const {secureCookie} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',
  oauthApplicationAccessToken : 'oauthApplicationAccessToken',

  deleteSessionCookie() {
      let options = {'secure' : secureCookie };
      cookie.remove(this.oauthToken, options);
  },

  setSessionCookie(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 1, 'seconds').toDate();

    let options = {'expires' : expiresDate,  'path' : '/', 'secure' : secureCookie };
    cookie.set(this.oauthToken, token, options);
  },

  addDataToCookie(fieldName, Value, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 1, 'seconds').toDate();
    let options = {'expires' : expiresDate,  'path' : '/', 'secure' : secureCookie };

    cookie.set(fieldName, Value, options);
  },

  getDataFromCookie(name) {
    return cookie.get(name);
  },

  removeDataFromCookie(name) {
    let options = {'secure' : secureCookie };
    cookie.remove(name, options);
  },

  getSessionCookie() {
    return cookie.get(this.oauthToken);
  },

  getApplicationAccessToken() {
    return cookie.get(this.oauthApplicationAccessToken);
  },

  setApplicationAccessToken(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 1, 'seconds').toDate();
    let options = {'expires' : expiresDate,  'path' : '/',  'secure' : secureCookie };

    cookie.set(this.oauthApplicationAccessToken, token, options);
  },

};
