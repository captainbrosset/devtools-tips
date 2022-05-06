---
date: 2022-03-15
authors: Patrick Brosset
title: Emulate forced-color mode
tags: ["css", "accessibility", "browser:edge", "browser:chrome"]
---
Operating systems offer an accessibility feature where the colors shown on the screen are converted to offer higher contrast. When you use this feature, it impacts all the content on the screen: your desktop, folders, native apps, web browser and its web content, etc.

This means web pages are not displayed in their usual colors, but in a high-contrast mode instead. Learn more about the Windows high-contrast mode and how to style a website with it [here](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/) and about the `forced-colors` media query [here](https://developer.mozilla.org/docs/Web/CSS/@media/forced-colors).

If you are not using this high-contrast mode yourself though, you won't know how your website looks to users who do. To make sure your content is fully accessible to users of this mode, and to avoid having to switch your entire OS to it, you can use Edge's or Chrome's ability to emulate the forced-color mode.

In Edge or Chrome:

* Open the [Command Menu](/tips/en/execute-commands/): <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> on mac).
* Type **Rendering** and press <kbd>Enter</kbd>.
* In the **Rendering** panel, scroll down to the **Emulate CSS media feature forced-colors** and activate it from the drop-down.

![Screenshot of Edge showing a webpage in forced-colors mode, with the Rendering panel next to it in DevTools](/assets/img/emulate-forced-colors.png)
