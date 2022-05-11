---
date: 2022-02-21
authors: Patrick Brosset
title: Detect the element with focus at any time
tags: ["console", "javascript", "browser:edge", "browser:chrome"]
---
If you want to know which element has the focus on the web page at any time, you can use a [live expression](/tips/en/live-expressions) in the **Console** tool.

1. Open the **Console**.
1. Click the **Create live expression** button (it looks like an eye icon).
1. In the text box that appears, type `document.activeElement`.
1. Now click/tab around on the page and see the live expression update to reflect which element is currently focused.

![GIF animation showing a web page with focus going through different element, and the Edge Console panel with the live expression showing a preview of the focused element](/assets/img/track-focused-element.gif)
