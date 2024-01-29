---
date: 2024-01-29
authors: Patrick Brosset
title: Name evaluated files with the sourceURL pragma
tags: ["tip", "JavaScript", "debug", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---

If you insert JavaScript code dynamically in your webpage, for example by using the `eval()` function, you can use the `sourceURL` pragma to give them a name in DevTools.

```js
eval('console.log("Hello world!")\n//# sourceURL=hello-world.js');
```

The above code snippet not only runs the evaluated code, but it also makes it appear in the **Sources** (or **Debugger**) tool as if it came from a file named `hello-world.js`.

![Firefox DevTools, the sourceURL pragma was used when evaluating some code in the Console, and a new file now appears in the Debugger tool, named after the string provided in the sourceURL pragma](../../assets/img/name-evaluated-files.png)
