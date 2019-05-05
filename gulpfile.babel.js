/**
 *  Meow boilerplate
 *  This gulpfile makes use of new JavaScript features.
 *  Babel handles this without us having to do anything. It just works.
 *  You can read more about the new JavaScript features here:
 *  https://babeljs.io/docs/learn-es2015/
 */

'use strict';

import { registry } from 'gulp';
import HubRegistry from 'gulp-hub';

import sassdocGenerateTask from './gulpfile/tasks/sassdoc-generate';
import sortingScssTask from './gulpfile/tasks/sorting-css';
import versionBump from './gulpfile/tasks/version-bump';
import combineJsTask from './gulpfile/tasks/combine-js';
import copyLaunchTask from './gulpfile/tasks/copy-launch';
import copyFontsTask from './gulpfile/tasks/copy-fonts';
import copyBitmapsTask from './gulpfile/tasks/copy-bitmaps';
import copyContentimagesTask from './gulpfile/tasks/copy-contentimages';
import copyVectorsTask from './gulpfile/tasks/copy-vectors';
import copyJsTask from './gulpfile/tasks/copy-js';
import buildBitmapSpriteTask from './gulpfile/tasks/build-bitmapsprite';
import buildFaviconTask from './gulpfile/tasks/build-favicons';
import buildVectorSpriteTask from './gulpfile/tasks/build-vectorsprite';
import buildSymbolCleanupTask from './gulpfile/tasks/build-symbolCleanup';
import rebuildImagesTask from './gulpfile/tasks/rebuild-images';
import rebuildJsTask from './gulpfile/tasks/rebuild-js';
import compilerCssTask from './gulpfile/tasks/compile-css';
import compilerHtmlTask from './gulpfile/tasks/compile-html';
import criticalCss from './gulpfile/tasks/optimize-criticalCss';
import minifyJsTask from './gulpfile/tasks/minify-js';
import minifyContentimagesTask from './gulpfile/tasks/minify-contentimages';
import minifyInlineimagesTask from './gulpfile/tasks/minify-inlineimages';
import minifyCssTask from './gulpfile/tasks/minify-css';
import watchTask from './gulpfile/tasks/watch';
import browserSyncTask from './gulpfile/tasks/browsersync';
import initTask from './gulpfile/tasks/init';
import buildTask from './gulpfile/tasks/build';
import publishTask from './gulpfile/tasks/publish';
import defaultTask from './gulpfile/tasks/default';

// Define Global Vars
global.checkChanged = true;

/* load some files into the registry */
const hub = new HubRegistry(['./gulpfile/tasks/*.js']);

/* tell gulp to use the tasks just loaded */
registry(hub);

// run "gulp --tasks" to watch gulp tasks tree
exports.sassdocGenerateTask = sassdocGenerateTask;
sassdocGenerateTask.description = 'Build the CSS Framework Documentation';

exports.sortingScssTask = sortingScssTask;
sortingScssTask.description = 'Sorting CSS/SCSS properties in .scss files';

exports.versionBump = versionBump;
versionBump.description = 'Bump the version property within `bower.json` and `package.json`';

exports.combineJsTask = combineJsTask;
combineJsTask.description = 'Combine Scripts from Browser to script.js';

exports.copyLaunchTask = copyLaunchTask;
copyLaunchTask.description = 'Copy the Default Build Files to distribution';

exports.copyFontsTask = copyFontsTask;
copyFontsTask.description = 'Copy the Font Fils to distribution';

exports.copyBitmapsTask = copyBitmapsTask;
copyBitmapsTask.description = 'Move all Bitmap Images (from bitmapSingle-assets) to the .dist Folder';

exports.copyContentimagesTask = copyContentimagesTask;
copyContentimagesTask.description = 'Copy and Compress all Content Images';

exports.copyVectorsTask = copyVectorsTask;
copyVectorsTask.description = 'Move all SVG Images (from vectorSingle-assets) to the .dist Folder';

exports.copyJsTask = copyJsTask;
copyJsTask.description = 'Copy Bower Files to "dist/". Use the JSON Array in the config.json [files:jsCopy]]';

exports.buildBitmapSpriteTask = buildBitmapSpriteTask;
buildBitmapSpriteTask.description = 'Build the Bitmap Sprite File and the SCSS Map';

exports.buildFaviconTask = buildFaviconTask;
buildFaviconTask.description = 'Build a set of Favicons';

exports.buildVectorSpriteTask = buildVectorSpriteTask;
buildVectorSpriteTask.description = 'Move all SVG Images (from vectorSingle-assets) to the .dist Folder';

exports.buildSymbolCleanupTask = buildSymbolCleanupTask;
buildSymbolCleanupTask.description = 'Build an SVG Vector Sprite and a Map file';

exports.rebuildImagesTask = rebuildImagesTask;
rebuildImagesTask.description = 'Rebuild all Images. Copy to distribution, build Sprites';

exports.rebuildJsTask = rebuildJsTask;
rebuildJsTask.description = 'Rebuild all JS Files. Copy to distribution';

exports.compilerCssTask = compilerCssTask;
compilerCssTask.description = 'Watch the working dirs - activates the compilers and refresh the browser';

exports.compilerHtmlTask = compilerHtmlTask;
compilerHtmlTask.description = 'Compile Twig Files to HTML or copy Structure Files';

exports.criticalCss = criticalCss;
criticalCss.description = 'Generate Inline CSS for the Above the fold optimization';

exports.minifyJsTask = minifyJsTask;
minifyJsTask.description = 'Compress all Javascript Files in the dist folder';

exports.minifyContentimagesTask = minifyContentimagesTask;
minifyContentimagesTask.description = 'Compress all Content Images in distribution';

exports.minifyInlineimagesTask = minifyInlineimagesTask;
minifyInlineimagesTask.description = 'Compress all Inline Images in distribution';

exports.minifyCssTask = minifyCssTask;
minifyCssTask.description = 'Compress CSS Files in distribution';

exports.watchTask = watchTask;
watchTask.description = 'The Watch Tasks for SASS, PUG or Twig, JS and activate BrowserSync';

exports.browserSyncTask = browserSyncTask;
browserSyncTask.description = 'Refresh the Browser after File Change';

exports.buildTask = buildTask;
buildTask.description = 'Deploy Task for an automated Build Process';

exports.initTask = initTask;
initTask.description = 'Starting Task for the first Build off the Project Structure';

exports.publishTask = publishTask;
publishTask.description = 'Publish all Files in distribution. Add a new Version number to Package and Bower. Compress Files';

export default defaultTask;
defaultTask.description = 'Watch the working dirs - activates the compilers and refresh the browser';
