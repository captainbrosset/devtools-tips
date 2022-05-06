---
date: 2021-08-30
authors: Patrick Brosset, Olivia Flynn
title: Visualize the screen reader order for elements within the page
tags: ["accessibility", "highlighter", "browser:edge", "browser:chrome"]
---
Edge has an [accessibility tab](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/accessibility/accessibility-tab) within the elements panel that, among other things, lets you visualize the order a screen reader will encounter elements on a page. This is determined by the order of elements in the HTML source code.

Users that can't view the screen may use a screen reader (e.g. Narrator, VoiceOver, NVDA) to consume the content of a page or focused element. If the order of the content read aloud is incorrect, it might give users a confusing experience. Incorrect ordering can occur if CSS is used to reorder elements visually in a way that is not reflected in the source order ([Examples here](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html)).

This tool adds a layer on the page that shows the order in which elements would be read (i.e. their source order).

* Go to the Elements tab
* Go to the Accessibility panel
* In the toolbar, check the "Show source order" box

![Screenshot of the source order viewer in Microsoft Edge, showing numbered boxes around elements](/assets/img/visualize-screenreader-order.png)

[Learn more about it here](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/accessibility/test-tab-key-source-order-viewer#analyzing-the-order-of-keyboard-access-through-sections-of-the-page).