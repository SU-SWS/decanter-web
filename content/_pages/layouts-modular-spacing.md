---
title: Modular Spacing
date: 2019-11-28T14:11:13.000Z
---
Decanter includes a range of spacing types that impact a page's or an element’s appearance. These spacing types are: gutters, screen edge, element spacing, vertical rhythm, and typography scale.

## Gutters

Gutters are the gaps between cells in a grid layout – not including the outside edge – and are set at each breakpoint. Gutter values are curated and do not mathematically scale.

![Grid layouts](/img/53123308-9b6d7680-350d-11e9-8f3f-efc58e2b2f8b.png)

![Grids](/img/53123313-9dcfd080-350d-11e9-8bfd-bd21c89d86b9.png)

![XXL Grids](/img/53123314-9f00fd80-350d-11e9-9b49-800d9296a858.png)

### Developer notes

Config is stored in a SASS map.

**Namespace:** `flex_`, `grid_`, or `gutter_`

## Screen edge

Screen edge is the minimal amount of space between the outside edge of a layout and the window frame. Its margins are set at each breakpoint, up to and not including the biggest breakpoint (`2XL`). The total width of the 12 column grid is not fixed at each breakpoint, but rather expands as the viewport expands, with the exception of the `2XL` breakpoint, which is a centered beginning at `1700px` (`1500px` breakpoint plus `100px` margin on each side). Screen edge values are curated and do not mathematically scale.

![Screen Edge](https://user-images.githubusercontent.com/8933670/53132051-53594e80-3523-11e9-84c5-8d7290e36089.png)

### Developer notes

Config is stored in a SASS map.

**Namespace:** `screen_`

## Element spacing

Element spacing is the space between elements within a component. This spacing can be between several elements, or between an element and the edge of the component's container. The values are set at each breakpoint and scale off of a set base value, which are set at each breakpoint. Element spacing values are curated and do not mathematically scale.

![Element Spacing](https://user-images.githubusercontent.com/8933670/53123740-9d840500-350e-11e9-9507-23a4f2bb54f0.png)

### Developer notes

There are 10 scale ratios: 0.1666666, 0.3333, 0.5, 0.6666, 1, 1.4444, 2, 2.5, 4, 6

Config is stored in three SASS maps.

**Namespace:** `modular_spacing`

## Vertical rhythm

Vertical rhythm is the amount of space between the baseline of a text element and the next element. The values are set for each heading level at each breakpoint. The values are determined by a calculation of the relative font size for the text element multiplied by the corresponding breakpoint scale value.

### Developer notes

The scale value is set in a SASS map.

**Namespace:** `typography_`

## Typography scale

While not directly related to whitespace, Typography scale is a sizing system that is related to vertical rhythm. 

The amount a text element's font size scales is a fixed ratio. Typography scale follows the [Bourbon `modular-scale` mixin](https://www.bourbon.io/docs/5.1.0/#modular-scale) formula with a 1.25 scale ratio between each step. Typography scale is bi-directional, as font sizes can scale up or down, and is not dependent on breakpoints.

![Typography Scale](https://user-images.githubusercontent.com/8933670/53123612-51d15b80-350e-11e9-92ef-adbe4757c287.png)

### Developer notes

The scale ratio is set in a single SASS variable.

**Namespace:** `modular_typography_`
