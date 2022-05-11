---
date: 2021-10-23
authors: Patrick Brosset
title: Store a node as a variable to use it in the console
tags: ["html", "console", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
If you want to use a DOM node from the page in the console:

* Right-click the node in the **Elements** (or **Inspector** in Firefox).
* Click on **Store as global variable** (or **Use in Console** in Firefox).

The **Console** opens up, pre-filled with a new variable name (something like `temp1`) which you can use to refer to the node any time you want.

Note that if you only want to refer to the currently selected node (and not create a new variable), you can also [use `$0` in the console](/tips/en/get-current-element-in-console).

![screenshot of firefox's "use in console" context menu option in the Inspector, and also showing the Console with a couple of tempN variables](/assets/img/store-node-as-variable.png)

Thank you [Austin Gil](https://austingil.com/) for sharing this tip on [Twitter](https://twitter.com/Stegosource/status/1451294683024355328)!
