/**
 * Copy Bitmaps
 * @description Move all Bitmap Images (from bitmapSingle-assets) to the .dist Folder
 */
import meow from '../../config.json';
import gulp from 'gulp';
import copyImages from '../lib/copyImages';

const copyBitmapsTask = () => {
  // Call the Function
  copyImages(meow.src.images.bitmaps, meow.dist.bitmaps);
};

gulp.task('copy:bitmaps', copyBitmapsTask);
module.exports = copyBitmapsTask;
