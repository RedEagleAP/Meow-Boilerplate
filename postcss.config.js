module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-safe-parser': {},
    'postcss-custom-selectors': {},
    'postcss-custom-media': {},
    'postcss-pseudo-class-any-link': {},
    'postcss-custom-properties': {
      warnings: false,
    },
    'postcss-calc': {},
    'postcss-aspect-ratio': {},
    'postcss-easings': {},
    'postcss-assets': {
      basePath: './',
      loadPaths: options.dist ? [options.dist.cssimg] : [],
    },
    autoprefixer: {
      cascade: false,
      grid: true,
    },
    'postcss-svg': {},
    'postcss-short-size': {},
    'postcss-flexbugs-fixes': {},
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
})
