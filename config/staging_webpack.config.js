const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    devtool : 'cheap-module-source-map',
    bail: false,
    entry: {
      application: './app/components/application.js'
    },
    module: {
      // if you need different loaders (in a specific config file in webpack*.js),
      // please note that the entire loaders array must be replaced
      loaders: [
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.(ttf|eot|svg|png|gif|woff(2)?)(\S+)?$/,
          loader: 'file-loader?publicPath=/&name=fonts/[name].[ext]'
        },
        {
            test: /config\.js$/,
            loader: path.join(__dirname, 'config_loader')
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        },
        {   test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
      ]
    },
    port: 8000,
    output: {
      path: "public",
      filename: '[name].js',
      chunkFilename: '[id].js',
      pathinfo: true
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("staging")
            }
        }),
        new NoErrorsPlugin(),
        new UglifyJsPlugin({
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true,
                sequences: true,
                booleans: true
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
