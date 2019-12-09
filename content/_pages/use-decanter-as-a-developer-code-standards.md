---
title: Standards & Conventions
date: 2019-11-28T14:11:13.000Z
---
# Development Standards

## Variable Names
- No global prefix

## Mixins
- No global prefix
- Each should be in its own file

## CSS Class names
- Use a `su-` global prefix.

## Twig template comments
Add to the top of each twig file
Include a short description
Include a long description
Include details on each available parameter

```
TODO
```

## Spacing rules
Decanter includes a range of spacing types that impact a page's or an element’s appearance. Learn more about the rules, standards, and conventions related to spacing in Decanter on the [Spacing page](https://github.com/SU-SWS/decanter/wiki/Spacing).

### TODO

Developer Conventions

- Releases will be using semantic versioning
- Will be using npm
- Use css linting TBD on tests
- No global variables in function calls
- No globally overridden variables in partials
- Formatting conventions
  - https://sass-guidelin.es/#syntax--formatting
  - https://github.com/brigade/scss-lint
- Workflow
  - Master branch is master NO COMMITTING DIRECTLY
  - Releases go off master branch or a release branch
  - Following NPM semantic versioning
  - Everything is a pull request
  - Master should always be stable
  - Github issue queue to track issues and work
- .scss files not .sass
