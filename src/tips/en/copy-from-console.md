---
date: 2021-06-21
authors: Patrick Brosset, Alex Lakatos
title: Copy an object from the console
tags: ["console", "javascript", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
The console panel supports a very handy `copy()` function that stringifies and copies anything you pass to it as an argument, so you can then paste it somewhere else.

For example: `copy($$('a').map(a => a.href).join('\n'))` copies all of the links from the page.

![Screenshot of Chrome devtools' console with a line of code using the copy() function](/assets/img/copy-from-console.png)