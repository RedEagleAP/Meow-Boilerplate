<p align="center">
  <a href="https://redeagleap.github.io/Meow-Boilerplate">
    <img src="https://lh3.googleusercontent.com/qjc0gHFosK8Ks0018gHR_a6TAurgeV5sU0ugkRSMup1tACIYkmmcz8Kj0tmPSh2s7XwXA42VFyM" alt="Meow-Boilerplate">
  </a>
</p>
<p align="center">
 <a href="https://badge.fury.io/js/meow-boilerplate">
 <img src="https://badge.fury.io/js/meow-boilerplate.svg" alt="npm version">
 </a>
 <a href="https://david-dm.org/redeagleap/meow-boilerplate">
 <img src="https://david-dm.org/redeagleap/meow-boilerplate/status.svg" alt="Dependencies Status">
 </a>
 <a href="https://david-dm.org/redeagleap/meow-boilerplate?type=dev">
 <img src="https://david-dm.org/redeagleap/meow-boilerplate/dev-status.svg" alt="devDependencies Status">
 </a>
</p>
<p  align="center">
<img  src="https://lh3.googleusercontent.com/eN9nJx8PD9zvr2DHhpNsLb9h2XSK0RteP7x423JlCIzYXwCtwU-kuB9e_WOGsGepn9DMN1Xjwik"  alt="kitty_motivation">
</p>

# MeowBoilerplate

It's just a little and powerfull Meow Boilerplate for your next Project. Most of the stuff fits for my own requirements and maybe you have the same, you can have a lot of fun with it.

__Give it a try!__

<!-- Used for the "back to top" links within the document -->

<div id="contents"></div>

## Table of Contents

