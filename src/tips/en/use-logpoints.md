---
date: 2021-10-20
authors: Patrick Brosset, Christian Heilmann
title: Console.log() for the web with logpoints
tags: ["debug", "javascript", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
Using the [console](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/) to log some information is a very common way to debug your JavaScript. But you can also log information in any web site using **Logpoints** in the [sources](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/sources/) panel.

![Screenshots of the way to set a logpoint in the sources tool](/assets/img/use-logpoints.png)

Here's how to do it:

1. In the Sources panel (or Debugger in Firefox), open a JavaScript file and right-click any line number. 
1. Select `Add logpoint` to open the editor
1. In the editor, enter the JavaScript expression you'd like to log.
1. Hit Enter to save and a badge shows on the line number.
1. Go to the console, interact with the site and every time this line executes, you see the result of the logpoint expression.
1. If you don't want to log information any longer, click the Logpoint again to remove it.

Logpoints are a way to inject a `console.log()` into any web site without editing its source code.

You can see this in action in this video on YouTube:

https://www.youtube.com/watch?v=DRRezUZvZ6I
