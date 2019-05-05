/**
 * Sorting SCSS Properties
 * @description Sorting CSS/SCSS properties in .scss files
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import sorting from 'postcss-sorting';

const $ = gulpLoadPlugins();

const sortingScssTask = (cb) => {
  gulp
    .src(meow.src.style + 'app/__modules/*.scss')
    .pipe(
      $.postcss([
        sorting({
          // eslint-disable-next-line prettier/prettier
          order: [
            'custom-properties',
            'dollar-variables',
            {
              type: 'at-rule',
              name: 'extend',
              hasBlock: false,
            },
            {
              type: 'at-rule',
              name: 'include',
              hasBlock: false,
            },
            'declarations',
            'rules',
            {
              type: 'at-rule',
              name: 'include',
              hasBlock: true,
            },
            {
              type: 'at-rule',
              name: 'media',
              hasBlock: true,
            },
            'at-rules',
          ],

          'properties-order': [
            // classification
            'content',
            'display',
            'clear',
            'float',
            'isolation',
            'visibility',
            // positioning
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'flex',
            'flex-wrap',
            'flex-direction',
            'justify-content',
            'align-content',
            'align-items',
            'align-self',
            'grid',
            'offset',
            'order',
            'overflow',
            'text-overflow',
            'clip',
            'vertical-align',
            // dimensions
            'block-size',
            'box-sizing',
            'size',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'inline-size',
            'object',
            // margins
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            // padding
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            // border
            'border',
            'border-color',
            'border-style',
            'border-width',
            // list
            'list-style',
            'marker-offset',
            // tables
            'border-collapse',
            'border-spacing',
            'caption-side',
            'empty-cells',
            'speak-header',
            'table-layout',
            // color
            'opacity',
            'background',
            'box-decoration-break',
            'box-shadow',
            'color',
            'filter',
            'layer',
            'mask',
            'mix-blend-mode',
            // font
            'font',
            'font-family',
            'font-size',
            'line-height',
            'font-weight',
            'font-style',
            // text
            'break',
            'column',
            'columns',
            'hyphens',
            'letter-spacing',
            'tab-size',
            'text',
            'white-space',
            'word-spacing',
            'word-wrap',
            // outline
            'outline',
            // transform
            'transform',
            'backface-visibility',
            'perspective',
            // animation
            'animation',
            'transition',
            'will-change',
            // dynamic
            'accelerator',
            'behavior',
            'caret-color',
            'cursor',
            'pointer-events',
            'resize',
            'touch-action',
            'zoom',
            // generated
            'counter',
            'fallback',
            'include',
            'quotes',
            // international
            'direction',
            'ime-mode',
            'layout',
            'line-break',
            'ruby',
            'spacing',
            'text-autospace',
            'text-justify',
            'text-kashida-space',
            'unicode-bidi',
            'word-break',
            'writing-mode',
            // print
            'marks',
            'orphans',
            'page-break',
            'page',
            'widows',
            // aural
            'azimut',
            'cue',
            'elevation',
            'pause',
            'pitch-range',
            'play-during',
            'richness',
            'speak',
            'speech',
            'stress',
            'voice-family',
            'volume',
            // scrollbar
            'scrollbar',
          ],
        }),
      ])
    )
    .pipe(gulp.dest(meow.src.style + 'app/__modules/'));
  cb();
};

export default sortingScssTask;
