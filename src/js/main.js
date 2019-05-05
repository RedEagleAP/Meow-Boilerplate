// Main JS File
// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'svgxuse';

// Import Partials
import './lib/bling';
import './scripts/bowser';
import scripts from './partial/allscripts';

const app = {
  init() {
    scripts.init();
  },
};

// Init App!
app.init();
