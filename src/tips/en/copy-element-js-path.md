---
date: 2022-07-22
authors: Patrick Brosset
title: Copy an element's JavaScript path
tags: ["javascript", "testing", "browser:edge", "browser:chrome"]
---
JavaScript often needs references to DOM nodes on the page. Getting a reference is sometimes easy with `document.getElementById()` or similar. Other times however, a more complicated CSS selector needs to be created and used with `document.querySelector()`.

To automatically get the right JavaScript expression to use for any node:

1. Find the node you are interested in in the **Elements** tool.
1. Right-click the node and select **Copy** > **Copy JS path**.
1. The right `document.querySelector()` expression is now in your clipboard. You can paste it anywhere you need it.

![The Elements tool in Edge showing the context menu on an element, with the Copy JS path option.](/assets/img/copy-element-js-path.png)
