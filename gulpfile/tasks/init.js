/**
 * Starting Task for the first Build off the Project Structure
 */

import gulp from 'gulp';
import sassdocGenerateTask from './sassdoc-generate';
import copyLaunchTask from './copy-launch';
import copyFontsTask from './copy-fonts';
import rebuildJsTask from './rebuild-js';
import rebuildImagesTask from './rebuild-images';
import copyContentimagesTask from './copy-contentimages';
import compilerCssTask from './compile-css';
import compilerHtmlTask from './compile-html';

const initTask = gulp.series(
  (cb) => {
    // Overwrite the Changed Check
    global.checkChanged = false;
    cb();
  },
  sassdocGenerateTask,
  gulp.parallel(
    copyLaunchTask,
    copyFontsTask,
    rebuildJsTask,
    rebuildImagesTask,
    copyContentimagesTask
  ),
  gulp.parallel(compilerCssTask, compilerHtmlTask)
);

export default initTask;
