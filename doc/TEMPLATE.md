>Header of the README.md that contain: Logo of the project(if any), badges, and descr.

<p align="center">
    <img src="logo-link" alt="Logo">
</p>
<p align="center">
  <a href="https://badge.fury.io/js/repo-name">
  <img src="https://badge.fury.io/js/repo-name.svg" alt="npm version">
  </a>
  <a href="https://david-dm.org/your-github-name/repo-name">
  <img src="https://david-dm.org/your-github-name/repo-name/status.svg" alt="Dependencies Status">
  </a>
  <a href="https://david-dm.org/your-github-name/repo-name?type=dev">
  <img src="https://david-dm.org/your-github-name/repo-name/dev-status.svg" alt="devDependencies Status">
  </a>
</p>
<p align="center">
	<h3 align="center">Repo Name</h3>
	<p align="center">
    A brief description
  </p>
  <p align="center"><b>Call to action</b></p>
</p>

>TOC example:

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
- <a href="#license">:page_facing_up: License</a>
- <a href="#author">:penguin: Author</a>

</details>

<div id="intro"></div>

## :speech_balloon: Intro

>A brief and informative introduction illustrating why your project is interesting and relevant.

<div id="dependencies"></div>

## :package: Dependencies

>Dependencies that are needed by people who want to install your project
>For example:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/lang/en/)

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="getting-started"></div>

## :rocket: Getting started

### Npm&Yarn install:

```bash
#Nostalgic
$ npm install repo-name

#Hipster
$ yarn add repo-name
```

>descr (if needed)

### Clone the repo:

Clone the repo to get all source files as they are available on Github:

```bash
$ git clone https://github.com/your-github-name/repo-name.git

$ cd repo-name/
```

And then install NPM-Modules via:

```bash
#Nostalgic
npm install

#Hipster
yarn
```

This install the required __node_modules__.

>descr (if needed)

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="technologies-used"></div>

## :bento: Technologies used

>Technologies or features that you used when creating the project.
>For example:

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

<div id="commands"></div>

## :triangular_flag_on_post: Commands

>An example of the presentation of commands for working with your project, in the form of a table.

 _With Webpack you have to use NPM Script Commands_

| Action                                                                                      | Npm                  | Yarn              |
| :------------------------------------------------------------------------------------------ | :------------------: | :---------------: |
| Intialize your Project and the Sass Documentation (/sassdocs/)                              | `npm run init`       | `yarn run init`   |
| Main development task with BrowserSync and Webpack                                          | `npm run dev`        | `yarn dev`        |
| Minify JS, Images, CSS. Is for a automated Build Process, comes after a Gulp Init.          | `npm run build`      | `yarn build`      |
| Rebuild all JS Files except the Application JS File                                         | `npm run scripts`    | `yarn scripts`    |
| Rebuild all Image Files for CSS, copy it to distribution, build Bitmap- and Vector Sprites. | `npm run uiimages`   | `yarn uiimages`   |
| Copy all Imagefiles for Documentusage.                                                      | `npm run htmlassets` | `yarn htmlassets` |
| Copy all or Generate the Template Files.                                                    | `npm run template`   | `yarn template`   |
| Generate Favicons and the HTML Snippet (generated Files you will find in `src/.system/`)    | `npm run favicon`    | `yarn favicon`    |

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="structure"></div>

## :wrench: Structure

>Description of the structure of your project.

>Example schema that illustrates it (if needed):

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
└── style/                            => Styling Source Files
```

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="build"></div>

## :hammer: Build

>Description of the build of your project and its subtleties of implementation

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="license"></div>

## :page_facing_up: License

>Your License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/your-github-name/repo-name/blob/master/LICENSE)

<a href="#contents">:top: <sub>back to top</sub></a>

<div id="author"></div>

## :penguin: Author

```txt
Repo Name made with love.
---------------------------------------
Author : Your Name

Email : yourmail@gmail.com

Github : https://github.com/your-github-name/repo-name.git
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<a href="#contents">:top: <sub>back to top</sub></a>