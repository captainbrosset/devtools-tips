---
title: Copy an object from the console
tags: ["console", "javascript", "browser:edge", "browser:firefox", "browser:chrome"]
---
The console panel supports a very handy `copy()` function that stringifies and copies anything you pass to it as an argument, so you can then paste it somewhere else.

For example: `copy($$('a').map(a => a.href).join('\n'))` copies all of the links from the page.
