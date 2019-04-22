import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import path from 'path';
import meowConf from '../config.json';

exports.getIfUtils = getIfUtils;
exports.removeEmpty = removeEmpty;

exports.meowConf = meowConf;
exports.entryPoints = meowConf.src.jsEntryPoints;

/*
 |--------------------------------------------------------------------------
 | Setting some paths for our Application
 |--------------------------------------------------------------------------
 */
const paths = {};
paths.ROOT_PATH = path.resolve(__dirname, '..');
paths.PUBLIC_PATH = path.join(paths.ROOT_PATH, meowConf.dist.webpackpublic);
paths.ASSETS_PATH = meowConf.dist.webpackassets;
paths.SRC_ROOT = path.resolve(paths.ROOT_PATH, meowConf.src.base);
paths.CSS_ROOT = path.resolve(paths.ROOT_PATH, meowConf.src.style);
paths.LOADER_PATH = path.join(paths.ROOT_PATH, meowConf.src.js);
exports.paths = paths;

/*
 |--------------------------------------------------------------------------
 | Helper Functions
 |--------------------------------------------------------------------------
 */
exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir);
};

exports.assetsPath = function(_path) {
  return path.posix.join(paths.ASSETS_PATH, _path);
};
