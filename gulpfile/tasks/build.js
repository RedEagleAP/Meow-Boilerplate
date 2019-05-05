/**
 * Automatic Deploy
 *
 * @description: Deploy Task for an automated Build Process
 */

import gulp from 'gulp';
import versionBump from './version-bump';
import copyLaunchTask from './copy-launch';
import copyFontsTask from './copy-fonts';
import rebuildJsTask from './rebuild-js';
import rebuildImagesTask from './rebuild-images';
import copyContentimagesTask from './copy-contentimages';
import compilerCssTask from './compile-css';
import compilerHtmlTask from './compile-html';
import criticalCss from './optimize-criticalCss';
import minifyJsTask from './minify-js';
import minifyContentimagesTask from './minify-contentimages';
import minifyInlineimagesTask from './minify-inlineimages';
import minifyCssTask from './minify-css';

const buildTask = gulp.series(
  (cb) => {
    // Overwrite the Changed Check
    global.checkChanged = true;
    cb();
  },
  versionBump,
  gulp.parallel(
    copyLaunchTask,
    copyFontsTask,
    rebuildJsTask,
    rebuildImagesTask,
    copyContentimagesTask
  ),
  gulp.parallel(compilerCssTask, compilerHtmlTask),
  criticalCss,
  gulp.parallel(
    minifyJsTask,
    minifyContentimagesTask,
    minifyInlineimagesTask,
    minifyCssTask
  )
);

export default buildTask;
