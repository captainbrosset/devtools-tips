---
date: 2021-06-21
authors: Patrick Brosset
title: Edit clip-path and shape-outside CSS properties by dragging points in the page
tags: ["css", "highlighter", "browser:firefox"]
---
The [`clip-path` property](https://developer.mozilla.org/docs/Web/CSS/clip-path) is a great way to change the final shape of an element and give it the shape that you want.\
You can use this property to make an element be a circle, an ellipse, a polygon or any shape that can be described with an [SVG path](https://developer.mozilla.org/docs/Web/SVG/Tutorial/Paths).

The [`shape-outside` property](https://developer.mozilla.org/docs/Web/CSS/shape-outside) is similar in that you can define a shape, but it's useful to float other content around an element, along that shape.

In Firefox, you can freely edit the polygon, circle or ellipse types of shapes with the mouse, by dragging points around in the page.

* Select an element that has a `clip-path` or `shape-outside` property applied.
* In the Rules sidebar (in the Inspector panel), the `clip-path` property will have a little shape icon. Click on this icon.
* The shape now gets highlighted in the page, with control points.
* Click-and-drag any of these points to change the shape to your likings.

[Learn more about this tool here](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)

![Gif demo of the shape editor in firefox, clicking on the Rules panel icon, and then moving points around in the page](/assets/img/edit-clip-path-shape-outside.gif)