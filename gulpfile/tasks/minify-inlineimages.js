/**
 * Minify Inline Images
 * @description Compress all Images in distribution
 * Inline Images (SVG, PNG, JPG, GIF)
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import minifyImages from '../lib/minifyImage';

const $ = gulpLoadPlugins();

const minifyInlineimagesTask = () => {
  minifyImages(meow.dist.cssimg, meow.dist.cssimg);
};

gulp.task('minify:inlineimages', minifyInlineimagesTask);
module.exports = minifyInlineimagesTask;
