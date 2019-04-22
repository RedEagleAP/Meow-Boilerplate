/**
 * Lazy Loading
 */
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';

const lazySizeInit = () => {
  document.addEventListener('lazyloaded', (e) => {
    const target = e.target.parentNode;
    if (target) {
      target.style.backgroundColor = 'transparent';
    }
  });

  // Lasysizes Lazyload Config
  const lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig = lazySizesConfig;
  window.lazySizesConfig.expand = 500; // default 360-500
  lazySizesConfig.expFactor = 1.7; // default: 1.7

  // Lazy Sizes Init
  lazySizes.init();
};

export default lazySizeInit;
