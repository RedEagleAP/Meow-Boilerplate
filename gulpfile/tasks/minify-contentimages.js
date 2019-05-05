/**
 * Minify Content Images
 * @description Compress all Images in distribution
 * Inline Images (SVG, PNG, JPG, GIF)
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import minifyImages from '../lib/minifyImage';

const $ = gulpLoadPlugins();

function minifyContentimagesTask(cb) {
  // Call the Function
  minifyImages(meow.dist.contentimage, meow.dist.contentimage);
  cb();
}

export default minifyContentimagesTask;
