---
date: 2022-04-20
authors: Patrick Brosset
title: Visualize and debug CSS cascade layers
tags: ["css", "browser:chrome", "browser:edge", "browser:firefox", "browser:safari"]
---

CSS cascade layers is a CSS feature that allows web developers to define their CSS styles in multiple layers and control the order in which they apply. Cascade layers are meant to bring an elegant solution to problems we've historically been fixing by using `!important` or artificially making selectors have higher specificity.

If you want to learn more about cascade layers, check out [Miriam Suzanne's complete guide on CSS Tricks](https://css-tricks.com/css-cascade-layers/), but here let's see how we can visualize and debug layers in DevTools.

Safari, Firefox, Chrome, and Edge all have support for layers in their **Styles**/**Rules** panels.

### All browsers

1. Open a page that uses cascade layers like [this one](https://codepen.io/web-dot-dev/full/LYzqPEp).
1. Inspect an element which has styles defined in one of the cascade layers like one of the green links in the above demo.
1. In the sidebar where CSS rules are displayed, rules are sorted by cascade layers, with the highest priority layers at the top, and lowest priority at the bottom.
1. Rules that are part of a cascade layer have a `@layer <layername>` label above them.

![Screenshot of Firefox, with a demo page that uses layers and devtools opened, showing the Rules panel with 2 @layer rules](/assets/img/debug-css-cascade-layers-firefox.png)

### Only Edge and Chrome

On top of the above, Edge and Chrome have a layers view:

1. Open a page that uses cascade layers like [this one](https://codepen.io/web-dot-dev/full/LYzqPEp).
1. Inspect an element which has styles defined in one of the cascade layers like one of the green links in the above demo.
1. Click **Toggle CSS layers view** in the **Styles** panel toolbar (next to the search field) to reveal the list of layers.

![Screenshot of Edge, with a demo page that uses layers and devtools opened, showing the Rules panel with 2 @layer rules and the layers view](/assets/img/debug-css-cascade-layers-edge.png)
