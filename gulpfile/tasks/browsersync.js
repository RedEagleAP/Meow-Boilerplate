/**
 * Browser Sync
 * @description Refresh the Browser after File Change.
 */

import meow from '../../config.json';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackSettings from '../../webpack/webpack.dev.babel';

const bundler = webpack(webpackSettings);

const browserSyncTask = () => {
  // Build a condition when Proxy is active
  let bsProxy;
  let bsServer;

  // Condition for Proxy
  if (meow.browsersync.proxy) {
    bsProxy = {
      target: meow.browsersync.proxy,
      ws: true,
    };
    bsServer = false;
  } else {
    bsProxy = false;
    bsServer = { baseDir: meow.dist.browserSyncDir };
  }

  // Browser Sync
  browserSync.init({
    debugInfo: true,
    watchTask: true,
    proxy: bsProxy,
    middleware: [
      webpackDevMiddleware(bundler, {
        quiet: true,
        logLevel: 'warn',
        publicPath: webpackSettings.output.publicPath,
        stats: { colors: true },
      }),
      webpackHotMiddleware(bundler, {
        log: () => {},
      }),
    ],

    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true,
    },

    logLevel: 'info',

    notify: {
      styles: [
        'padding: 8px 16px;',
        'position: fixed;',
        'font-size: 12px;',
        'font-weight: bold',
        'z-index: 9999;',
        'top: inherit',
        'border-radius: 0',
        'right: 0;',
        'bottom: 0;',
        'color: #f4f8f9;',
        'background-color: #026277;',
        'text-transform: uppercase',
      ],
    },

    server: bsServer,
    https: meow.browsersync.https,
    open: meow.browsersync.openbrowser,
    files: [
      `${meow.dist.js}**/*.js`,
      `${meow.dist.css}**/*.css`,
      `${meow.dist.base}**/*.{php,html}`,
      `${meow.dist.cssimg}**/*.{jpg,gif,png,svg}`,
    ],
  });
};

gulp.task('browser-sync', browserSyncTask);
module.exports = browserSyncTask;
