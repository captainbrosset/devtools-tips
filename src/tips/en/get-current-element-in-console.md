---
date: 2021-06-17
authors: Patrick Brosset, Alex Lakatos
title: Get the selected element in the console
tags: ["console", "html", "productivity", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
If you selected an element in the Elements panel (in Chrome, Safari or Edge) or the Inspector panel (in Firefox), you can refer to it in the console using `$0`.

This shortcut will return the DOM node instance, which you can then use to do things like getting computed styles, or check DOM properties, etc.

Example: `getComputedStyles($0).display`.

![screenshot of safari's console showing how the $0 shortcut returns the selected elemet](/assets/img/get-current-element-in-console.jpg)