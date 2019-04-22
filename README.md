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
 <a href="https://github.com/RedEagleAP/meow-boilerplate/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="License">
  </a>
  <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=square" alt="Prettier">
  </a>
  <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4">
  <img src="https://img.shields.io/badge/nyancat-approved-ff69b4.svg" alt="nyancat">
  </a>
</p>
<p  align="center">
<img  src="https://lh3.googleusercontent.com/eN9nJx8PD9zvr2DHhpNsLb9h2XSK0RteP7x423JlCIzYXwCtwU-kuB9e_WOGsGepn9DMN1Xjwik"  alt="kitty_motivation">
</p>
<p align="center">
  <h3 align="center">Meow Boilerplate</h3>
  <p align="center">
  It's just a little and powerfull Meow Boilerplate for your next Project.<br>
  Most of the stuff fits for my own requirements and maybe you have<br>
  the same, you can have a lot of fun with it.
  </p>
  <p align="center"><b>Give it a try!</b></p>
</p>

<!-- Used for the "back to top" links within the document -->
<div id="contents"></div>

<details>
  <summary><strong>Table of Contents</strong></summary>

- <a href="#intro">:speech_balloon: Intro</a>
- <a href="#dependencies">:package: Dependencies</a>
- <a href="#getting-started">:rocket: Getting Started</a>
- <a href="#commands">:triangular_flag_on_post: Commands</a>
- <a href="#technologies-used">:bento: Technologies used</a>
- <a href="#structure">:wrench: Structure</a>
- <a href="#build">:hammer: Build</a>
  - <a href="#build-css">:art: Build CSS</a>
  - <a href="#build-structure">:white_check_mark: Build Structure</a>
  - <a href="#build-js">:rainbow: Build JS</a>
- <a href="#license">:page_facing_up: License</a>
- <a href="#author">:penguin: Author</a>

</details>

<div id="intro"></div>

## :speech_balloon: Intro

"Meow Boilerplate" is a toolkit designed to support mainly the construction of frontends. Anyone looking for a colorful mixture of prefabricated elements, as one would expect from bootstrap and co, will not be happy with Meow. Here rather the methods are offered to those elements on a simple way to generate and expand.

Around the CSS part, there are still many automatic functions installed that help the developer. For example, to generate image assets and distribute, to build HTML mockups, to make sprites to generate fallbacks for SVG files. That's why I also avoid the term framework.

