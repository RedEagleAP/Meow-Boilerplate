/**
 * Combined Image Minify Function
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';
import jpegCompress from 'imagemin-jpeg-recompress';

const $ = gulpLoadPlugins();

const minifyImages = (srcfiles, distfiles) => {
  gulp
    .src([
      '!' + srcfiles + 'system/**',
      srcfiles + '/**',
      '!' + srcfiles + meow.src.images.vectorSprite.symbolName,
    ])
    .pipe(
      $.imagemin([
        $.imagemin.gifsicle({ interlaced: meow.minify.images.interlaced }),
        $.imagemin.jpegtran({ progressive: meow.minify.images.progressive }),
        $.imagemin.optipng({
          optimizationLevel: meow.minify.images.optimizationLevel,
        }),
        $.imagemin.svgo({
          plugins: meow.minify.images.svgoPlugins,
        }),
      ])
    )
    .pipe(gulp.dest(distfiles));
};

module.exports = minifyImages;
