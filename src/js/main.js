// Main JS File
// Polyfills
import 'svgxuse';
import '@babel/polyfill';

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
