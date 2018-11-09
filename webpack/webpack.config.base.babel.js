/**
 * Webpack Config for Javascript Bundling
 *
 * @package  Meow boilerplate
 * @author   Alexander Prisyazhnyk <insightinyourmind@gmail.com>
 */
import path from 'path'
import webpack from 'webpack'
import WebpackBar from 'webpackbar'
import Stylish from 'webpack-stylish'

import CleanWebpackPlugin from 'clean-webpack-plugin'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'

const utils = require('./utils')

const nodeEnv = process.env.NODE_ENV || 'production'

const { ifProduction, ifDevelopment } = utils.getIfUtils(nodeEnv)

/*
 |--------------------------------------------------------------------------
 | Let the config begin
 |--------------------------------------------------------------------------
 */
export default {
  entry: utils.removeEmpty(utils.entryPoints),
  output: {
    pathinfo: ifDevelopment(true, false),
    path: utils.paths.PUBLIC_PATH,
  },
  stats: 'none',
  resolve: {
    extensions: ['.js'],
    modules: [utils.resolve(utils.kittnConf.src.base), utils.resolve('node_modules')],
    alias: {
      src: utils.resolve(utils.kittnConf.src.base),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        options: {
          configFile: ifProduction('./.eslintrc.js', './.eslintrc-dev.js'),
          formatter: require('eslint-friendly-formatter'),
        },
        exclude: /node_modules/,
        include: utils.resolve(utils.kittnConf.src.base),
      },
      {
        test: /\.js$/,
        include: utils.resolve(utils.kittnConf.src.base),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: utils.removeEmpty([
    new webpack.NamedModulesPlugin(),
    new WebpackBar(),
    new Stylish(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.kittnConf.src.structure + 'index.html',
      inject: true,
      hash: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
      chunksSortMode: 'dependency',
    }),
  ]),
}
