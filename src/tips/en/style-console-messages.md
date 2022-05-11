---
date: 2021-06-28
authors: Patrick Brosset
title: Apply CSS styles to console messages
tags: ["console", "css", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
The `console.log` output can be styled in DevTools using CSS.

```javascript
console.log('%c Hello World', 'color: orange; font-size: 2em;');
```

![Screenshot of a styled console message in Edge](/assets/img/style-console-messages.png)