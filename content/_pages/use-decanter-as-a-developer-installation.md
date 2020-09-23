---
title: Get Started
date: 2019-11-28T14:11:13.000Z
---
<p class="su-intro-text">So, you want to use Decanter in your project? Good choice! Here are a couple of options on how to integrate Decanter with your work.</p>

## I just need the static assets

You're in luck, Decanter has pre-compiled assets ready for you to add to your project. What you will need to do is the following

1. Download the latest release from https://github.com/SU-SWS/decanter/releases/
2. Copy the contents of `/core/dist` to where you store css, javascript, and file assets in your project.
3. Add the stylesheet (decanter.css) to the `<head>` of your html
4. Add the javascript (decanter.js) to the `<head>` or just below the `<body>` tag of your html
5. Profit!

<pre><code class="hljs">|
— core
  |— dist
    |— assets  <-- copy this to your project
    |— css     <-- copy this to your project
    |— js      <-- copy this to your project
  |— src
— examples
— package.json
— webpack.config.js
</code></pre>

6. Compile with ❤️

_example.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Decanter Static</title>
    <link rel="stylesheet" href="/css/decanter.css" />
  </head>
  <body>
    <section class="su-brand-bar">
      <div class="su-brand-bar__container">
        <a class="su-brand-bar__logo" href="https://stanford.edu">Stanford University</a>
      </div>
    </section>
    <h1>Welcome,</h1>
    <p>I should have Decanter styles.</p>

  <script src="/js/decanter.js"></script>
  </body>
</html>
```

## I'm using a package manager

**NPM - Recommended**

`npm i decanter`

**Composer**

`composer install su-sws/decanter`

## I'm using Grunt

We use the "~" convention when importing references from npm dependencies. You will need to make sure you have your \`includePaths\` option set to point to the node_modules directory and you will need the `[grunt-sass-tilde-importer](https://www.npmjs.com/package/grunt-sass-tilde-importer)` plugin. 

**Example Repository**: <https://github.com/SU-SWS/decanter-grunt-example/>

## I'm using my own SASS compiler

So, you've got grunt, gulp, or some other preferred tool for compiling your SASS. Cool, you can use some of the most powerful features of Decanter but you'll need to configure a few things. Before we can configure anything you will need to get the Decanter source files and we would recommend that you add Decanter to your project through NPM.

1. Get Decanter source files.

`npm i decanter`

2. Add Decanter.scss

Include the `decanter.scss` file in your work by importing `/core/src/scss/decanter.scss`. You should include Decanter SCSS files through a relative path from `node_modules`. You should import it after your configuration file so you may override the default variables in Decanter.

_example.scss roll up file_

```scss
@charset 'UTF-8';
@import 'my-config';
@import 'decanter/core/src/scss/decanter';
@import 'my-project-styles'
```

3. Make sure your sass include_path includes node_modules. eg: https://github.com/SU-SWS/decanter-web/blob/master/next.config.js#L24
4. Set the file path variables.
   When the CSS compiles you will need to have the image and font assets at a relative path to the css files so that they load. You can configure the path that is outputted in the css by setting the following variables.

`$su-image-path` & `$fa-font-path`;

_example.scss_

```scss
@charset 'UTF-8';
$su-image-path: "../assets"; // <-- Relative path to your css directory
$fa-font-path: "../assets"; // <-- Relative path to your css directory
```

5. Copy the assets to a relative path from your css output.
   All the image and file assets you will need are in `/core/dist/assets`. Copy them over to your project.

<pre><code class="hljs">|
— core
  |— dist
    |— assets  <-- copy this to your project
</code></pre>

## I want to use the twig templates

The twig templating system is a wonderful templating system. It has many amazing features and has both a PHP and Node/JS implementation so you can use it in your PHP or Node/JS based projects. All of our components are built from a Twig template and thus allow you to reuse the same core source we generate our markup from. You can find the templates at `/core/src/templates/`

<pre><code class="hljs">|
— core
  |— src
    |— templates
      |— components <-- This is where the goodies are
      |– core
      |- elements
      |- layout
</code></pre>

_Namespaces_
Twig allows you to use [namespaces](https://symfony.com/doc/4.1/templating/namespaced_paths.html) in your templates and we take full advantage of it. If you want to use the component templates as we do you will need to ensure your twig compiler has a `decanter` namespace pointed at the templates directory. Implementation will differ but here are a couple of examples.

**Drupal**
_module.info.yml_

```yml
component-libraries:
  decanter:
    paths:
      - decanter/core/src/templates
```

**Twig.js**
_example.js_

```js
const Twig = require('twig');

var options = {
  ...schema,
  settings: {
    'twig options': {
      namespaces: {
        decanter: "decanter/core/src/templates/"
      }
    }
  }
};

Twig.renderFile("/path/to/template.twig", options, (err, html) => {
  // html is the rendered html of the template and schema values.
});
```

## I'm using webpack

Our webpack configuration is a little complicated. You will need several plugins and loaders to accomplish a build. Check out this example file for a starting point.

https://github.com/SU-SWS/decanter-web/blob/master/webpack.config.js

_Resolve Aliases_
You will notice that this configuration has an alias for the Decanter assets and for the fontawesome assets. This allows webpack to move and re-write the paths to the static file assets. These resolve aliases are being standardized and this documentation will be updated then.

## I'm using Drupal

If you are using Drupal 8+ and would like to have Decanter in your project you can check out these projects.

**Themes**

* [Stanford Basic](https://github.com/su-sws/stanford_basic/)

**Modules**

* [Jumpstart UI](https://github.com/su-sws/jumpstart_ui/)

## I'm using Wordpress

Redwood theme coming soon...

## I'm using React, or Angular, or Vue.js

First off, very cool, secondly, things can get complicated. This package is currently not ideal for a CSS-In-JS type approach as it uses SASS with BEM for the styles. That said, this site is built with React on NextJS and we were able to quickly copy over some of the html and CSS into React components and it worked beautifully. We would love to hear about your use case and examples.
