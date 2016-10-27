const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    application: ['./app/components/application.js', 'webpack/hot/only-dev-server']
  },
  externals: null,
  module: {
    // loaders is inherited from ../webpack.config.js
    // if you need different loaders, please note that the entire loaders array must be replaced
    loaders: [
      {test: /config\.js$/, loader: path.join(__dirname, '..', 'config_loader')},
      {test: /\.json$/, loader: "json"},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: __dirname,
    pathinfo: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoErrorsPlugin(),
    new DefinePlugin({DEBUG: true})
  ],
  watch: true
};
