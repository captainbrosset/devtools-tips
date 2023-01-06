---
date: 2022-08-31
authors: Patrick Brosset
title: Get the recently selected DOM nodes in the console
tags: ["console", "html", "browser:edge", "browser:chrome", "browser:polypane"]
---
If you type `$0` in the **Console** tool, in any browser, the currently selected DOM node is returned. This is very handy. To learn more, check [Get the selected element in the console](/tips/en/get-current-element-in-console).

On top of this, in Edge, Polypane and Chrome, the `$1`, `$2`, `$3`, and `$4` shortcuts are also defined!

They can be used to access the recently selected DOM nodes:

* `$1` returns the DOM node you selected just before the currently selected one.
* `$2` returns the DOM node you selected before that.
* And so on!

![Chrome DevTools, with the Elements and Console tools shown. 5 DOM nodes are selected, one after the other, and then the $0, $1, $2, $3, and $4 shortcuts are used in the Console, showing how they refer to the previously selected DOM nodes.](/assets/img/get-recently-selected-dom-nodes-in-console.gif)
