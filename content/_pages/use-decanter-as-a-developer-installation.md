---
title: Get Started
date: 2019-11-28T14:11:13.000Z
---
<p clas="su-intro-text">So, you want to use Decanter in your project? Good choice! Here are a couple of options on how to integrate Decanter with your work.</p>

## I just need the static assets

You're in luck, Decanter has pre-compiled assets ready for you to add to your project. What you will need to do is the following

1. Download the latest release from https://github.com/SU-SWS/decanter/releases/
2. Copy the contents of `/core/dist` to where you store css, javascript, and file assets in your project.
3. Add the stylesheet (decanter.css) to the `<head>` of your html
4. Add the javascript (decanter.js) to the `<head>` or just below the `<body>` tag of your html
5. Profit!

## I'm using a package manager

**NPM - Recommended** 

`npm i decanter`

**Composer**

`composer install su-sws/decanter`


## I'm using my own SASS compiler
TBD

## I want to use the twig templates
TBD

## I'm using webpack
Our webpack configuration is a little complicated you may say. 

## I'm using Drupal 
If you are using Drupal 8+ and would like to have Decanter in your project you can check out these projects.

**Themes**
* [Stanford Basic](https://github.com/su-sws/stanford_basic/)

**Modules**
* [Jumpstart UI](https://github.com/su-sws/jumpstart-ui/)

## I'm using Wordpress

Redwood theme coming soon... 

## I'm using React, or Angular, or Vue.js

First off, very cool, secondly, things can get complicated. This package is currently not ideal for a CSS-In-JS type approach as it uses SASS with BEM for the styles. That said, this site is built with React on NextJS and we were able to quickly copy over some of the html and CSS into React components and it worked beautifully. We would love to hear about your use case and examples.
