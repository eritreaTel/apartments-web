const cookie = require('cookie');
const moment = require('moment');
const {cookieDomain} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',

  deleteSessionCookie() {
    this.setCookie(`${this.oauthToken}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${cookieDomain}`);
  },

  setSessionCookie(token, expiresInSeconds) {
    console.log('setting sessions token' + token);
    console.log('setting sessions expires' + expiresInSeconds);
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    this.setCookie(`${this.oauthToken}=${token}; expires=${expiresDate}; path=/; domain=${cookieDomain};`);

    console.log(document.cookie);

  },

  getSessionCookie() {
    return cookie.parse(this.getCookie())[this.oauthToken];
  },
  
  setCookie(newCookie) {
    console.log('new cookie');

    console.log(newCookie);
    document.cookie = newCookie;
    console.log(document.cookie)
  },

  getCookie() {
    return document.cookie;
  }
};
