---
date: 2021-10-15
authors: Patrick Brosset
title: Monitor all events dispatched on an element
tags: ["console", "debug", "browser:edge", "browser:chrome"]
---

You can use the `monitorEvents` global function in the **Console** panel to log all of the events dispatched on a particular element.

1. Select an element in the **Elements** panel.
1. Go to the **Console**.
1. Type `monitorEvents($0, 'key');` and hit Enter.
1. Interact with the selected element in the page to dispatch events.

You can replace `$0` with a reference to any other element. `$0` is just a shortcut to the currently selected element.

You can also change `key` to other event types like `mouse`.

![GIF animation showing how events get automatically logged when using the monitorEvents function](/assets/img/monitor-element-events.gif)

Thank you to [Minko Gechev](https://github.com/mgechev) for [tweeting](https://twitter.com/mgechev/status/1447419251120279558) about this tip.
