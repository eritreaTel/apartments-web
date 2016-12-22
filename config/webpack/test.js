const DefinePlugin = require('webpack/lib/DefinePlugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: null,
  externals: null,
  module: {
    loaders: [
      {test: /config\.js$/, loader: path.join(__dirname, '..', 'config_loader')},
      {test: /\.json$/, loader: "json"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel?sourceMaps=true'}
    ]
  },
  output: {
    filename: 'spec.js'
  },
  plugins: [
    new NoErrorsPlugin(),
    new DefinePlugin({ANIMATIONS_DISABLED: true})
  ],
  quiet: true,
  watch: true
};
