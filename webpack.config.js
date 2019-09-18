const glob = require('glob-all');
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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

const plugins = [
  new FaviconsWebpackPlugin({
    logo: './static/logo/blue_1024.png',
    prefix: 'favicons/[hash]/',
    favicons: {
      icons: {
        android: false,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }),
  new webpack.DefinePlugin({
    'BASE_URI': dev ? '"http://localhost:8080"' : '"https://elasticvue.com"'
  }),
  HtmlWebpackHelper('index.html'),
  HtmlWebpackHelper('privacy.html'),
  HtmlWebpackHelper('imprint.html'),
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
  new CopyPlugin([
    { from: 'src/manifest.json', to: 'manifest.json' },
    { from: 'static/logo/manifest', to: 'static/logo/manifest' }
  ])
]

const prodPlugins = plugins.concat([
  HtmlWebpackCriticalCssHelper('index.html'),
  HtmlWebpackCriticalCssHelper('privacy.html'),
  HtmlWebpackCriticalCssHelper('imprint.html'),
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  })
])

module.exports = {
  output: {
    filename: dev ? '[name].js' : 'js/[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
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
  plugins: dev ? plugins : prodPlugins
}
