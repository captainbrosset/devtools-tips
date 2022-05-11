---
date: 2021-09-22
authors: Patrick Brosset
title: Pause script execution when the DOM changes
tags: ["javascript", "debug", "browser:firefox", "browser:chrome", "browser:edge", "browser:safari"]
---
If you want to know what JavaScript code removes, adds, or modifies a DOM element in the page, you can use DOM breakpoints in DevTools. You can choose to break on:

* Subtree modification: this pauses execution when any element in the subtree of the selected element is modified (added, removed, or changed attribute).
* Attribute modification: this pauses execution when an attribute of the selected element is modified.
* Node removal: this pauses execution when the selected node is removed from the DOM tree.

This is useful if you don't know the codebase you are debugging for example.

To add a DOM breakpoint:

* Navigate to the **Inspector/Elements** panel.
* Find the node which you want to add the breakpoint on.
* Open the contextual menu (right-click).
* Open the **Break on** sub menu and choose the type of breakpoint you want to set.

![Screenshot of the Elements panel in Edge showing the "Break on" contextual menu on the selected node](/assets/img/break-on-dom-changes.png)

Once the requested DOM modification occurs, the JavaScript execution will pause and DevTools will navigate to the Sources/Debugger panel, showing the right line of code where execution is paused.
