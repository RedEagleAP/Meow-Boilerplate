/**
 * Contentimages
 * @description Copy and Compress all Images
 * Inline Images (SVG, PNG, JPG, GIF)
 */

import meow from '../../config.json';
import gulp from 'gulp';
import copyImages from '../lib/copyImages';

const copyContentimagesTask = () => {
  // Call the Function
  copyImages(meow.src.contentimage, meow.dist.contentimage);
};

gulp.task('copy:contentimages', copyContentimagesTask);
module.exports = copyContentimagesTask;
