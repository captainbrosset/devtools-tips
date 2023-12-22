---
date: 2023-05-16
authors: Patrick Brosset
title: Customize the columns shown in console.table
tags: ["tip", "console", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari","browser:polypane"]
see-also: ["console-table-group-assert.md", "find-all-images-without-alt-text.md"]
---

The [`console.table`](./console-table-group-assert.md) method is great for displaying tabular data in the console, but what if the objects your're logging contain a lot of properties, causing a lot of columns to appear in the console?

For example, let's log all DOM elements on a page with `console.table($$("*"))`:

![Example of a console.table output in Chrome DevTools showing a lot of columns, making it hard to read each column header](../../assets/img/customize-console-table-columns.png)

You can actually customize the columns that are shown in the table by passing an array of strings as a second argument to `console.table()`. This array should contain the names of the properties you want to display.

Let's log all DOM elements on the page as before, but this time, let's pass an array containing just the few properties we want to display for each element: `console.table($$("*"), ["tagName", "id", "className"]);`:

![Example of a console.table output in Chrome DevTools showing just a few specific columns](../../assets/img/customize-console-table-columns-2.png)
