---
title: Console.log() for the web with logpoints
tags: ["Debugging", "JavaScript", "browser:edge", "browser:chrome", "browser:firefox"]
---
Using the [Console](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/) of DevTools to log some information is a very common way to debug your JavaScript. But you can also log information in any web site using Logpoints in the [Sources](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/sources/) tool.

![Screenshots of the way to set a logpoint in the sources tool](/assets/img/set-logpoints.png)

Here's how to do that:

1. In the Sources tool, open a JavaScript file and right-click any line number. 
1. Select `Add logpoint` to open the editor
1. In the editor, enter the expression that you'd like to log.
1. Hit Enter to save and a badge shows on the line number.
1. Go to the `Console`, interact with the site and every time this line executes, you see the result of the logpoint expression to the `Console`.
1. If you don't want to log information any longer, click the Logpoint again to remove it.

You can see this in action in [this video on YouTube](https://www.youtube.com/watch?v=DRRezUZvZ6I).

In essence, Logpoints are a way to inject a `console.log()` into any web site on the web.