/**
 * Build Bitmap Sprite
 * @description Build the Bitmap Sprite File and the SCSS Map
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const buildBitmapSpriteTaks = () => {
  gulp
    .src(meow.src.images.bitmapSprite.files + '**/*.png')
    .pipe(
      $.if(
        '*.png',
        $.spritesmith({
          imgName: meow.src.images.bitmapSprite.name,
          cssName: '_sprite-bitmap.scss',
          imgPath: meow.dist.cssimgRoot + meow.src.images.bitmapSprite.name,
          cssTemplate: meow.src.system + 'tpl_bitmapsprite.scss',
        })
      )
    )
    .pipe(
      $.if(
        '*.png',
        gulp.dest(meow.dist.cssimg),
        gulp.dest(meow.src.style + 'maps/')
      )
    );
};

gulp.task('build:bitmapSprite', buildBitmapSpriteTaks);
module.exports = buildBitmapSpriteTaks;
