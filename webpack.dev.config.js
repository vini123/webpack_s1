const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

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
                    use: [{loader: 'css-loader', options: {modules: false}}, {loader: 'less-loader'}, {loader: 'postcss-loader'}],
                }),
            },
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader: 'babel-loader',
                    // babel配置，单独写在 .babelrc 文件中了。
                    // 配置使用了 es2015以及 react，这样，可以使用es6语法和jsx
                    // options:{
                    //     presets:['es2015', 'react']
                    // }
                },
                exclude: /node_modules/
            }
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

        new webpack.BannerPlugin('欢迎翻版，翻版必究'),

        // 压缩js
        new webpack.optimize.UglifyJsPlugin()
    ],
}

module.exports = config