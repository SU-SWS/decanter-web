---
title: Build Tools
date: 2019-11-28T14:11:13.000Z
---
IN PROGRESS

Webpack is the tool that processes the source SCSS and JS and generates the distribution CSS and JS files. npm scripts are used to run webpack and other tools, e.g. kss, eslint. Please see note about Grunt below.

The following npm scripts are available:

### npm run build

generates the dev (non-minified) .css and .js for decanter and the styleguide.

### npm run dist

Generates the production (minified) .css and .js for Decanter and the Decanter styleguide.

### npm run watch

Regenerates the dev (non-minified) .css and .js for Decanter and the Decanter styleguide whenever the source files change.

### npm run styleguide

Builds the styleguide.

### npm run eslint and npm run sasslint

Lint the code.

### npm run start

Opens a tab in your default browser and loads the Decanter styleguide on port 9000.

### npm run dev

This is a shortcut that runs the build, styleguide, watch and start scripts.

- - -

> **Please note:**
>
>  Grunt has been mostly deprecated in 5.0.0. Most of the build steps previously performed by grunt are now performed by the npm scripts listed above, several of which invoke webpack. You will want to migrate any integrations you have with grunt over to npm / webpack.

## SASS Compiler

Decanter comes bundled with a SASS compiler. Please use the bundled node-sass compiler for development of this product. If you are using other build systems please use at your own discretion. Decanter will not support compass or other Ruby-based compilers. 

## Package Managers

* NPM - Yes
* Composer - Yes

We are open to supporting others. Please submit a new issue or pull request if you have a new package manager in mind.
