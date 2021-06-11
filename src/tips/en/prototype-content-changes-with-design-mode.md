---
title: Prototype content changes with designMode
tags: ["html", "design", "browser:firefox", "browser:chrome", "browser:edge", "browser:safari"]
---

When creating or modifying a design prototype for the web, you may want to quickly edit text and see how it looks in the browser.

When you turn on `designMode` for the document or a given element, all associated text becomes editable in the browser. Images and other page content can be deleted, too.

* Open the Console
* Enter `document.designMode="on"` and press Enter

Turn off `designMode` with the expression `document.designMode="off"`. 

Changes are not persisted and will revert on page close or refresh.

![Screenshot of editable web page in Edge](/assets/img/design-mode.png)
