---
date: 2021-07-13
authors: Patrick Brosset
title: Copy an element's XPath expression
tags: ["html", "testing", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
You can easily copy an element's [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath) expression from DevTools. This is useful if you need this expression for an automated test for example.

* Go to the Elements (or Inspector) panel
* Use the context-menu (right-click) on the element you care about
* Go into the Copy sub-menu
* Choose the Xpath option

Note that you can then use this xpath expression to [find elements again in DevTools](/tips/en/evaluate-xpath/).

![Screenshot of the Elements panel in Edge showing the copy xpath option in the contextual menu](/assets/img/copy-element-xpath.png)
