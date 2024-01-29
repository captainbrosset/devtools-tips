---
date: 2024-01-29
authors: Patrick Brosset
title: Name evaluated files with the sourceURL pragma
tags: ["tip", "javascript", "debug", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---

If you insert JavaScript code in a webpage by using the `eval()` function, or inline `<script>` tags, you can use the `sourceURL` pragma to give them a name in DevTools.

For example, when using `eval()`:

```js
eval('console.log("Hello world!")\n//# sourceURL=hello-world.js');
```

The above code snippet not only runs the evaluated code, but it also makes it appear in the **Sources** (or **Debugger**) tool as if it came from a file named `hello-world.js`.

![Firefox DevTools, the sourceURL pragma was used when evaluating some code in the Console, and a new file now appears in the Debugger tool, named after the string provided in the sourceURL pragma](../../assets/img/name-evaluated-files.png)

This can also be useful when using inline `<script>` tags:

```html
<script>
  console.log("Hello world!")
  //# sourceURL=hello-world.js
</script>
```

Using the `sourceURL` pragma is a great way to debug your code more easily in DevTools. **Console** messages will be easier to identify, and source code will be easier to debug.
