const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
    output: {
        filename: dev ? '[name].js' : '[name].[chunkhash].js'
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
                use: ["file-loader"]
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/legals.html',
            filename: 'legals.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy.html',
            filename: 'privacy.html'
        }),
        new MiniCssExtractPlugin({
            filename: dev ? '[name].css' : 'style.[hash].css',
            chunkFilename: dev ? '[id].css' : '[id].[hash].css',
        }),
        new CompressionPlugin({
            test: /\.(js|css)/
        })
    ]
}
