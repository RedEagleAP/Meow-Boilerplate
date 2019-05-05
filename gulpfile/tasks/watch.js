/**
 * The Watch Tasks for SASS,
 * PUG or Twig, JS and activate BrowserSync
 */

import meow from '../../config.json';
import gulp from 'gulp';
import watch from 'gulp-watch';
import path from 'path';
import templateFiles from '../lib/templateFiles';
import compilerCssTask from './compile-css';
import compilerHtmlTask from './compile-html';

function watchTask(cb) {
  // Watch the SCSS Folder for changes - compile CSS
  gulp.watch(
    [meow.src.style + '**/**/*.scss', meow.src.style + '**/**/*.sass'],
    { interval: 500 },
    gulp.series(compilerCssTask)
  );

  // Watch the Structure
  gulp.watch(
    [templateFiles()],
    { interval: 500 },
    gulp.series(compilerHtmlTask)
  );

  cb();
}

export default watchTask;
