---
title: Accessibility
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/571

This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: https://ucomm.stanford.edu/policies/accessibility-policy.html.

If you have found an accessibility error or have a suggestion please create a ticket.

# Component Specific Information

## Site Navigation

* See "[About the Main Nav Component](https://github.com/SU-SWS/decanter/wiki/About-the-Main-Nav-Component)" for information on how we build our accessible navigation.

## Site Search

* We added a wrapper `<div>` with `role="search"` outside the `<form>` element instead of adding `role="search"` directly to the `<form>` element. The reason is that `<form>` elements explicitly have `role="form"`. If we add `role="search"` to it, we would be changing its default semantic.

## More Documentation

Accessibility practices across Stanford: \
[Stanford's Accessibility Guidelines website](https://soap.stanford.edu/)

(_Note: these folders are available to Stanford users only._)
