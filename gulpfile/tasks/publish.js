/**
 * Publish
 * @description Publish all Files in distribution
 * Add a new Versionnumber to Package and Bower
 * Compress Files
 */

import gulp from 'gulp';
import versionBump from './version-bump';
import minifyJsTask from './minify-js';
import minifyContentimagesTask from './minify-contentimages';
import minifyInlineimagesTask from './minify-inlineimages';
import minifyCssTask from './minify-css';

const publishTask = gulp.series(
  (cb) => {
    // Overwrite the Changed Check
    global.checkChanged = true;
    cb();
  },
  versionBump,
  gulp.parallel(
    minifyJsTask,
    minifyContentimagesTask,
    minifyInlineimagesTask,
    minifyCssTask
  )
);

export default publishTask;
