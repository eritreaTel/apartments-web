const cookie = require('cookie');
const moment = require('moment');
const {cookieDomain} = require('../../config/config');

module.exports = {
  oauthToken: 'oauthToken',
  p2Token: 'PHPSESSID',
  impersonateUserId: 'ghimpersonate',

  deleteSessionCookie() {
    this.setCookie(`${this.oauthToken}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${cookieDomain}`);
  },


  setSessionCookie(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    this.setCookie(`${this.oauthToken}=${token}; expires=${expiresDate}; path=/; domain=${cookieDomain};`);
  },

  setImpersonateCookie(impersonateId, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    this.setCookie(`${this.impersonateUserId}=${impersonateId}; expires=${expiresDate}; path=/; domain=${cookieDomain};`);
  },
  setP2cookie(token, expiresInSeconds) {
    const expiresDate = moment().add(Number(expiresInSeconds) + 5, 'seconds').toDate().toUTCString();
    this.setCookie(`${this.p2Token}=${token}; expires=${expiresDate}; path=/; domain=${cookieDomain};`);
  },

  deleteP2Cookie() {
    this.setCookie(`${this.p2Token}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${cookieDomain}`);
  },

  getSessionCookie() {
    return cookie.parse(this.getCookie())[this.oauthToken];
  },
  
  setCookie(newCookie) {
    document.cookie = newCookie;
  },

  getCookie() {
    return document.cookie;
  },
  getImpersonateCookie(){
    return cookie.parse(this.getCookie())[this.impersonateUserId];
  },

  deleteImpersonateCookie() {
    this.setCookie(`${this.impersonateUserId}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${cookieDomain}`);
  },
};