If you want to have a more lightweight and cleaner version, try [Light Boilerplate](https://github.com/RedEagleAP/light-boilerplate)

As well as a template for creating [README.md](doc/TEMPLATE.md). Or directly to [repo](https://github.com/RedEagleAP/readme-template).

<div id="dependencies"></div>

## :package: Dependencies

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/lang/en/)

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="getting-started"></div>

## :rocket: Getting started

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

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="commands"></div>

## :triangular_flag_on_post: Commands

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

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="technologies-used"></div>

## :bento: Technologies used

<details>
  <summary><strong>JavaScript</strong></summary>

- [ES2017](https://medium.com/komenco/what-to-expect-from-javascript-es2017-the-async-edition-618e28819711) - support through compiler [Babel](https://babeljs.io/).

- [Node](https://nodejs.org/) - is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

</details>

<details>
  <summary><strong>Testing</strong></summary>

- [Cypress](https://www.cypress.io/) - is a fast, easy and reliable testing for anything that runs in a browser.

</details>

<details>
  <summary><strong>Styles</strong></summary>

- [Sass](https://sass-lang.com/) - is the most mature, stable, and powerful professional grade CSS extension language in the world.

- [Sassdoc](http://sassdoc.com/) - is a documentation system to build pretty and powerful docs in the blink of an eye.

- [PostCSS](https://postcss.org/) - is a tool for transforming CSS with JavaScript.

- [Critical](https://github.com/addyosmani/critical) - extracts & inlines critical-path (above-the-fold) CSS from HTML.

</details>

<details>
  <summary><strong>Automation</strong></summary>

- [Gulp](https://gulpjs.com/) - is a toolkit for automating painful or time-consuming tasks in your development workflow.

- [Webpack](https://webpack.js.org/) - is a bundler for modules.

</details>

<details>
  <summary><strong>Optimization</strong></summary>

- [Imagemin](https://github.com/imagemin/imagemin) - minify PNG, JPEG, JPG, GIF and SVG images.

- [Uglify](https://github.com/mishoo/UglifyJS2) - is a JavaScript parser, minifier, compressor and beautifier toolkit.

</details>

<details>
  <summary><strong>Server</strong></summary>

- [BrowserSync](http://www.browsersync.io/) - is a time-saving synchronised browser testing.

</details>

<details>
  <summary><strong>Linting</strong></summary>

- [ESlint](http://eslint.org/) - is to provide a pluggable linting utility for JavaScript.

- [HTMLHint](https://htmlhint.io/) - is a Static Code Analysis Tool for HTML.

- [Stylelint](https://stylelint.io/) - is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

- [Prettier](https://prettier.io/) - is an opinionated code formatter.

</details>

<details>
  <summary><strong>Code Management</strong></summary>

- [Editorconfig](http://editorconfig.org/) - helps developers define and maintain consistent coding styles between different editors and IDEs.

- [Git](https://git-scm.com/) - is a distributed version control system designed to handle everything from small to very large projects.

</details>

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="structure"></div>

## :wrench: Structure

In the directory `src/` is the source code, so that our working directory. In `dist/` directory that should not work, therefore, only if it is absolutely necessary.

The Gulpfile is modularized and ES8 Compatible (with Babel.js), you will find all Tasks in the `gulpfile/` directory. It is now easier for you to add additional Tasks, without touching the main Gulpfile (die Main Gulpfile is only a Loader).

**SRC Folderstructure:**

```
src/
├── .system/                          => Internal System Files
├── fonts/                            => Font Files
├── framework/                        => Sass Framework
├── images/                           => All Images
|   ├── bitmapSingle-assets           => Single Bitmap Images
|   ├── bitmapSprite-assets           => Images for Bitmap Sprites
|   ├── htmlimages                    => Content Images (`<img>`)
|   ├── vectorSingle-assets           => Single Vector Images
|   └── vectorSprite-assets           => Vector Images for Vector Sprites
├── js/                               => JS Files (e.g. main.js)
├── scripts/                          => Script files that are not installed
├── structure/                        => Source Files for Copy (e.g. Template Files for a WP Theme)
├── template/                         => Source Files for a Template Compiler (Pug / Twig)
├── style/                            => Styling Source Files
```

If you are not happy with the structure of the `src/` folder, you can customize it. In the `config.json` must also be entered the new paths.

The `Template / Structure` directories even a short explanation. If an HTML compiler like pug or twig used the files from the `template/` directory are used. If the compiler is disabled, the `structure/` directory used. For example, you can put the files there a Wordpress template, these are then copied with a change in the `src/` directory.

<p align="center">
 <img src="https://lh3.googleusercontent.com/_er2t_NUEx81Szvsx7UlExlclsN84Tf8bxPJosSMafJm3TuJZiByLdXleuZ2MQASlqxGANcgVvM" alt="template_config">
</p>

The `dist/` folder is created after initialization (`npm run init`) of the project. All compiled and copied files of the `src/` Folders land there.

**Dist Folderstructure:**

```
dist/
├── assets/                 => All Assets
|   ├── css/                => CSS Files
|   ├── fonts/              => Font Directory
|   ├── js/                 => Javascript Files
|   └── img/                => Background Image Assets
|       ├── system/         => Images like Favicons
|       ├── bitmaps/        => Bitmap Images
|       └── svgfiles/       => Vector Images
├── images/                 => Content Images
```

If you therefore should not be satisfied, you can change the structure in the `config.json`. When you change, delete the `dist/` Folder, than run the Init Task.

<p align="center">
 <img src="https://lh3.googleusercontent.com/_cf76yEx5cvPd9bJTsEU4l-lI0iuhgYVeIYtDCU6q42lZx1tLk7SKrpJ3U8sUZ8VDO444SRbgOk" alt="dist_config">
</p>

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="build"></div>

## :hammer: Build

<div id="build-css"></div>

### :art: Build CSS

<details>
  <summary><strong>BEM</strong></summary>

Class names that are generated by "Meow", use the [BEM](https://en.bem.info/methodology/quick-start/) syntax. BEM is one of the easiest ways to write  Object Oriented CSS . Surely you can build a lot more delicate with [Smacss](https://smacss.com/), but should not forget that the issue is simply a principle of object-oriented programming here. One should therefore not make a religion out of the topic - the final product will always be CSS with all its drawbacks.

The Develeloper is free to decide whether he wants his class named after the BEM build syntax, in which case you can rely on the BEM mixins, thus obtaining a central node to make global modifications to the syntax.

```scss
.root__child => Element
.root--modifier => Modifier
.root---instance => Instance
```

Instance is similar to a modifier, with the difference that the styles of the parent element are applied. The instance can then be expanded with additional Styles.

By default BEM elements marked with a double underscore `__` and BEM Modifier with a double hyphen `--`, Instances with a tripple hyphen `---`. Who does not agree, this may change the Sass Setup file (`src/framework/_defaults.scss`) on the by adjusting the `$meow-bem` Map accordingly.

</details>

---

<details>
  <summary><strong>Framework Structure</strong></summary>

The necessary files can be found under `src/framework/`. Those who want to can extend the framework for specific projects.

***Framework Structure***

 <img src="https://lh3.googleusercontent.com/J7q9Y1ubx2l5UaXAoprc6TcwExA1g1LsIOKVpZ-FaRw642ciM7gKwF0TeAiv0TFYZBXrLvCEov4" alt="framework_structure">

</details>

---

<details>
  <summary><strong>Sass Basics</strong></summary>

To generate the CSS file, you use the `main.scss` from the style directory (`src/style/`). But first the structure:

***Styling Structure***

 <img src="https://lh3.googleusercontent.com/YyhCC28upTB-QQwFLhRHjPaovv2aItayuXesmWb4PIX0_fOCOlSHiBFD7smA9LQ_r9pw-Cu-ydU" alt="styling_structure">

*You not need to worry about CSS3 prefixes the gulp-autoprefixer will insert it on any Compile.*

***Loader File***
With the `_loader.scss` file, all required files are loaded. The order is already given proof should not be changed.

***Setup File***
Almost all settings can be changed and extended over `_setup.scss` (find under `src/style/`).

</details>

---

<details>
  <summary><strong>Grid system</strong></summary>

We've outsourced the Scss Grid Framework in his own NPM Package to use it in different environments
You can find it here: [https://github.com/davidhellmann/baukasten-grid](https://github.com/davidhellmann/baukasten-grid)
Or directly to the [Readme](https://github.com/davidhellmann/baukasten-grid/blob/master/readme.md)

To modify you settings you must open the `src/style/app/_______settings/_settings.breakpoints.scss` and there you can change what you want.

The dafaults look like this:

```scss
// Settings
$bk-grid-settings-custom: (
  // You want to use CSS Grid?
  // @Boolean
  // default: true
  cssgrid: true,

  // Your Project must support older browsers? No Problem, we've a Fallback (flexbox) here!
  // @Boolean
  // default: true
  cssgrid-fallback: true,

  // You want to use Flexbox only? Also no Problem! But you must set the "cssgrid-fallback" and "cssgrid" to false.
  // @Boolean
  // default: false
  flexboxgrid: false,

  // This add some CSS Styleing to the "section", "row" and "col" classes.
  // @Boolean
  // default: false
  testing: false,

  // Naming Conventions? No Problem. You can choose you prefix!
  // @String
  // default: 'o-'
  prefix: 'o-',

  // Units are for Paddings and Margins. All Paddings an Margins are Fluid.
  // That means that on the smallest breakpoint the Padding on each col side
  // is: gutter * gutter-min-factor (8px * 1) and on the biggest breakpoint it
  // is: gutter * gutter-max-factor (8px * 2)
  // For Margins top it is the same with the Vertical factors.
  units: (
    gutter: 8px,
    gutter-min-factor: 1,
    gutter-max-factor: 2,
    gutter-min-vertical-factor: 1,
    gutter-max-vertical-factor: 2
  ),

  // Class Creation
  // Not every projects need all this offset / push / pull classes. You decide!
  // @Boolean
  // default: true
  offset-classes: true,
  push-classes: true,
  pull-classes: true,

  // Disbale Padding Horizontal for Sections. Rows. Cols
  // @Boolean
  // default: false
  disable-padding-horizontal: false,

  // Breakpoints must have at least a "min" and a "max". The other Breakpoints as u like
  // We use all the time "min-width".
  // Cols are how many cols can have a row on that specific breakpoint.
  breakpoints: (
    min: (from: 320px, cols: 6, create-classes: true),
    xs:  (from: 400px, cols: 6, create-classes: true),
    s:   (from: 600px, cols: 12, create-classes: true),
    m:   (from: 800px, cols: 12, create-classes: true),
    l:   (from: 1000px, cols: 24, create-classes: true),
    max: (from: 1440px, cols: 24, create-classes: true)
  )
);
```

</details>

---

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="build-structure"></div>

### :white_check_mark: Build Structure

<details>
  <summary><strong>Compiler</strong></summary>

To generate HTML files, for example, to build a prototype, you can use HTML compiler like Pug or Twig. Pug and Twig differ less in their features, more in the syntax. The compiler will but set the project start (can also be completely disabled).

When active, the generator is in the `src/` directory `template/` directory integrated, there is also some basis are files (example with Twig).

 <img src="https://lh3.googleusercontent.com/EwMKSpw4lFng3LCfV0aASl4n6iUw29ZyG12OJw5dBmv63aNghE63OU3cNUQMlbzRdgy0QCM69mg" alt="template_structure">

</details>

---

<details>
  <summary><strong>Template Folder</strong></summary>

Files in the root of the template directory are compiled to HTML files. In `parts/` are larger template blocks as the header and the block to load the script files. In `templates/` directory contains Main Templates, as a basis for Child Templates in the root.

The compiler will only work with the data of the `template/` directory

</details>

---

<details>
  <summary><strong>Without Compiler</strong></summary>

If you work for example on a WordPress template, the compiler would there rather inappropriate, because you actually have to copy only those files. To stay with the example of the Wordpress template, all the files for the template, added to the structure directory.
Gulp will copy these files when changing to the appropriate directory.

The Compiler is this, if not already, be switched off in the `config.json` (template.compiler). Gulp-Watch will then monitor the Structure directory (`src/structure/`) on changes to the files .

</details>

---

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="build-js"></div>

### :rainbow: Build JS

<details>
  <summary><strong>Main JS File</strong></summary>

In `src/js/` directory is the `main.js` file (can be renamed). That is our main file events and scripts are controlled with Javascript. The file passes through a Gulp task, all in addition ESLint also the advantage that you can attach partials.

<p align="center">
 <img src="https://lh3.googleusercontent.com/8sCZMv7jIEs-OMm9Qluya-UQz4XOHYGPbBFQk22zL33nZ4gxQFdpocMVgHQd00-hk4XA-eI76P8" alt="main.js">
</p>

*The filename of the partials should begin with an **underscore**.*

</details>

---

<details>
  <summary><strong>Scripts</strong></summary>

To use JS files, they must first be processed with Gulp. JS files are then either in the JS directory `dist/assets/js/` copied or they are combined and copied to the JS directory.

In the `config.json` you will find the following block:

<p align="center">
 <img src="https://lh3.googleusercontent.com/zXb8zi8C19GxfHvZmJpVu1bmfuUMfD7eVYL--gjXsOjFclBB6sk-kzvpUGQB0faB_a3IF7LsqYU" alt="script_config">
</p>

Everything under jsCopy will be simply copied, under jsCombine identifies this files for the Combination. When you include new JS Files start the rebuild process:

```bash
gulp rebuild:js
```

</details>

---

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="license"></div>

## :page_facing_up: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="author"></div>

## :penguin: Author

```txt
Meow Boilerplate made with love.

---------------------------------------

Author : Alexander Prisyazhnyuk

Email : insightinyourmind@gmail.com

Github : https://github.com/redeagleap/meow-boilerplate.git
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<a href="#contents">:top: <sub>back to top</sub></a>
