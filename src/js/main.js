// Main JS File
// Polyfills
import cq from 'cq-prolyfill' // eslint-disable-line
import 'svgxuse' // eslint-disable-line
import '@babel/polyfill'

// Import Partials
import './scripts/bowser'
import scripts from './partial/allscripts'

scripts.init()

// Activate Container Queries
cq({ postcss: true })
