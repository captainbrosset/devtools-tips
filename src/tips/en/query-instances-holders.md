---
date: 2022-01-10
authors: Patrick Brosset
title: Query object instances and holders from the console
tags: ["console", "perf", "browser:safari"]
---
All browser DevTools have a few built-in functions in the console to do things like [get the current element](/tips/en/get-current-element-in-console/), or [copy a string](/tips/en/copy-from-console/). But Safari exposes 2 nice built-in functions:

* `queryInstances`
* `queryHolders`

These two functions are really useful when your site starts using a lot of JavaScript objects. In some situations, it may become difficult to keep track of the dependencies between these objects, and memory leaks may start to appear, too.

If `app.TodoItem` is a JavaScript class in your application, then `queryInstances(app.TodoItem)` will return an array of all of its instances.

![Screenshot of the console in Safari, showing the result of queryInstances(app.TodoItem)](/assets/img/query-instances-holders-1.png)

Or if you want to know what refers to the object you're debugging, use `queryHolders(this)`, which will return an array of all the other objects that have references to `this`.

![Screenshot of the console in Safari, showing the result of queryHolders(this)](/assets/img/query-instances-holders-2.png)

Learn more about these, and other, built-in functions [here](https://webkit.org/web-inspector/console-command-line-api/#functions).
