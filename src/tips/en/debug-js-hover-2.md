---
date: 2022-03-25
authors: Patrick Brosset
title: Debug popups that appear on hover using the debugger statement
tags: ["tip", "debug", "browser:edge", "browser:chrome", "browser:safari", "browser:firefox"]
---

In [Debug popups that appear on hover using JS](./debug-js-hover.md) we described how to pause the debugger to inspect popups that appear on hover and disappear as soon as the cursor moves away.

Here's another way to do this by [Zain Zafar](https://twitter.com/mzainzafar90) which involves using the `debugger` statement in the **Console**:

1. Open the **Console** tool.
1. Enter `setTimeout(() => {debugger}, 3000)` and press <kbd>Enter</kbd>. You can change the 3 seconds delay to anything that matches your needs.
1. Quickly hover over the popup and wait for the debugger to pause the script execution.

Now the popup is visible and you can easily inspect it without having to worry about it disappearing.

Zain shared this awesome tip on [Twitter](https://twitter.com/mzainzafar90/status/1485510393409773571) and [YouTube](https://www.youtube.com/watch?v=jh8hUH_Zp0o).
