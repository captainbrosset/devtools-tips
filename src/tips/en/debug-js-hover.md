---
date: 2021-10-20
authors: Patrick Brosset
title: Debug popups that appear on hover using JS
tags: ["debug", "browser:edge", "browser:chrome", "browser:safari", "browser:firefox"]
---

Have you ever been frustrated because you couldn't style a popup or tooltip that appeared on hover? If it uses JavaScript to get displayed, it's hard to style without modifying the code to make it stay visible.

1. Switch the **Sources**/**Debugger** panel.
1. Then hover the element in the page so the popup appears, and leave the mouse there.
1. Now press `F8` to pause the debugger.

That's it! The JS engine will pause and freeze the state of the page. You can now switch back to **Elements**/**Inspector** and style the popup content!

![GIF showing how to pause the debugger with F8 while a tooltip is visible to then style it in the Inspector panel of Firefox](/assets/img/debug-js-hover.gif)

Thank you to [Sam Selikoff](https://twitter.com/samselikoff) for [tweeting](https://twitter.com/samselikoff/status/1441142046492807176) about this tip and making a youtube video about it too:

https://www.youtube.com/watch?v=aNZ9ci_1gtM
