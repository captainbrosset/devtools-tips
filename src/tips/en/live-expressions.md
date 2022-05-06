---
date: 2021-10-29
authors: Patrick Brosset, Christian Heilmann
title: Cut down on console noise using live expressions
tags: ["debug", "javascript", "browser:edge", "browser:chrome"]
---
Using the [Console](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/) of DevTools to log information that changes a lot is a bad idea. First of all, you flood it with information. Secondly, it can impact the performance of your product. And last but not least, you are most likely to only log this information to debug your project and end users should never get that information.

An excellent alternative to logging a lot of information are [live expressions](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/console/live-expressions). To add a new live expression do the following:

1. Click the eye icon in DevTools ![The eye button in DevTools](/assets/img/live-expressions-eye-icon.png)
1. This gives you an entry field to type in any JavaScript expression. ![The field to enter your live expression](/assets/img/live-expressions-field.png)
1. Save the expression by clicking outside the field or press <kbd>cmd</kbd>+<kbd>Enter</kbd> on Mac or <kbd>ctrl</kbd>+<kbd>Enter</kbd> on Windows/Linux.

This will pin the expression on top of the Console and show you the value returned from it. Any change will show live below the expression.

You can use this, for example, to resize the window to a certain size by monitoring the `outerWidth` and `outerHeight` properties.

```javascript
`${window.outerWidth} x ${window.outerHeight}`
```

![Monitoring the window size using live expressions](/assets/img/live-expressions-window-resize.gif)

You can set as many live expressions as you want, and you can remove them by clicking the `x` icon next to them.
