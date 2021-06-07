---
title: Get the selected element in the console
tags: ["console", "elements", "browser:edge", "browser:firefox", "browser:chrome"]
---
If you selected an element in the elements panel (in Chrome or Edge) or the inspector panel (in Firefox), you can refer to it in the console using `$0`.

This shortcut will return the DOM node instance, which you can then use to do things like getting computed styles, or check DOM properties, etc.

Example: `getComputedStyles($0).display`.
