const join = require('url-join');

module.exports = {
  assetPath(asset) {
    const {assetHost, assetPort, bucketInfo} = require('../../config/config');
    if (assetHost) return `${join(...[[assetHost, assetPort].filter(Boolean).join(':'), bucketInfo, asset])}`;
    return `/${asset}`;
  }
};
