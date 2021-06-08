---
title: Find DOM elements from the console
tags: ["console", "html", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
`$` and `$$` are 2 functions you can use in the console to find elements in the page.

They are essentially shortcuts to the longer `document.querySelector()` and `document.querySelectorAll()` functions, but `$$` returns an array instead of a `NodeList`.

They're nice and short, and for those who worked with jQuery, they will feel familiar.
