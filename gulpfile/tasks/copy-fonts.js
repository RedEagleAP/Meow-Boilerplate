/**
 * Copy Fonts
 * @description Copy the Font Fils to distribution
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const copyFontsTask = () => {
  meow.files.fonts.forEach(function(item) {
    gulp
      .src(item)
      .pipe(
        global.checkChanged === true ? $.changed(meow.dist.fonts) : gutil.noop()
      )
      .pipe(gulp.dest(meow.dist.fonts));
  });
};

gulp.task('copy:fonts', copyFontsTask);
module.exports = copyFontsTask;
