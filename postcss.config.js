module.exports = ({ file, options, env }) => ({
  /**
   * @Doc https://github.com/postcss/postcss-scss#readme
   */
  parser: 'postcss-scss',
  plugins: {
    /**
     * @Doc https://github.com/postcss/postcss-safe-parser#readme
     */
    'postcss-safe-parser': {},
    /**
     * @Doc https://github.com/postcss/postcss-custom-selectors#readme
     */
    'postcss-custom-selectors': {},
    /**
     * @Doc https://github.com/postcss/postcss-custom-media#readme
     */
    'postcss-custom-media': {},
    /**
     * @Doc https://github.com/jonathantneal/postcss-pseudo-class-any-link#readme
     */
    'postcss-pseudo-class-any-link': {},
    /**
     * @Doc https://github.com/postcss/postcss-custom-properties#readme
     */
    'postcss-custom-properties': {
      warnings: false,
    },
    /**
     * @Doc https://github.com/postcss/postcss-calc#readme
     */
    'postcss-calc': {},
    /**
     * @Doc https://github.com/jonathantneal/postcss-focus-within#readme
     */
    'postcss-focus-within': {},
    /**
     * @Doc https://github.com/ai/webp-in-css#readme
     */
    'webp-in-css/plugin': {},
    /**
     * @Doc https://github.com/jonathantneal/postcss-image-set-function#readme
     */
    'postcss-image-set-function': {},
    /**
     * @Doc https://github.com/postcss/postcss-selector-not#readme
     */
    'postcss-selector-not': {},
    /**
     * @Doc https://github.com/arccoza/postcss-aspect-ratio#readme
     *
     * @Usage .aspect-box { aspect-ratio: '16:9'; }
     */
    'postcss-aspect-ratio': {},
    /**
     * @Doc https://github.com/postcss/postcss-easings#readme
     *
     * @library https://easings.net/
     *
     * @custom http://cubic-bezier.com/
     */
    'postcss-easings': {},
    /**
     * @Doc https://github.com/retyui/postcss-animations#readme
     */
    'postcss-animations': {
      data: [
        require('postcss-animation.css-data'),
        require('postcss-magic.css-data'),
        require('postcss-mimic.css-data'),
        require('postcss-tuesday.css-data'),
      ],
      checkDuplications: false,
      disableCheckCssVariables: true,
    },
    /**
     * @Doc https://github.com/borodean/postcss-assets#readme
     */
    'postcss-assets': {
      basePath: './',
      loadPaths: options.dist ? [options.dist.cssimg] : [],
    },
    /**
     * @Doc https://github.com/postcss/autoprefixer#readme
     */
    autoprefixer: {
      cascade: false,
      grid: 'no-autoplace',
    },
    /**
     * @Doc https://github.com/jonathantneal/postcss-svg#readme
     */
    'postcss-svg': {},
    /**
     * @Doc https://github.com/jonathantneal/postcss-short-size#readme
     */
    'postcss-short-size': {},
    /**
     * @Doc https://github.com/luisrudge/postcss-flexbugs-fixes#readme
     *
     * @Flexbugs https://github.com/philipwalton/flexbugs#readme
     */
    'postcss-flexbugs-fixes': {},
    /**
     * @Doc https://cssnano.co/optimisations/
     */
    cssnano:
      env !== 'production'
        ? false
        : {
            discardComments: { removeAll: true },
            zindex: false,
            discardUnused: false,
            reduceIdents: false,
            mergeIdents: false,
          },
  },
});
