require('isomorphic-fetch');
const _ = require('lodash');
const config = require('../../config/config');
const {post} = require('superagent');
const DebugHelper = require('../helpers/debug_helper');
const CookiesHelper = require('../helpers/cookies_helper');

const {loginHost, baseURI, version} = config;

function checkStatus(response) {
    if (response.status >= 200 && response.status < 400) return response;
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function setOAuthEndpointOptions(path, options) {
    options.url = `${loginHost}/${path}`;
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (typeof options.body === 'object') {
        options.body = _.map(options.body, (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
    }
}

function setRESTEndpointOptions(path, options) {
    options.url = `${loginHost}${baseURI}${version}/${path}`;
    options.headers['Content-Type'] = 'application/json';
    if (typeof options.body === 'object') {
        options.body = JSON.stringify(options.body);
    }
}

module.exports = {
    fetchJson(path, {headers = {}, ...options} = {}) {
        headers.accept = 'application/json';
        if (options.isBytes) headers.accept += ', application/pdf';
        headers['gh-ui'] = true;

        const oauthToken = CookiesHelper.getSessionCookie();
        if (oauthToken) headers.authorization = `Bearer ${oauthToken}`;

        const impersonatedUserId = CookiesHelper.getImpersonateCookie();
        if (impersonatedUserId) headers.impersonate = impersonatedUserId;

        options = {
            credentials: 'include', redirect: 'follow', mode: 'cors', cache: 'default',
            headers: headers,
            ...options
        };
        if (path.startsWith('oauth')) {
            setOAuthEndpointOptions(path, options);
        } else {
            setRESTEndpointOptions(path, options);
        }
        let fetchPromise = fetch(options.url, options)
            .then(response => {
                const {status, statusText} = response;
                DebugHelper.log({
                    url: options.url,
                    method: options.method,
                    requestBody: options.body,
                    status,
                    statusText
                });
                return response;
            })
            .then(checkStatus);


        if (options.isBytes) {
            fetchPromise = fetchPromise
                .then(response => [204, 304].includes(response.status) ? '{}' : response.blob());
        } else {
            fetchPromise = fetchPromise
                .then(response => [204, 304].includes(response.status) ? '{}' : response.text())
                .then(JSON.parse);
        }
        
        return fetchPromise;
    },

    uploadFile({path, uploadFile, headers = {}, onUploadProgress = null, onUploadError = null, onUploadEnd = null, ...options} = {}) {

        headers['gh-ui'] = true;

        const oauthToken = CookiesHelper.getSessionCookie();
        if (oauthToken) headers.authorization = `Bearer ${oauthToken}`;
        options = {
            credentials: 'include', redirect: 'follow', mode: 'cors', cache: 'default',
            headers: headers,
            ...options
        };

        options.body = uploadFile;
        setRESTEndpointOptions(path, options);

        let uploadPromise = post(options.url)
            .accept('application/json')
            .set(headers)
            .send(options.body)
            .on('progress', ({ percent }) => {
                if (typeof onUploadProgress === 'function') {
                    onUploadProgress({percent});
                }
            }).end((error, res) => {
                if (error) {
                    if (typeof onUploadError === 'function') {
                        onUploadError({error, res});
                    }
                    return;
                }

                if (typeof onUploadEnd === 'function') {
                    onUploadEnd({res, success: true });
                }
            });

        return uploadPromise;

    }
};
