/**
 * Minify CSS Files
 * @description Compress CSS Files in distribution
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const minifyCssTask = () => {
  return gulp
    .src(meow.dist.css + '*.css')
    .pipe($.postcss())
    .pipe(
      $.size({
        title: '>>> CSS File Size: ',
      })
    )
    .pipe(gulp.dest(meow.dist.css));
};

gulp.task('minify:css', minifyCssTask);
module.exports = minifyCssTask;
