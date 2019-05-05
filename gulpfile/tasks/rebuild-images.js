/**
 * Rebuild all Images
 * Copy to distribution, build Sprites
 */

import gulp from 'gulp';
import copyBitmapsTask from './copy-bitmaps';
import copyVectorsTask from './copy-vectors';
import buildBitmapSpriteTask from './build-bitmapsprite';
import buildVectorSpriteTask from './build-vectorsprite';
import buildSymbolCleanupTask from './build-symbolCleanup';

const rebuildImagesTask = gulp.series(
  gulp.parallel(
    copyBitmapsTask,
    copyVectorsTask,
    buildBitmapSpriteTask,
    buildVectorSpriteTask
  ),
  buildSymbolCleanupTask
);

export default rebuildImagesTask;
