import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const merge = require('webpack-merge');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.config.base.babel.js');

/*
 |--------------------------------------------------------------------------
 | Merge the configs
 |--------------------------------------------------------------------------
 */
const prodWebpackConfig = merge(baseWebpackConfig.default, {
  devtool: '',
  output: {
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/chunks/[name].[hash].js'),
    publicPath: './',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: `${utils.paths.ROOT_PATH}/webpack/stats.json`,
      logLevel: 'info',
    }),
  ],
});

module.exports = prodWebpackConfig;
