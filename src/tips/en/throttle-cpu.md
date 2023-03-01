---
date: 2023-03-01
authors: Patrick Brosset
title: Throttle your CPU
tags: ["perf", "browser:edge", "browser:chrome"]
---
Your development machine is very likely much more powerful than the devices your users have (which are probably low-end mobile devices).

Before you ship your new app or site, thinking that it will run as smoothly as it does on your computer, test it on other devices. Build empathy for your users and what they have to go through while using your app or site.

The best way to do this is to test on the real devices your users actually have! A proxy to this is to simulate a slower CPU from DevTools.

To throttle your CPU in Chrome or Edge DevTools:

1. In DevTools, open the **Performance** tool.
1. Click **Capture settings**. It's the gear icon in the top right corner of the **Performance** tool.
1. Using the **CPU** dropdown, simulate a 4x or 6x slowdown.

Even though the setting is in the **Performance** tool, you don't need to record a performance trace for the slowdown to take effect. As soon as a slowdown value is set, it takes effect immediately.

![The Performance tool in Chrome showing the CPU throttling drop-down.](/assets/img/throttle-cpu.png)
