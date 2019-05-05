/**
 * Combine JS
 * @description Combine Scripts from Browser to script.js
 * Added as Alternative to Browserify
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

function combineJsTask() {
  return gulp
    .src(meow.files.jsCombine.files)
    .pipe($.concat(meow.files.jsCombine.filename))
    .pipe(gulp.dest(meow.dist.js));
}

export default combineJsTask;
