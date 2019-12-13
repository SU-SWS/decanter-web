---
title: Typography
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/575

## Fonts

The following fonts are recommended for use on Stanford websites. Our primary fonts are Source Sans Pro and Source Serif Pro.

### Source Sans Pro

Source Sans Pro is our primary sans-serif font. It should be used in headings and body text as the primary sans-serif font on your website. When Sources Sans Pro is not available, we have a fallback sans-serif font stack with Helvetica Neue, Helvetica and Arial.

<section class="typography">
<h3>The quick brown fox jumps over the lazy dog</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur mi, non accumsan sapien porttitor in. Cras dapibus non mauris eu lacinia. Vestibulum congue, nisl a hendrerit egestas, erat eros vulputate sem, sit amet ullamcorper ligula magna sed est. Donec leo orci, laoreet id faucibus vitae, rhoncus sit amet diam.</p>
</section>

#### Available Variants
<section class="typography">
  <div style="font-weight: 300;">Light | font-weight: 300</div>
  <div style="font-weight: 300" class="italic">Light Italic</div>
  <div >Regular | font-weight: 400</div>
  <div class="italic">Regular Italic</div>
  <div class="font-semi-bold">Semi-Bold | font-weight: 600</div>
  <div class="font-semi-bold italic">Semi-Bold Italic</div>
  <div class="font-bold">Bold | font-weight: 700</div>
  <div class="font-bold italic">Bold Italic</div>
  <div class="font-black">Black | font-weight: 900</div>
  <div class="font-black italic">Black Italic</div>
</section>

#### How to Use
Use the Decanter sans-serif font stack by applying the <code>@sans</code> SCSS mixin or using the <code>$su-font-sans</code> SCSS variable, or by adding the class name <code>.su-sans</code> to your element.

### Source Serif Pro
Source Serif Pro is our primary serif font. It should be used in headings and body text as the primary serif font on your website. When Sources Sans Pro is not available, we have a fallback serif font stack with Georgia, Times and Times New Roman.

<section class="typography su-serif">
<h3>The quick brown fox jumps over the lazy dog</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur mi, non accumsan sapien porttitor in. Cras dapibus non mauris eu lacinia. Vestibulum congue, nisl a hendrerit egestas, erat eros vulputate sem, sit amet ullamcorper ligula magna sed est. Donec leo orci, laoreet id faucibus vitae, rhoncus sit amet diam.</p>
</section>

#### Available Variants
<section class="typography su-serif">
  <div style="font-weight: 300;">Light | font-weight: 300</div>
  <div style="font-weight: 300" class="italic">Light Italic</div>
  <div >Regular | font-weight: 400</div>
  <div class="italic">Regular Italic</div>
  <div class="font-semi-bold">Semi-Bold | font-weight: 600</div>
  <div class="font-semi-bold italic">Semi-Bold Italic</div>
  <div class="font-bold">Bold | font-weight: 700</div>
  <div class="font-bold italic">Bold Italic</div>
  <div class="font-black">Black | font-weight: 900</div>
  <div class="font-black italic">Black Italic</div>
</section>

#### How to Use
Use the Decanter serif font stack by applying the <code>@serif</code> SCSS mixin or using the <code>$su-font-serif</code> SCSS variable, or by adding the class name <code>.su-serif</code> to your element.

### Roboto Slab
Roboto Slab is a secondary font. It should only be used as a display font - it is not appropriate for blocks of text.

<section class="typography su-slab">
<h3>The quick brown fox jumps over the lazy dog</h3>
</section>

#### Available Variants
<section class="typography su-slab">
  <div style="font-weight: 300;">Light | font-weight: 300</div>
  <div style="font-weight: 300" class="italic">Light Italic</div>
  <div >Regular | font-weight: 400</div>
  <div class="italic">Regular Italic</div>
  <div class="font-bold">Bold | font-weight: 700</div>
  <div class="font-bold italic">Bold Italic</div>
</section>

#### How to Use
Use the Decanter slab font stack by applying the <code>@slab</code> SCSS mixin or using the <code>$su-font-slab</code> SCSS variable, or by adding the class name <code>.su-slab</code> to your element.

### Kalam (Handwriting)
Kalam is a secondary font. It should only be used as a display font - it is not appropriate for blocks of text.

<section class="typography su-handwriting">
<h3>The quick brown fox jumps over the lazy dog</h3>
</section>

#### Available Variants
<section class="typography su-handwriting">
  <div style="font-weight: 300;">Light | font-weight: 300</div>
  <div style="font-weight: 300" class="italic">Light Italic</div>
  <div >Regular | font-weight: 400</div>
  <div class="italic">Regular Italic</div>
  <div class="font-bold">Bold | font-weight: 700</div>
  <div class="font-bold italic">Bold Italic</div>
