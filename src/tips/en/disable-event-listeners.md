---
date: 2022-01-26
authors: Patrick Brosset
title: Remove or disable event listeners
tags: ["javascript", "browser:firefox", "browser:edge", "browser:chrome"]
---
When you're trying to debug something and event listeners on the page keep interfering with what you're doing, it can be frustrating.
Imagine a `mousemove` event listener that changes some of the information on the page.

Fortunately, DevTools can help you here.

In Firefox, you can disable (and re-enable) events from the **Inspector** panel:

* Find the element in the panel that has the event listener.
* Click the `event` badge next to it.
* Find the event type you are interested in.
* Check or uncheck the box next to the event listener to enable or disable it.

![Screenshot of the Firefox event popup in the Inspector panel, showing the checkbox to toggle events](/assets/img/disable-event-listeners-firefox.png)

In Chrome and Edge, you can remove events from the **Elements** panel (but not add them again):

* Find the element in the panel that has the event listener.
* In the sidebar of the panel, find the **Event Listeners** pane.
* Find the event type you are interested in and expand it.
* Click the **Remove** button next to the listener you want to remove.

![Screenshot of the Chrome Event Listeners sidebar pane, showing the Remove button](/assets/img/disable-event-listeners-chrome.png)
