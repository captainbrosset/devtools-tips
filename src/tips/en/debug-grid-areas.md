---
date: 2022-03-16
authors: Patrick Brosset, mirnovov
title: Debug CSS grid areas
tags: ["tip", "css", "browser:edge", "browser:chrome", "browser:safari", "browser:firefox"]
---
A really useful way to position elements on a CSS grid is using the [`grid-template-areas`](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas) property. With it, you can give names to various areas of your grid (potentially spanning multiple cells), and then simply position your elements by referring to those names.

The syntax for the `grid-template-areas` property is a bit special though. It consists in a series of strings where each corresponds to one row in the grid. For example:

```css
.container {
  grid-template-areas: "header  header"
                       "sidebar main  "
                       "sidebar footer";
}
```

DevTools makes it very easy to debug potential problems that may occur when making mistakes with the above syntax:

* Open the **Elements** tool (or **Inspector** tool in Firefox).
* Select an element from the page that defines a grid container with named areas (you can use the **grid** badge in the DOM tree to find grid containers).
* Open the **Layout** sidebar pane.
* Under the **Grid** section, enable the **Show area names** checkbox (named **Area Names** in Safari).

![Firefox showing a highlighted grid in the page showing the area names, and DevTools below it with the "display area names" option checked.](../../assets/img/debug-grid-areas.png)
