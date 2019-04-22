/**
 * Scripts
 */

import bodyClass from '../scripts/bodyclass';
import disableHover from '../scripts/disableHover';
import resizeClass from '../scripts/resizeClass';
// import '../scripts/lazysize-init';
// import '../scripts/fontfaceobserver';
// import '../scripts/pagetransition';
// import '../scripts/smoothScroll';
// import '../scripts/waypoints.anime';

// Modules Array
const scriptsArray = [bodyClass, disableHover, resizeClass];

const scripts = {
  // Scripts
  Scripts() {
    if (scriptsArray.length > 0 && scriptsArray !== undefined) {
      scriptsArray.forEach((script) => {
        script.init();
      });
    }
  },

  init() {
    this.Scripts();
  },
};

export default scripts;
