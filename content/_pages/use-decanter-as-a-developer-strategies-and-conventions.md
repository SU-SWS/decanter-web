---
title: Strategies & Conventions
date: 2019-11-28T14:11:13.000Z
---
<p class="su-intro-text">Decanter is designed to be flexible but we have a few strategies and conventions for you to use to be more successful in your work.</p>

## NVM

We include a `.nvmrc` file in our work and you should use it. This allows you to ensure that you are on the correct version of node and avoid any issues with version differences.
Check out https://github.com/nvm-sh/nvm/blob/master/README.md for more information on how to use it and how to configure it.

## Package Managers

We recommend that you use NPM and do not track the node_modules folder in your work.

## decanter.(scss|js) vs decanter-no-markup.(scss|js)

You have two options to include Decanter in to your work. Decanter.(js|scss) is for when you want everything including the default output created by the SCSS and JS files. Decanter-no-markup.(js|scss) is for when you want to include only the tools (functions, mixins, variables, classes) to use in your project and none of the default markup. This is useful for when you want to include Decanter and use the internal functionality without duplicating the output everywhere.

## Decanter SCSS Variable Overrides

Decanter provides all of the SCSS variables as `!default` variables. If you want to change the output of how Decanter renders for your project, you can do so by setting the value in your SCSS file prior to including `decanter.scss`

*eg: index.scss*
```scss
@charset 'UTF-8';
$su-color-white: #EEE;
@import 'decanter/core/src/scss/decanter';
```
