/**
 * Copy SVG Images
 * @description Move all SVG Images (from vectorSingle-assets) to the .dist Folder
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';
import svgo from 'imagemin-svgo';

const $ = gulpLoadPlugins();

const copyVectorsTask = () => {
  gulp
    .src(meow.src.images.vectors + '**/*.svg')
    .pipe(
      global.checkChanged === true ? $.changed(meow.dist.vectors) : gutil.noop()
    )
    .pipe(
      $.imagemin([
        $.imagemin.svgo({
          plugins: meow.minify.images.svgoPlugins,
        }),
      ])
    )
    .pipe(gulp.dest(meow.dist.vectors));
};

gulp.task('copy:vectors', copyVectorsTask);
module.exports = copyVectorsTask;
