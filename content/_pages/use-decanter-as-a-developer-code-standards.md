---
title: Code Standards
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/586



Also: markdown testing

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

- - -

- - -

- - -

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:
    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

Loose lists?

* foo
* bar

## Code

Inline `code`

Indented code

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var dec = function (dac) {
  return duck++;
};

console.log(foo(5));
```

## Links

[Decanter](https://decanter.stanford.edu/ "Design System")

Autoconverted link https://github.com/rexxars/react-markdown

[Link references](https://reactjs.org "React, A JavaScript library for building user interfaces")

## Images

![React Markdown](https://espen.codes/assets/projects/react-markdown/320x180.png)
![Mead](https://espen.codes/assets/projects/mead/320x180.png "Mead, on-the-fly image transformer")

Like links, Images also have a footnote style syntax

!\[Alt text]

With a reference later in the document defining the URL location:

## Hard breaks

Yeah, hard breaks\
can be useful too.

## HTML entities

Some characters, like &aelig;, &amp; and similar should be handled properly.

## HTML

Does anyone actually like the fact that you can embed HTML in markdown?

<iframe
  src="https://foo.bar/"
  width="640"
  height="480"
/>

We used to have a known bug where inline HTML wasn't handled well. You can do basic tags like
<code>code</code>, as long as it doesn't contain any <span className="attrs">attributes</span>. If you
have weird ordering on your tags, it won't work either. It does support <strong>nested
<em>tags</em>, however</strong>. And with the <code className="name">html-parser</code> plugin, it can now properly handle HTML! Which is pretty sweet.

<hr /><hr />

Cool, eh?
