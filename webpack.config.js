const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

let config = {
    entry: {
        home: __dirname + '/src/style/js/home.js',
        show: __dirname + '/src/style/js/show.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './style/js/[name]-[hash].bundle.js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader: 'css-loader'}, {loader: 'less-loader'}],
                }),
            },
        ],
    },
    plugins: [
        new CleanPlugin(['dist']),

        new HtmlPlugin({
            filename: 'home.html',
            template: './src/index.html',
            chunks: ['home'],
        }),

        new HtmlPlugin({
            filename: 'show.html',
            template: './src/index.html',
            chunks: ['show'],
        }),

        new ExtractTextPlugin('style/css/main.css'),
    ],
}

module.exports = config