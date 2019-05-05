/**
 * Copy Fonts
 * @description Copy the Font Fils to distribution
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

function copyFontsTask(cb) {
  meow.files.fonts.forEach(function(item) {
    return gulp
      .src(item)
      .pipe(
        global.checkChanged === true ? $.changed(meow.dist.fonts) : gutil.noop()
      )
      .pipe(gulp.dest(meow.dist.fonts));
  });
  cb();
}

export default copyFontsTask;
