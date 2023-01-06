---
date: 2022-07-26
authors: Pankaj Parashar
title: Copy CSS selector of an element
tags: ["css", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---

Sometimes we need to uniquely identify an element that lacks an identifier, so that it can be referenced in JavaScript and other places. All the major browsers have an option to build a unique CSS selector for an element and then copy it to the clipboard.

In the Element tree, right click on the element and select,
- In **Chrome** and **Edge**, `Copy` > `Copy selector`
- In **Firefox**, `Copy` > `CSS Selector`
- In **Safari**, `Copy` > `Selector Path`

This will copy the CSS selector for the element, which can then be used in JavaScript to reference the element in the following way,

```javascript
> document.querySelector("#maincontent > div > h2")
  <h2>104 DevTools Tips</h2>
```

![Edge DevTools, showing how to access the Copy CSS selector option.](/assets/img/copy-css-selector.png)
