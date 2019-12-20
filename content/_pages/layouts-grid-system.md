---
title: Grid System
date: 2019-11-28T14:11:13.000Z
---
## Grid systems

There are now two grid systems available in this project, one of which is built with Flexbox and the other of which is built with CSS Grid. The systems can be used jointly or independently of each other, depending on your project's needs.

While the CSS Grid system is entirely new (and comes with new functions and mixins), the Flexbox system is an updated version of the previously used system. Therefore, only the Flexbox system requires an upgrade from the previous version. You are encouraged to explore the CSS Grid system for enhancement and usability in your
project.

### Flexbox grid system

While the available Flexbox grid system still remains a class-based system, the
class names have changed and are processed dynamically, using a combination of new
functions and mixins. These can be found `/core/src/scss/utilities/functions/flex/`
and `/core/src/scss/utilities/mixins/flex`, respectively.

Example: `grid--6-of-12` is now `flex-6-of-12`

#### Responsive classes

The grid includes five tiers of predefined classes for building complex responsive
layouts. You can customize the width of an element within the Flexbox grid on devices with a wide range of resolutions.

At the smallest breakpoint `xs`, all the predefined classes take up 100% width (12 out of 12 columns) of the parent container.

For an element that spans x out of 12 columns from the `sm` breakpoint and up, use the
`.flex-x-of-12` classes.

**Example:** If you want to produce a layout where a column spans two of the available 12 columns from `sm` breakpoint and up, you would do the following: `class="flex-2-of-12"`

For an element that spans x out of 12 columns from a particular breakpoint `bp` and up, use the `.flex-bp-x-of-12`classes where `bp` is one of `sm`, `md`, `lg`, `xl` and `2xl`. Note: `.flex-sm-x-of-12` behaves the same as `.flex-x-of-12`.

**Example:** If you wanted to produce a layout that would span two of the available
twelve columns from `lg` breakpoint and up, you would do the following: `class="flex-lg-2-of-12"`

#### Demo

<div class="layout">
    <header class="flex-container flex-container--row-gap">
        <div class="flex-12-of-12">
          <h5>.flex-12-of-12</h5>
          <p>12 of 12 for all except xs breakpoint</p>
        </div>
    </header>  
    <section class="flex-container flex-container--row-gap">
        <div class="flex-8-of-12">
            <h5>.flex-8-of-12</h5>
            <p>8 of 12 for all except xs breakpoint</p>
        </div>
  </section>
    <section class="flex-container flex-container--row-gap">
        <div class="flex-md-6-of-12">
            <h5>.flex-md-6-of-12</h5>
            <p>6 of 12 for md breakpoint and up</p>
        </div>
        <div class="flex-md-6-of-12">
            <h5>.flex-md-6-of-12</h5>
            <p>6 of 12 for md breakpoint and up</p>
        </div>
  </section>
    <footer class="flex-container flex-container--row-gap">
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
  </footer>
</div>

#### Markup

```html
<div class="layout">
    <header class="flex-container flex-container--row-gap">
        <div class="flex-12-of-12">
          <h5>.flex-12-of-12</h5>
          <p>12 of 12 for all except xs breakpoint</p>
        </div>
    </header>  
    <section class="flex-container flex-container--row-gap">
        <div class="flex-8-of-12">
            <h5>.flex-8-of-12</h5>
            <p>8 of 12 for all except xs breakpoint</p>
        </div>
  </section>
    <section class="flex-container flex-container--row-gap">
        <div class="flex-md-6-of-12">
            <h5>.flex-md-6-of-12</h5>
            <p>6 of 12 for md breakpoint and up</p>
        </div>
        <div class="flex-md-6-of-12">
            <h5>.flex-md-6-of-12</h5>
            <p>6 of 12 for md breakpoint and up</p>
        </div>
  </section>
    <footer class="flex-container flex-container--row-gap">
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
        <div class="flex-lg-4-of-12">
            <h5>.flex-lg-4-of-12</h5>
            <p>4 of 12 for lg breakpoint and up</p>
        </div>
  </footer>
</div>
```
