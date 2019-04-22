/**
 * Minify Javascript
 * @description Compress all Javascript Files in the dist folder
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const minifyJsTask = () => {
  return gulp
    .src(meow.dist.js + '*.js')
    .pipe($.uglify(meow.minify.javascript.options))
    .pipe(gulp.dest(meow.dist.js));
};

gulp.task('minify:js', minifyJsTask);
module.exports = minifyJsTask;