</section>

#### How to Use
Use the Decanter handwriting font stack by applying the <code>@handwriting</code> SCSS mixin or using the <code>$su-font-handwriting</code> SCSS variable, or by adding the class name <code>.su-handwriting</code> to your element.

### Noto Sans Devanagari (Sanskrit) Subset
Noto Sans should only be used when Sanskrit font support is needed.

#### How to Use
Use the Decanter handwriting Sanskrit font by applying the <code>@sanskrit</code> SCSS mixin or using the <code>$su-font-sanskrit</code> SCSS variable, or by adding the class name <code>.su-sanskrit</code> to your element.

## Typography Styles

Default typography styling for base HTML typography elements, including paragraphs and headings. Also includes special type treatment classes such as splash font and lead font.

### Paragraph Font
Default body paragraph font uses <strong>Source Sans Pro</strong>. Font size is <strong>19px</strong> for the <code>2xl</code> breakpoint, <strong>18px</strong> for <code>md</code>, <code>lg</code> and <code>xl</code> breakpoints and <strong>16px</strong> for <code>xs</code> and <code>sm</code> breakpoints.

<section class="typography">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur mi, non accumsan sapien porttitor in. Cras dapibus non mauris eu lacinia. Vestibulum congue, nisl a hendrerit egestas, erat eros vulputate sem, sit amet ullamcorper ligula magna sed est. Donec leo orci, laoreet id faucibus vitae, rhoncus sit amet diam.</p>
</section>

### Splash Font
Extra large display font style for hero area.

<section class="typography">
<p class="su-font-splash">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@font-splash</code> SCSS mixin, or by adding the class name <code>.su-font-splash</code> to your element.

### Display Type A
Display font style (also used for default Decanter <code>h1</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-a">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-a</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-a</code> to your element. If you import the Decanter core styles in your project, default <code>h1</code> headings already takes on this style.

### Display Type B
Display font style (also used for default Decanter <code>h2</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-b">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-b</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-b</code> to your element. If you import the Decanter core styles in your project, default <code>h2</code> headings already takes on this style.

### Display Type C
Display font style (also used for default Decanter <code>h3</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-c">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-c</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-c</code> to your element. If you import the Decanter core styles in your project, default <code>h3</code> headings already takes on this style.

### Display Type D
Display font style (also used for default Decanter <code>h4</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-d">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-d</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-d</code> to your element. If you import the Decanter core styles in your project, default <code>h4</code> headings already takes on this style.

### Display Type E
Display font style (also used for default Decanter <code>h5</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-e">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-e</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-e</code> to your element. If you import the Decanter core styles in your project, default <code>h5</code> headings already takes on this style.

### Display Type F
Display font style (also used for default Decanter <code>h6</code> headings). Could be applied to other elements.

<section class="typography">
<p class="su-type-f">Lorem ipsum dolor sit amet. Nullam vestibulum consectetur mi.</p>
</section>

#### How to Use
Apply this font style by using the <code>@type-f</code> and <code>@types</code> SCSS mixins together, or by adding the class name <code>.su-type-f</code> to your element. If you import the Decanter core styles in your project, default <code>h6</code> headings already takes on this style.

### Subheading
Font style used for subheadings.

<section class="typography">
<p class="su-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@subheading</code> SCSS mixin, or by adding the class name <code>.su-subheading</code> to your element.

### Intro Text
Font style used for intro text/lede/teaser.

<section class="typography">
<p class="su-intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@intro-text</code> SCSS mixin, or by adding the class name <code>.su-intro-text</code> to your element.

### Quote Text
Font style used for quotes.

<section class="typography">
<p class="su-quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@quote-text</code> SCSS mixin, or by adding the class name <code>.su-quote-text</code> to your element.

### Caption
Font style used for captions for images, videos, charts, etc.

<section class="typography">
<p class="su-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@caption</code> SCSS mixin, or by adding the class name <code>.su-caption</code> to your element.

### Credits
Font style used for credits for images, video, charts, etc.

<section class="typography">
<p class="su-credits">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@credits</code> SCSS mixin, or by adding the class name <code>.su-credits</code> to your element.

### Big Paragraph
Font style that is slightly larger than the default body font at non-mobile breakpoints.

<section class="typography">
<p class="su-big-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@big-paragraph</code> SCSS mixin, or by adding the class name <code>.su-big-paragraph</code> to your element.

### Small Paragraph
Font style that is slightly smaller than the default body font at non-mobile breakpoints.

<section class="typography">
<p class="su-small-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

#### How to Use
Apply this font style by using the <code>@small-paragraph</code> SCSS mixin, or by adding the class name <code>.su-small-paragraph</code> to your element.