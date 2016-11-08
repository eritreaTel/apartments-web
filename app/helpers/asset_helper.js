const join = require('url-join');

module.exports = {
  assetPath(asset) {
    const {assetHost, assetPort} = require('../../config/config');
    if (assetHost) return `${join(...[[assetHost, assetPort].filter(Boolean).join(':'), asset])}`;
    return `/${asset}`;
  }
};
