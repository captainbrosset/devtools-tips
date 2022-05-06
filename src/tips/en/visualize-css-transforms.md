---
date: 2021-12-06
authors: Patrick Brosset
title: Visualize the effect of CSS transforms
tags: ["css", "highlighter", "browser:firefox"]
---
CSS transforms can sometimes be hard to wrap your head around, especially when chaining multiple transformations.

Firefox helps with a cool visualization tool that allows you to see how and where the element was before being transformed, **and** how it is now.

Being able to compare the 2 states at the same time makes it easier to debug your `transform` CSS properties.

* Select the transformed element in the **Inspector**.
* Find the `transform` property in the **Rules** sidebar panel.
* Hover over the property value.
* The on-page highlighter appears.

![GIF animation showing how the CSS transform highlighter appears on the page when hovering over a transform CSS property in the Rules panel](/assets/img/visualize-css-transforms.gif)

[Learn more about it here](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Visualize_transforms).
