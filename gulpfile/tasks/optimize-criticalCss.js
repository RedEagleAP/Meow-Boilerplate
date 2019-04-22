/**
 * Critical CSS
 * @description Generate Inline CSS for the Above the fold optimization
 */

import meow from '../../config.json';
import gulp from 'gulp';
import critical from 'critical';

const criticalCss = () => {
  meow.cssabove.sources.forEach(function(item) {
    return critical.generate({
      inline: meow.cssabove.inline,
      base: meow.dist.markup,
      src: item,
      dest: meow.templatePath.css + meow.cssabove.destFilename,
      minify: meow.cssabove.minify,
      width: meow.cssabove.width,
      height: meow.cssabove.height,
    });
  });
};

gulp.task('optimize:criticalCss', criticalCss);
module.exports = criticalCss;
