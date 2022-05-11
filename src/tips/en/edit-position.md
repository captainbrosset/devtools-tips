---
date: 2021-07-19
authors: Patrick Brosset
title: Edit CSS absolute and relative positions by dragging points in the page
tags: ["css", "highlighter", "browser:firefox"]
---
Firefox features a position editor that lets you move elements in the page by drag and drop. This works with elements that are positioned in CSS with `position:relative` or `position:absolute` and that have at least one of `top`, `right`, `bottom` and `left` defined.

* Select an element with `position:relative` or `position:absolute` applied to it in the Inspector panel.
* Open the Layout sidebar panel, and scroll down to the Box Model section.
* Find the "Edit Position" icon and click it.
* Use the handles in the page to move the element around, within its positioned ancestor.

[Learn more about this tool here](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Reposition_elements_in_the_page)

![Gif demo of the geometry editor in firefox, toggling it from the Layout panel, and then dragging top and left points to move the element in the page](/assets/img/edit-position.gif)