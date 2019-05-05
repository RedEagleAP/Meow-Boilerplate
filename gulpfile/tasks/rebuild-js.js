/**
 * Rebuild all JS Files
 * Copy to distribution
 */

import gulp from 'gulp';
import copyJsTask from './copy-js';

const rebuildJsTask = (cb) => {
  gulp.series(copyJsTask);
  cb();
};

export default rebuildJsTask;
