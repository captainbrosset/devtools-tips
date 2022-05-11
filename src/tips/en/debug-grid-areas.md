---
date: 2022-03-16
authors: Patrick Brosset
title: Debug CSS grid areas
tags: ["css", "browser:edge", "browser:chrome", "browser:firefox"]
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

DevTools in Firefox, Chrome, and Edge make it very easy to debug potential problems that may occur when making mistakes with the above syntax.

* Open the **Elements** panel (or **Inspector** panel in Firefox).
* Highlight a grid on your page that has named areas (you can use the **grid** badge in the DOM tree for example).
* Go to the **Layout** sidebar pane.
* Under the **Grid** section, check the **Show area names** box.

![Screenshot of Firefox, with a highlighted grid in the page showing the area names, and devtools below it with the "display area names" option checked](/assets/img/debug-grid-areas.png)
