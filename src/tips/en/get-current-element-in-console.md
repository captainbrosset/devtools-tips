---
date: 2021-06-17
authors: Patrick Brosset, Alex Lakatos, Kilian Valkhof
title: Get the selected element in the console
tags: ["console", "html", "productivity", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari", "browser:polypane"]
---
If you selected an element in the Elements panel (in Chrome, Safari, Polypane or Edge) or the Inspector panel (in Firefox), you can refer to it in the console using `$0`.

This shortcut will return the DOM node instance, which you can then use to do things like getting computed styles, or check DOM properties, etc.

Example: `getComputedStyles($0).display`.

![screenshot of safari's console showing how the $0 shortcut returns the selected elememt](/assets/img/get-current-element-in-console.jpg)

In Chrome, Polypane and Edge, the last 4 previously selected elements are additionally available as `$1`, `$2`, `$3` and `$4`. [Learn more here](/tips/en/get-current-element-in-console/).
