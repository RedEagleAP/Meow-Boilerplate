/**
 * Build SVG Sprite File
 * @description Build an SVG Vector Sprite and a Map file
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import svgo from 'imagemin-svgo';

const $ = gulpLoadPlugins();

const buildVectorSpriteTask = () => {
  return gulp
    .src(meow.src.images.vectorSprite.files + '**/*.svg')
    .pipe(
      $.imagemin([
        $.imagemin.svgo({
          plugins: meow.minify.images.svgoPlugins,
        }),
      ])
    )
    .pipe(
      $.svgSprite({
        shape: {
          dimension: {
            // Set maximum dimensions
            maxWidth: meow.src.images.vectorSprite.maxWidth,
            maxHeight: meow.src.images.vectorSprite.maxHeight,
          },
          spacing: {
            // Add padding
            padding: meow.src.images.vectorSprite.padding,
          },
          dest: meow.dist.vectors,
        },
        mode: {
          view: {
            // Activate the «view» mode
            sprite: meow.dist.cssimg + meow.src.images.vectorSprite.name,
            dest: '.',
            bust: false,
            prefix: '%%svg',
            render: {
              scss: {
                template: meow.src.system + 'tpl_svgsprite.scss',
                dest: meow.src.style + 'maps/_sprite-svg.scss',
              },
            },
          },
          symbol: {
            sprite: meow.src.images.vectorSprite.symbolName,
            dest: meow.dist.cssimg,
          },
        },
      })
    )
    .pipe(gulp.dest('./'));
};

gulp.task('build:vectorSprite', buildVectorSpriteTask);
module.exports = buildVectorSpriteTask;
