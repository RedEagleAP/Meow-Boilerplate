/**
 * Default gulp Task 'gulp'
 * watch the working dirs - activates the compilers and refresh the browser
 */
import gulp from 'gulp';
import watchTask from './watch';
import browserSyncTask from './browsersync';

const defaultTask = gulp.series((cb) => {
  // Overwrite the Changed Check
  global.checkChanged = true;
  cb();
}, gulp.parallel(watchTask, browserSyncTask));

export default defaultTask;
