/**
 * Template Compiler
 *
 * @description Compile Twig Files to HTML or copy Structure Files (usefull for PHP or Source Files for a CMS Compiler.
 */

import meow from '../../config.json';
import pkg from '../../package.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';
import errorHandler from '../lib/errorHandler';
import yargs from 'yargs';

const args = yargs.argv;
const $ = gulpLoadPlugins();

const compilerHtmlTask = () => {
  const siteEnv = args.env || 'development';

  // Set Base Locals
  const templateLocals = {
    siteTitle: meow.template.globalTitle,
    cssName: pkg.cssFileName,
    assetsCss: meow.templatePath.css,
    assetsImg: meow.templatePath.contentimage,
    assetsJs: meow.templatePath.js,
    assetsCssImg: meow.templatePath.cssimage,
    environment: siteEnv,
  };

  // Twig Compiler
  if (meow.template.compiler) {
    // TWIG Compiler
    return gulp
      .src(meow.src.template + '**/[^_]*.{html,twig,pug,rss}')
      .pipe(
        global.checkChanged === true
          ? $.changed(meow.dist.markup, {
              extension: '.{html,twig,pug,rss}',
            })
          : gutil.noop()
      )
      .pipe($.plumber())
      .pipe($.twig({ data: templateLocals }))
      .on('error', errorHandler)
      .pipe(
        $.htmlPrettify({
          indent_char: ' ',
          indent_size: 2,
        })
      )
      .pipe(gulp.dest(meow.dist.markup));
  } else {
    // Simple Copy Files
    gulp
      .src([meow.src.structure + '**/**', meow.src.structure + '**/.*'])
      .pipe(
        global.checkChanged === true
          ? $.changed(meow.dist.markup)
          : gutil.noop()
      )
      .pipe(gulp.dest(meow.dist.markup));
  }
};

gulp.task('compiler:html', compilerHtmlTask);
module.exports = compilerHtmlTask;
