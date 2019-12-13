---
title: Grid System
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/576

### Grid Systems

There are now two grid systems available in this project, one of which is built
with Flexbox and the other of which is built with CSS Grid. The systems can be
used jointly or independently of each other, depending on your project's
needs.

While the CSS Grid system is entirely new (and comes with new functions and mixins),
the Flexbox system is an updated version of the previously used system. Therefore,
only the Flexbox system requires an upgrade from the previous version. You are
encouraged to explore the CSS Grid system for enhancement and usability in your
project.

#### Flexbox Grid System

While the available Flexbox grid system still remains a class-based system, the
class names have changed and are processed dynamically, using a combination of new
functions and mixins. These can be found `/core/src/scss/utilities/functions/flex/`
and `/core/src/scss/utilities/mixins/flex`, respectively.

Example: `grid--6-of-12` is now `flex-6-of-12`

##### Responsive Classes

The grid includes five tiers of predefined classes for building complex responsive
layouts. You can customize the size of your columns (or items inside of your columns)
on small, medium, large, extra large, or extra extra large devices.

For grids that are the same from the smallest of devices to the largest, use the
`.flex-*-of-*`and `.flex-*-*-of-*`classes. Specify a numbered class when you need
a particularly sized column; otherwise, feel free to stick to `.flex-*-of-*`.

Example: if you want to produce a layout where a column spans two of the available
twelve columns at every breakpoint, you would do the following: `class="flex-2-of-12"`

If you wanted to produce a layout that would span two of the available
twelve columns, you would do the following: `class="flex-lg-2-of-12 flex-xl-2-of-12 flex-2xl-2-of-12"`

###### Example: Basic 

<div class="layout ">
    <header class="flex-container centered-container">
    <div class="flex-12-of-12">
      <h1>Header</h1>
    </div>
  </header>
  
    <section class="flex-container centered-container">
    <div class="flex-12-of-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
  
    <footer class="flex-container centered-container">
    <div class="flex-12-of-12">
      <h6>This is the footer</h6>
    </div>
  </footer>
  
</div>

```
<div class="layout ">
    <header class="flex-container centered-container">
    <div class="flex-12-of-12">
      <h1>Header</h1>
    </div>
  </header>
  
    <section class="flex-container centered-container">
    <div class="flex-12-of-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
  
    <footer class="flex-container centered-container">
    <div class="flex-12-of-12">
      <h6>This is the footer</h6>
    </div>
  </footer>
  
</div>
```

##### Pushing Columns

You can now push grid columns with responsive classes. The classes are sized to
match columns.

Example: `.flex-push-xs-5`
