---
date: 2021-10-29
authors: Patrick Brosset, Alex Lakatos
title: See the page in 3D
tags: ["html", "css", "browser:edge", "browser:safari", "browser:chrome"]
---
See your page in 3 dimensions to quickly find out how deeply nested it is, fix z-index stacking issues, and performance issues.

### In Edge

* Open the Command Menu by pressing <kbd>ctrl+shift+P</kbd> (or <kbd>cmd+shift+P</kbd> on macOS).
* Type "3D" and press <kbd>Enter</kbd>. The **3D View** tool opens up.
* In the tool, choose which 3D mode you want to use: **Z-index** (to visualize the stacking context tree), DOM (to visualize DOM nesting), and **Composited Layers** (to visualize the layers created by the browser engine to paint the page in separate chunks).

![The 3D view tool showing a page's z-index stacking tree as a 3d scene.](../../assets/img/see-the-page-in-3d.png)

### In Chrome or Safari

Chrome and Safari also have a **Layers** tool that provides the same information as Edge's Composited Layers 3D mode.

You can learn more about Edge's **3D View** tool in this video:

https://www.youtube.com/watch?v=BZAH8ZXhHZA
