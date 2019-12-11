---
title: Accessibility
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/571

This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: https://ucomm.stanford.edu/policies/accessibility-policy.html.

If you have found an accessibility error or have a suggestion please create a ticket.

## Component Specific Information

### Site Navigation

* See "[About the Main Nav Component](https://github.com/SU-SWS/decanter/wiki/About-the-Main-Nav-Component)" for information on how we build our accessible navigation.

### Site Search

* We added a wrapper `<div>` with `role="search"` outside the `<form>` element instead of adding `role="search"` directly to the `<form>` element. The reason is that `<form>` elements explicitly have `role="form"`. If we add `role="search"` to it, we would be changing its default semantic.

https://github.com/SU-SWS/decanter/issues/563

# Building an Accessible Site Navigation

While many resources exist today on building an accessible website navigation menu, the truth is that there is still no perfect solution out there. In fact, one can often find conflicting ideas on this topic which can cause great confusion for developers. For example, developers might try to follow [W3C's "WAI-ARIA Authoring Practices"](https://www.w3.org/TR/wai-aria-practices/) when building their site navigations without knowing that the guidelines under ["Menu or Menu Bar"](https://www.w3.org/TR/wai-aria-practices/#menu) and ["Menu Button"](https://www.w3.org/TR/wai-aria-practices/#menubutton) are in fact meant for desktop web application menus and not website navigation menus.

When designing and building the Main Navigation component in Decanter, we want it to be accessible - it should support users (vision impaired or motor impaired) who use screen readers and/or keyboards to navigate websites. It also needs to provide site builders the option of having drop down submenus. Since there is no perfect "model" accessible site navigation out there, we had to come up with a logical solution that best meets our needs and our users' needs. We are documenting the research we did on this topic and the properties and behavior of this component below.

_Note:_

* _In the text that follows, **AT** stands for Assistive Technology (or Assistive Technologies)._

## Scope

The current scope of the Main Nav component as described on this page includes maximum 2 levels of menu links. One of the variants include a site search form for the mobile version when the Main Nav is expanded.

In the future, it is possible that we would include support for more than 2 levels of menu links and perhaps a mega menu component.

## Research

There are mainly two ways of handling accessible website navigation with drop down menus out there currently:

1. Involves the use of ARIA attributes that communicate to AT that the component is an application menu, eg, the ARIA roles `menu`, `menubar`, `menuitem` and the use of `aria-haspopup`. We will refer to this type of menus as "ARIA menus".
2. Does not involve the use of above ARIA attributes, but could have usage of other ARIA attributes such as `aria-expanded` which do not necessarily convey that the component is an application menu.

To create an actual usable ARIA menu (method #1), developers must follow very restrictive guidelines under ["Menu or Menu Bar"](https://www.w3.org/TR/wai-aria-practices/#menu). One cannot simply follow most of the guidelines and make a few exceptions. An ARIA menu can only include elements with roles `menuitem`, `menuitemcheckbox` (menu check boxes) or `menuitemradio` (menu radio buttons). If one choose to include something different, e.g., a search box, the menu is no longer a true ARIA menu and would cause issues for AT and make it unusable. An ARIA menu also allow only one single "tab stop" (focusable using the `Tab` key) for the whole menu and [does not allow users to use the Tab key to move through the individual links](https://www.w3.org/TR/wai-aria-practices/#kbd_general_within) which could be counterintuitive.

During our search for a good example solution, we found that the majority of existing website menus using the ARIA menu approach do not follow the guidelines strictly, including the widely used Bootstrap 2 drop down menu which was then adopted, with or without modifications, by many developers.

We also looked at the main menu on the [Stanford Identity Toolkit](https://identity.stanford.edu) website, since the menu has some similarities to the one that we are building. There are certain properties that we adopt from this menu - the click behaviors and some of the existing keyboard behaviors (`Escape`, `Enter`). However, there are also practices that we would like to move away from (the use of ARIA roles) and features that we want to add (e.g. more keyboard bindings).

## Our Approach

Since Decanter components are adopted by developers who would likely tweak them to fit specific projects' needs, due to the unforgiving nature of ARIA menus, we choose not to go with that approach. Instead, we implement our component as simply links organized in a nested `<ul>` structure inside the native `<nav>` element, and without the use of ARIA roles. However, we do include most, if not all, of the keyboard behaviors expected of ARIA menus so keyboard users can navigate the menu more conveniently. We also include some ARIA attributes that allow AT to communicate to the user if there is hidden content that needs to be expanded and any change of state of the elements (e.g., when a submenu is expanded or collapsed) within the component.

## WAI-ARIA Landmark, Roles, States, and Properties

### Main Menu

* The [first rule of ARIA use](https://www.w3.org/TR/using-aria/#rule1) states that developers should use native semantic HTML element over using ARIA attributes (e.g., role) whenever possible. Following this rule, we define our navigation landmark using the semantic HTML5 `<nav>` element. There is no need for an ARIA `role="navigation"` attribute since `<nav>` already communicates that this component has a role of navigation.
* Since there might be more than one navigation landmarks on a site (e.g., footer nav or sidebar nav), we add a unique label using `aria-label="main menu"` inside the `<nav>` tag of the Main Navigation component. If there are multiple Main Nav components on a page with different content, each should have a unique aria label.
* Note: Do not use the landmark role as part of the aria-label. For example, a `<nav>` landmark with a label "Main Navigation" will be announced by a screen reader as "Main Navigation Navigation".
* When a parent menu item (has submenu) is expanded/collapsed, the attribute `aria-expanded` is toggled `"true"` or `"false"` in the triggering element `<a>`.

### Menu Button (XS, SM & MD breakpoints)

* For browser width at max MD breakpoint or smaller, a "hamburger" menu button (HTML `<button>` element) is used to toggle the expand/collapse state of the main menu.
* We put the menu button inside the `<nav>` element since some AT allow users to skip directly to `<nav>` landmarks. For that reason, we do not want the `<nav>` element to be completely empty when the menu is hidden.
* We choose not to give the menu button an `aria-haspopup` attribute. When an `aria-haspopup` attribute is present, many AT interpret that as a button for an ARIA menu which has very restrictive specifications. Since we have a search form in one variants of our component and ARIA menus do not allow search forms, we choose to omit the `aria-haspopup` attribute. Also, the `aria-expanded` attribute should already communicate to AT that there is hidden content.
* When the main menu is collapsed, the menu button has `aria-expanded` set to `false` which communicates to AT that there is hidden content. When the button is activated, `aria-expanded` is set to `true` to communicate the change of state.

## Keyboard Behaviors

### Tab

* While on top level link, hitting `Tab/Shift-Tab` will focus on the next/previous top level link.
* While on a submenu link, hitting `Tab/Shift-Tab` will focus on next/previous same-level link. 
* If on the last link in a submenu, hitting `Tab` will close the submenu and place focus on the next top level link.

### Spacebar/Enter

* Hitting `Spacebar/Enter` on the mobile menu button will expand the menu (and site-search on a variant) and place focus on the first top level menu link. Also, the menu button text is changed from "Menu" (or other custom button label text) to "Close".
* Hitting `Spacebar/Enter` on a link that has submenu will open the submenu and place focus on the first submenu link.
* Hitting `Spacebar/Enter` on a regular link (not a submenu trigger) will take the user to the target link.

### Escape

* If a submenu is open and the focus is within the Main Nav component (any links, menu button, search form), hitting `Escape` closes the submenu. If the focus is on a submenu link, hitting `Escape` closes the submenu and return focus to its parent link.
* If on mobile and no submenus are open, if focus is within the Main Nav component, hitting `Escape` closes the mobile menu and return focus to the menu button. Also, the menu button text is changed from "Close" back to "Menu".

### Up Arrow

* On the desktop menu, while on a submenu link, hitting the `Up Arrow` will move focus to the previous submenu link. Allows wrapping from first to last submenu link.
* On the mobile menu, hitting the `Up Arrow` will move focus to the next same-level link. Allows wrapping from first to last same-level link.

### Down Arrow

* On the desktop menu, while on a top level parent link (has submenu), hitting the `Down Arrow` will open the submenu and place focus on the first submenu link.
* On the desktop menu, while on a submenu link, hitting the `Down Arrow` will move focus to the next submenu link. Allows wrapping from last to first submenu link.
* On the mobile menu, hitting the `Down Arrow` will move focus to the next same-level link. Allows wrapping from last to first same-level link.

### Right Arrow

* On the desktop menu, while on a top level link, hitting the `Right Arrow` will move focus to the next top level link. Allows wrapping from last to first top level link.
* While on a submenu link, hitting the `Right Arrow` will close the current submenu and move focus to the next top level link. If there is no next top level link (already the last top level link), it will move focus back to the first top level link in the menu.

### Left Arrow

* On the desktop menu, while on a top level link, hitting the `Left Arrow` will move focus to the previous top level link. Allows wrapping from first to last top level link.
* While on a submenu link, hitting the `Left Arrow` will close the current submenu and move focus to the previous top level link. If there is no previous top level link (already the first top level link), it will move focus to the last top level link in the menu.

### Home

* While on a top level link, hitting the `Home` key will move focus to the first top level link.
* While on a submenu link, hitting the `Home` key will move focus to the first same-level submenu link.

### End

* While on a top level link, hitting the `End` key will move focus to the last top level link.
* While on a submenu link, hitting the `End` key will move focus to the last same-level submenu link.

## Click Behaviors

* Clicking the mobile menu button will toggle the expand/collapse state of the menu (and site-search on a variant) . Also, the menu button text is changed between "Menu" (or custom button label text) and "Close".
* If a submenu is closed, clicking on its parent link will expand the submenu and close any other open submenus. If a submenu is expanded, clicking on its parent link will close the submenu.
* On desktop, when a submenu is open, clicking anywhere on the page will close the submenu.

## Variant With Site Search

* There is a variant of the Main Nav component that includes the site search in XS, SM and MD breakpoint ranges.
* Since the primary function of the Main Nav component is to provide a list of links for users to navigate around the site, even though visually the site search is above the links when the mobile menu is expanded, when a user opens the submenu, focus is placed on the first link item instead of on the site search. 
* When a user is on the last top level menu link, hitting `Tab` will move focus to the site search.

## Resources

* https://www.levelaccess.com/challenges-mega-menus-standard-menus-make-accessible/
* https://www.w3.org/TR/wai-aria-practices/
* https://a11y-style-guide.com/style-guide/section-navigation.html
* http://adobe-accessibility.github.io/Accessible-Mega-Menu/
* https://inclusive-components.design/menus-menu-buttons/
* https://www.marcozehe.de/2018/09/22/wai-aria-menus-and-why-you-should-generally-avoid-using-them/
* http://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
* https://identity.stanford.edu/


### More Documentation

**Accessibility practices across Stanford:** \
[Stanford Online Accessibility Policy](https://ucomm.stanford.edu/policies/accessibility-policy/)\
[Stanford's Accessibility Guidelines website](https://soap.stanford.edu/)

(_Note: these folders are available to Stanford users only._)
