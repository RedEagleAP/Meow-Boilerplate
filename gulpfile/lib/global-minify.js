/**
 * Global Minify All Files
 */

import meow from '../../config.json';

const globalMinifyCheck = () => {
  const gminify = {
    js: false,
    css: false,
    image: false,
  };

  // Global Minifier - will be activated on the Publish Task. Only active when the regular minfier is deactivated
  if (
    meow.minify.automatic.jsFiles === false &&
    meow.minify.automatic.jsCombine === false &&
    meow.minify.automatic.jsCopy === false
  ) {
    gminify.js = true;
  } else {
    gminify.js = false;
  }

  if (meow.minify.automatic.jsFiles === false) {
    gminify.css = true;
  } else {
    gminify.css = false;
  }

  if (
    meow.minify.automatic.vector === false &&
    meow.minify.automatic.bitmaps === false &&
    meow.minify.automatic.vectorSprite === false &&
    meow.minify.automatic.bitmapSprite === false
  ) {
    gminify.image = true;
  } else {
    gminify.image = false;
  }

  return gminify;
};

module.exports = globalMinifyCheck;
