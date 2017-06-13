const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
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
        contentBase: "./views",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("local")
            }
        })
    ]
};
