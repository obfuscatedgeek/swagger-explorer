/**
 * Author: Ejaz Bawasa
 * email: bawasa.ejaz@gmail.com
 * Date: 27/05/16 on 12:51 PM
 */
import webpack from 'webpack';
import path from 'path';

export default {
    debug: true, // display debug info
    devtool: 'cheap-module-eval-source-map', //
    noInfo: false, // means will display list of files it will bundle
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', // note that it reload the page if hot module reloading fails
        './src/index' // apps actual entry point. make sure to keep it last.
    ],
    target: 'web', // can be node, and wp will bundle accordingly
    output: { // files are never created. need to setup a build process to generate the actual files
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: { // specify where the code is
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // will replace modules without full browser refresh
        new webpack.NoErrorsPlugin() // shows us proper error messages.
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
}