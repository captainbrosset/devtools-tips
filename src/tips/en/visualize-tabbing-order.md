---
date: 2021-06-29
authors: Patrick Brosset, Kilian Valkhof
title: Visualize the tabbing order on the page
tags: ["tip", "accessibility", "highlighter", "browser:firefox", "browser:polypane"]
---


Users who do not or can't use a mouse or trackpad can use the tab key to navigate through focusable elements on the page. If the order in which those elements get focused is incorrect, this might give users a confusing experience.

In Firefox:

Firefox has a dedicated [accessibility inspector panel](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) that, among other things, lets you visualize the tabbing order on a page.

This tool adds a layer on the page that shows the order in which elements would become focused.

* Go to the Accessibility panel
* In the toolbar, check the "Show Tabbing Order" box

![The tabbing order highlighter in Firefox, showing numbered boxes around focusable elements.](../../assets/img/visualize-tabbing-order.png)

[Learn more about it here](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector#show_web_page_tabbing_order).

In Polypane:

Polypane has an **outline panel** that, among other things, lets you visualize the focus (tabbing) order on a page.

This tool shows the tabbing order in a list that also warns you about issues with non-interactive elements, wrong tabindices and when the tab order is illogical for the current reading direction. The current active element is shown with an arrow.

Click **Show overlay** to add a layer to the page that draws a line from each element to the next, to make it easy to follow.

![The tabbing order highlighter in Polypane, showing numbered boxes and a line going from each focusable element to the next.](../../assets/img/visualize-tabbing-order-polypane.png)

[Learn more about it here](https://polypane.app/docs/outline-panel/#focus-order-tab-order).