- [Intro](#intro)
- [Technologies used](#technologies-used)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Commands](#commands)
- [Structure](#structure)
- [Build](#build)
  - [Build CSS](#build-css)
  - [Build Structure](#build-structure)
  - [Build JS](#build-js)
- [Gulp Tasks](#gulp-tasks)
- [License](#license)
- [Author](#author)

## Intro

"Meow Boilerplate" is a toolkit designed to support mainly the construction of frontends. Anyone looking for a colorful mixture of prefabricated elements, as one would expect from bootstrap and co, will not be happy with Meow. Here rather the methods are offered to those elements on a simple way to generate and expand.

Around the CSS part, there are still many automatic functions installed that help the developer. For example, to generate image assets and distribute, to build HTML mockups, to make sprites to generate fallbacks for SVG files. That's why I also avoid the term framework.

## Technologies used

**JavaScript**

- [ES2017](https://medium.com/komenco/what-to-expect-from-javascript-es2017-the-async-edition-618e28819711) - support through compiler [Babel](https://babeljs.io/).

- [Node](https://nodejs.org/) - is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

**Testing**

- [Cypress](https://www.cypress.io/) - is a fast, easy and reliable testing for anything that runs in a browser.

**Styles**

- [Sass](https://sass-lang.com/) - is the most mature, stable, and powerful professional grade CSS extension language in the world.

- [Sassdoc](http://sassdoc.com/) - is a documentation system to build pretty and powerful docs in the blink of an eye.

- [PostCSS](https://postcss.org/) - is a tool for transforming CSS with JavaScript.

- [Critical](https://github.com/addyosmani/critical) - extracts & inlines critical-path (above-the-fold) CSS from HTML.

**Murkup**

- [Pug](https://pugjs.org/api/getting-started.html) - is a high-performance template engine heavily influenced by [Haml](http://haml.info/) and implemented with JavaScript for Node.js and browsers.

- [Twig](https://twig.symfony.com/) - The flexible, fast, and secure template engine for PHP.

- [Html](https://www.w3.org/html/) - just html...

**Automation**

- [Gulp](https://gulpjs.com/) - is a toolkit for automating painful or time-consuming tasks in your development workflow.

- [Webpack](https://webpack.js.org/) - is a bundler for modules.

**Optimization**

- [Imagemin](https://github.com/imagemin/imagemin) - minify PNG, JPEG, JPG, GIF and SVG images.

- [Uglify](https://github.com/mishoo/UglifyJS2) - is a JavaScript parser, minifier, compressor and beautifier toolkit.

**Server**

- [BrowserSync](http://www.browsersync.io/) - is a time-saving synchronised browser testing.

**Linting**

- [ESlint](http://eslint.org/) - is to provide a pluggable linting utility for JavaScript.

- [HTMLHint](https://htmlhint.io/) - is a Static Code Analysis Tool for HTML.

- [Stylelint](https://stylelint.io/) - is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

- [Prettier](https://prettier.io/) - is an opinionated code formatter.

**Code Management**

- [Editorconfig](http://editorconfig.org/) - helps developers define and maintain consistent coding styles between different editors and IDEs.

- [Git](https://git-scm.com/) - is a distributed version control system designed to handle everything from small to very large projects.

<sub>[⇧ back to top](#contents)</sub>

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/lang/en/)

<sub>[⇧ back to top](#contents)</sub>

## Getting started

### Npm&Yarn install:

```bash
#Nostalgic
npm install meow-boilerplate

#Hipster
yarn add meow-boilerplate
```

Then you need to delete `yarn.lock` or `package-lock.json` and `package.json`. After that `cd node_modules/meow-bilerplate` and extract all files and folders into your project root directory. Configurate `package.json` and `config.json` files according to your preference. And just `npm install` or `yarn`.

### Clone the repo:

Clone the repo to get all source files as they are available on Github:

```bash
git clone https://github.com/redeagleap/meow-boilerplate.git

cd meow-boilerplate/
```

And then install NPM-Modules via:

```bash
#Nostalgic
npm install

#Hipster
yarn
```

This install the required __node_modules__.

Nice, now your project is ready for battle, and you just have to write your code, and not spend several hours each time setting up each new project. Enjoy!

<sub>[⇧ back to top](#contents)</sub>

## Commands

 _With Webpack you have to use NPM Script Commands_

| Action                                                                                      | Npm                  | Yarn              |
|:------------------------------------------------------------------------------------------- |:--------------------:|:-----------------:|
| Intialize your Project and the Sass Documentation (/sassdocs/)                              | `npm run init`       | `yarn run init`   |
| Main development task with BrowserSync and Webpack                                          | `npm run dev`        | `yarn dev`        |
| Minify JS, Images, CSS. Is for a automated Build Process, comes after a Gulp Init.          | `npm run build`      | `yarn build`      |
| Rebuild all JS Files except the Application JS File                                         | `npm run scripts`    | `yarn scripts`    |
| Rebuild all Image Files for CSS, copy it to distribution, build Bitmap- and Vector Sprites. | `npm run uiimages`   | `yarn uiimages`   |
| Copy all Imagefiles for Documentusage.                                                      | `npm run htmlassets` | `yarn htmlassets` |
| Copy all or Generate the Template Files.                                                    | `npm run template`   | `yarn template`   |
| Generate Favicons and the HTML Snippet (generated Files you will find in `src/.system/`)    | `npm run favicon`    | `yarn favicon`    |

<sub>[⇧ back to top](#contents)</sub>

## Structure

In the directory `src/` is the source code, so that our working directory. In `dist/` directory that should not work, therefore, only if it is absolutely necessary.

The Gulpfile is modularized and ES8 Compatible (with Babel.js), you will find all Tasks in the `gulpfile/` directory. It is now easier for you to add additional Tasks, without touching the main Gulpfile (die Main Gulpfile is only a Loader).

**SRC Folderstructure:**

src/
├── .system/                          => Internal System Files
├── fonts/                            => Font Files
├── framework/                        => Sass Framework
├── images/                           => All Images
|   ├── bitmapSingle-assets           => Single Bitmap Images
|   ├── bitmapSprite-assets           => Images for Bitmap Sprites
|   ├── htmlimages                    => Contents Images (`<img>`)
|   ├── vectorSingle-assets           => Single Vector Images
|   └── vectorSprite-assets           => Vector Images for Vector Sprites
├── js/                               => JS Files (e.g. main.js)
├── scripts/                          => Script files that are not installed
├── structure/                        => Source Files for Copy (e.g. Template Files for a WP Theme)
├── template/                         => Source Files for a Template Compiler (Pug / Twig)
├── style/                            => Styling Source Files

If you are not happy with the structure of the `src/` folder, you can customize it. In the `config.json` must also be entered the new paths.

The `Template / Structure` directories even a short explanation. If an HTML compiler like pug or twig used the files from the `template/` directory are used. If the compiler is disabled, the `structure/` directory used. For example, you can put the files there a Wordpress template, these are then copied with a change in the `src/` directory.

<p align="center">
 <img src="https://lh3.googleusercontent.com/_er2t_NUEx81Szvsx7UlExlclsN84Tf8bxPJosSMafJm3TuJZiByLdXleuZ2MQASlqxGANcgVvM" alt="template_config">
</p>

The `dist/` folder is created after initialization (`npm run init`) of the project. All compiled and copied files of the `src/` Folders land there.

**Dist Folderstructure:**

dist/
├── assets/                 => All Assets
|   ├── css/                => CSS Files
|   ├── fonts/              => Font Directory
|   ├── js/                 => Javascript Files
|   └── img/                => Background Image Assets
|       ├── system/         => Images like Favicons
|       ├── bitmaps/        => Bitmap Images
|       └── svgfiles/       => Vector Images
├── images/                 => Contents Images

If you therefore should not be satisfied, you can change the structure in the `config.json`. When you change, delete the `dist/` Folder, than run the Init Task.

<p align="center">
 <img src="https://lh3.googleusercontent.com/_cf76yEx5cvPd9bJTsEU4l-lI0iuhgYVeIYtDCU6q42lZx1tLk7SKrpJ3U8sUZ8VDO444SRbgOk" alt="dist_config">
</p>

<sub>[⇧ back to top](#contents)</sub>

## Build

### Build CSS

#### BEM

Class names that are generated by "Meow", use the [BEM](https://en.bem.info/methodology/quick-start/) syntax. BEM is one of the easiest ways to write  Object Oriented CSS . Surely you can build a lot more delicate with [Smacss](https://smacss.com/), but should not forget that the issue is simply a principle of object-oriented programming here. One should therefore not make a religion out of the topic - the final product will always be CSS with all its drawbacks.

The Develeloper is free to decide whether he wants his class named after the BEM build syntax, in which case you can rely on the BEM mixins, thus obtaining a central node to make global modifications to the syntax.

```scss
.root__child => Element
.root--modifier => Modifier
.root---instance => Instance
```

Instance is similar to a modifier, with the difference that the styles of the parent element are applied. The instance can then be expanded with additional Styles.

By default BEM elements marked with a double underscore `__` and BEM Modifier with a double hyphen `--`, Instances with a tripple hyphen `---`. Who does not agree, this may change the Sass Setup file (`src/framework/_defaults.scss`) on the by adjusting the `$meow-bem` Map accordingly.

---

#### Framework Structure

The necessary files can be found under `src/framework/`. Those who want to can extend the framework for specific projects.

***Framework Structure***

 <img src="https://lh3.googleusercontent.com/J7q9Y1ubx2l5UaXAoprc6TcwExA1g1LsIOKVpZ-FaRw642ciM7gKwF0TeAiv0TFYZBXrLvCEov4" alt="framework_structure">

---

#### Sass Basics

To generate the CSS file, you use the `style.scss` from the style directory (`src/style/`). But first the structure:

***Styling Structure***

 <img src="https://lh3.googleusercontent.com/YyhCC28upTB-QQwFLhRHjPaovv2aItayuXesmWb4PIX0_fOCOlSHiBFD7smA9LQ_r9pw-Cu-ydU" alt="styling_structure">

*You not need to worry about CSS3 prefixes the gulp-autoprefixer will insert it on any Compile.*

***Loader File***
With the `_loader.scss` file, all required files are loaded. The order is already given proof should not be changed.

***Setup File***
Almost all settings can be changed and extended over `_setup.scss` (find under `src/style/`).

---

#### Grid system

We've outsourced the Scss Grid Framework in his own NPM Package to use it in different environments
You can find it here: [https://github.com/davidhellmann/baukasten-grid](https://github.com/davidhellmann/baukasten-grid)
Or directly to the [Readme](https://github.com/davidhellmann/baukasten-grid/blob/master/readme.md)

To modify you settings you must open the `src/style/app/_______settings/_settings.breakpoints.scss` and there you can change what you want.

The dafaults look like this:

```scss
// Settings
$bk-grid-settings-custom: (
  cssgrid: false,
  cssgrid-fallback: false,
  flexboxgrid: true,
  testing: false,
  prefix: 'o-',
  units: (
    gutter: 8px,
    gutter-min-factor: 1,
    gutter-max-factor: 2,
    gutter-min-vertical-factor: 1,
    gutter-max-vertical-factor: 2,
  ),
  offset-classes: false,
  push-classes: false,
  pull-classes: false,
  disable-padding-horizontal: false,
  breakpoints: (
    min: (
      from: 320px,
      cols: 12,
      create-classes: true,
    ),
    xs: (
      from: 400px,
      cols: 12,
      create-classes: false,
    ),
    s: (
      from: 600px,
      cols: 24,
      create-classes: true,
    ),
    m: (
      from: 800px,
      cols: 24,
      create-classes: false,
    ),
    l: (
      from: 1000px,
      cols: 24,
      create-classes: true,
    ),
    max: (
      from: 1440px,
      cols: 24,
      create-classes: false,
    ),
  ),
);
```

---

<sub>[⇧ back to top](#contents)</sub>

### Build Structure

#### Compiler

To generate HTML files, for example, to build a prototype, you can use HTML compiler like Pug or Twig. Pug and Twig differ less in their features, more in the syntax. The compiler will but set the project start (can also be completely disabled).

When active, the generator is in the `src/` directory `template/` directory integrated, there is also some basis are files (example with Twig).

 <img src="https://lh3.googleusercontent.com/EwMKSpw4lFng3LCfV0aASl4n6iUw29ZyG12OJw5dBmv63aNghE63OU3cNUQMlbzRdgy0QCM69mg" alt="template_structure">

---

#### Template Folder

Files in the root of the template directory are compiled to HTML files. In `parts/` are larger template blocks as the header and the block to load the script files. In `templates/` directory contains Main Templates, as a basis for Child Templates in the root.

The compiler will only work with the data of the `template/` directory

---

#### Without Compiler

If you work for example on a WordPress template, the compiler would there rather inappropriate, because you actually have to copy only those files. To stay with the example of the Wordpress template, all the files for the template, added to the structure directory.
Gulp will copy these files when changing to the appropriate directory.

The Compiler is this, if not already, be switched off in the `config.json` (template.compiler). Gulp-Watch will then monitor the Structure directory (`src/structure/`) on changes to the files .

---

<sub>[⇧ back to top](#contents)</sub>

### Build JS

#### Main JS File

In `src/js/` directory is the `main.js` file (can be renamed). That is our main file events and scripts are controlled with Javascript. The file passes through a Gulp task, all in addition ESLint also the advantage that you can attach partials.

<p align="center">
 <img src="https://lh3.googleusercontent.com/8sCZMv7jIEs-OMm9Qluya-UQz4XOHYGPbBFQk22zL33nZ4gxQFdpocMVgHQd00-hk4XA-eI76P8" alt="main.js">
</p>

*The filename of the partials should begin with an **underscore**.*

---

#### Scripts

To use JS files, they must first be processed with Gulp. JS files are then either in the JS directory `dist/assets/js/` copied or they are combined and copied to the JS directory.

In the `config.json` you will find the following block:

<p align="center">
 <img src="https://lh3.googleusercontent.com/zXb8zi8C19GxfHvZmJpVu1bmfuUMfD7eVYL--gjXsOjFclBB6sk-kzvpUGQB0faB_a3IF7LsqYU" alt="script_config">
</p>

Everything under jsCopy will be simply copied, under jsCombine identifies this files for the Combination. When you include new JS Files start the rebuild process:

```bash
gulp rebuild:js
```

---

<sub>[⇧ back to top](#contents)</sub>

## Gulp Tasks

There are some Gulp Tasks there…

```bash
gulp init

gulp watch

gulp browser-sync

gulp default

gulp build

gulp publish

gulp build:bitmapSprite

gulp build:favicon

gulp build:symbolCleanup

gulp build:vectorSprite

gulp combine:js

gulp compiler:css

gulp compiler:html

gulp copy:assets

gulp copy:bitmaps

gulp copy:contentimages

gulp copy:fonts

gulp copy:js

gulp copy:launch

gulp copy:vectors

gulp minify:contentimages

gulp minify:css

gulp minify:inlineimages

gulp minify:js

gulp optimize:criticalCss

gulp rebuild:images

gulp rebuild:js

gulp sassdoc:generate

gulp version:bump
```

<sub>[⇧ back to top](#contents)</sub>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<sub>[⇧ back to top](#contents)</sub>

## Author

```txt
Meow Boilerplate made with love.

---------------------------------------

Author : Alexander Prisyazhnyuk

Email : insightinyourmind@gmail.com

Github : https://github.com/redeagleap/meow-boilerplate.git
```

<sub>[⇧ back to top](#contents)</sub>
