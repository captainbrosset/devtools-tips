---
date: 2022-11-23
authors: Patrick Brosset
title: List all supported console functions
tags: ["console", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
You've probably already used `console.log()` in your code to print debugging values to the **Console** tool in DevTools. But the `console` namespace actually has many other functions too!

To list them all, open the **Console** tool and type:
  
```javascript
console.log(console);
```

![Chrome, with the Console panel opened on the side in DevTools, showing the `console.log(console)` command result, which is an object containing a list of functions such as assert, clear, debug.](../../assets/img/list-console-functions.png)

Related:

* [console.log() is great, but do you know console.table()? console.group()? console.assert()?](./console-table-group-assert.md)
* [The console documentation on MDN](https://developer.mozilla.org/docs/Web/API/console).
* [The Console API specification](https://console.spec.whatwg.org/).
