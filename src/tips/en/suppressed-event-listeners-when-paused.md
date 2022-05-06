---
date: 2021-06-30
authors: Patrick Brosset
title: Event listeners are suppressed when paused
tags: ["javascript", "browser:firefox", "browser:edge", "browser:chrome", "browser:safari"]
---
This is not really a tip, but rather an interesting thing to be aware of when debugging JavaScript.

If you use breakpoints in the Sources (or Debugger) tab in DevTools to debug JavaScript, you should know that all event listeners are suppressed while paused at one of them.

For example, if you have a button with an `onclick` handler, and you're paused at a breakpoint, then clicking that button won't execute the handler. It also won't execute it later when you resume execution.
In fact, most DevTools display an overlay on top of the entire page that prevents you from accessing it at all.

This also happens if you manually try to dispatch new events from the console using [`dispatchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent). If there are handlers for these events, they also won't get called while execution is paused.

The reason for this is that (ignoring workers) JavaScript on your page only runs in one thread. So while that thread is paused at one specific location, it's not supposed to be able to execute code from other locations.

![Screenshot of a page in edge with the DevTools Sources paused at a location, and the on-page overlay preventing access to the page](/assets/img/suppressed-event-listeners-when-paused.png)