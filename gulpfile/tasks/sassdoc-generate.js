/**
 * Build the CSS Framework Documentation
 */

import gulp from 'gulp';
import sassdoc from 'sassdoc';

function sassdocGenerateTask() {
  return gulp.src('src/framework/**/*.scss').pipe(
    sassdoc({
      dest: 'doc/sassdoc',
    })
  );
}

export default sassdocGenerateTask;
