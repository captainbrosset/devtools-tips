---
date: 2021-06-29
authors: Patrick Brosset
title: Visualize the tabbing order on the page
tags: ["accessibility", "highlighter", "browser:firefox"]
---
Firefox has a dedicated [accessibility inspector panel](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) that, among other things, lets you visualize the tabbing order on a page.

Users who do not or can't use a mouse or trackpad can use the tab key to navigate through focusable elements on the page. If the order in which those elements get focused is incorrect, this might give users a confusing experience.

This tool adds a layer on the page that shows the order in which elements would become focused.

* Go to the Accessibility panel
* In the toolbar, check the "Show Tabbing Order" box

![Screenshot of the tabbing order highlighter in Firefox, showing numbered boxes around focusable elements](/assets/img/visualize-tabbing-order.png)

[Learn more about it here](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector#show_web_page_tabbing_order).