/**
 * CSS Compiler Task
 * watch the working dirs - activates the compilers and refresh the browser
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import errorHandler from '../lib/errorHandler';
import yargs from 'yargs';
import ansiHTML from 'ansi-html';
import api from 'stylelint';

const args = yargs.argv;
const $ = gulpLoadPlugins();

const compilerCssTask = (cb) => {
  const env = args.env || 'development';

  gulp
    .src([meow.src.style + '**/*.scss', meow.src.style + '**/*.sass'])
    .pipe(env === 'development' ? $.sourcemaps.init() : gutil.noop())
    .pipe(
      env === 'development'
        ? $.stylelint({
            syntax: 'scss',
            failAfterError: false,
            reporters: [
              { formatter: 'string', console: true },
              {
                formatter(results) {
                  if (!api.formatters.string(results).length) return;
                  const warning = `
                    <div class="bs-fullscreen"
                      style="position: fixed;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      background: rgba(0,0,0,.85);
                      height: 40vh;
                      max-height: 300px;
                      overflow-y: scroll;
                      color: #e8e8e8;
                      text-align: left;
                      white-space: pre;
                      font-family: Roboto, Consolas, monospace;
                      font-size: 13px;
                      padding: 10px;
                      line-height: 1.2;">
                      ${ansiHTML(api.formatters.string(results))}
                    </div>`;
                  browserSync.notify(warning, 50000);
                },
              },
            ],
          })
        : gutil.noop()
    )
    .pipe($.sass({}).on('error', errorHandler))
    .pipe($.postcss(meow))
    .pipe(
      env === 'development'
        ? $.size({
            title: '>>> CSS File Size: ',
          })
        : gutil.noop()
    )
    .pipe(env === 'development' ? $.sourcemaps.write('.') : gutil.noop())
    .pipe(gulp.dest(meow.dist.css));
  cb();
};

export default compilerCssTask;
