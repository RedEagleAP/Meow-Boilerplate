/**
 * The Watch Tasks for SASS,
 * PUG or Twig, JS and activate BrowserSync
 */

import meow from '../../config.json';
import gulp from 'gulp';
import watch from 'gulp-watch';
import templateFiles from '../lib/templateFiles';
import path from 'path';

const watchTask = () => {
  // Watch the SCSS Folder for changes - compile CSS
  gulp.watch(
    [meow.src.style + '**/**/*.scss', meow.src.style + '**/**/*.sass'],
    { interval: 500 },
    [['compiler:css']]
  );

  // Watch the Structure
  gulp.watch([templateFiles()], { interval: 500 }, ['compiler:html']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
