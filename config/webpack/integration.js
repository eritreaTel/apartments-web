const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
  devtool: 'inline-source-map',
  plugins: [
    new DefinePlugin({DEBUG: true})
  ]
};