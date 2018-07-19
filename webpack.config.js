const glob = require('glob-all');
const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

const dev = process.env.NODE_ENV !== 'production'


const HtmlWebpackHelper = function (filename) {
    return new HtmlWebpackPlugin({
        template: './src/' + filename,
        filename: filename
    })
}

const HtmlWebpackCriticalCssHelper = function (filename) {
    return new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, 'dist'),
        src: filename,
        dest: filename,
        inline: true,
        minify: true,
        extract: true,
        width: 1920,
        height: 1080,
        penthouse: {
            blockJSRequests: false,
        }
    })
}

module.exports = {
    output: {
        filename: dev ? '[name].js' : 'js/[name].[chunkhash].js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/'
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true,
                        interpolate: true
                    }
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'BASE_URI': dev ? '"http://localhost:8080"' : '"https://elasticvue.com"'
        }),
        HtmlWebpackHelper('index.html'),
        HtmlWebpackHelper('legals.html'),
        HtmlWebpackHelper('privacy.html'),
        new MiniCssExtractPlugin({
            filename: dev ? '[name].css' : 'css/style.[hash].css',
            chunkFilename: dev ? '[id].css' : 'css/[id].[hash].css',
        }),
        new PurifyCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, 'src/index.js'),
                path.join(__dirname, 'src/*.html'),
                path.join(__dirname, 'src/components/*.html'),
                path.join(__dirname, 'src/assets/scripts/*.js'),
            ]),
            minimize: true
        }),
        HtmlWebpackCriticalCssHelper('index.html'),
        HtmlWebpackCriticalCssHelper('legals.html'),
        HtmlWebpackCriticalCssHelper('privacy.html')
    ]
}
