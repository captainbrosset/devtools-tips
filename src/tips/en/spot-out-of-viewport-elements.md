---
date: 2022-06-02
authors: Patrick Brosset
title: Quickly spot out-of-viewport elements
tags: ["html", "css", "browser:edge"]
---

Sometimes, either by accident or on purpose, HTML elements end up outside of the visible browser viewport. When they do, it can be really hard to find them in DevTools. Indeed, the DOM tree in the **Elements** tool is nice and all, but it's not super easy to navigate especially when it's huge and deeply nested.

Here's a nice tip to quickly find out-of-viewport elements, by using the **3D View** tool in Edge DevTools:

* Open DevTools in Microsoft Edge (press <kbd>F12</kbd>).
* Open the **3D View** tool by clicking the **More tools** (**+**) button in the toolbar at the top and choosing **3D View**.
* In the left sidebar, choose the **DOM** tab.
* Zoom and pan the 3D scene to find out of viewport elements!

![A screenshot of Edge DevTools showing the Elements tool at the top with the DOM tree and the 3D View tool at the bottom, showing a 3D render of the page, with most elements in the same rectangle, and 2 smaller elements outside of the main rectangle](/assets/img/spot-out-of-viewport-elements.png)
