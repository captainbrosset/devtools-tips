---
date: 2021-11-10
authors: Patrick Brosset
title: Format console messages
tags: ["console", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
You can use special formatters in the `console.log` function to format logs just the way you want.

* Use `%s` to format a variable as a string.
* Use `%d` to format a variable as an integer.
* Use `%f` to format a variable as a float.
* Use `%o` to print a DOM element variable.
* Use `%O` to print an object variable.

As a bonus, the `%c` formatter can also be used to [style console messages with CSS properties](/tips/en/style-console-messages)!

```javascript
var el = document.body;
console.log('%c There are %d elements in %O', 'color:lime;background:black;', el.childElementCount, el);
```

![Screenshot of a formatted console message in Edge](/assets/img/format-console-messages.png)
