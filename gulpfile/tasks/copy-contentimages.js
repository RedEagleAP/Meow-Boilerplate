/**
 * Contentimages
 * @description Copy and Compress all Images
 * Inline Images (SVG, PNG, JPG, GIF)
 */

import meow from '../../config.json';
import gulp from 'gulp';
import copyImages from '../lib/copyImages';

function copyContentimagesTask(cb) {
  // Call the Function
  copyImages(meow.src.contentimage, meow.dist.contentimage);
  cb();
}

export default copyContentimagesTask;
