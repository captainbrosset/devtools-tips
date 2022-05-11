---
date: 2022-03-15
authors: Patrick Brosset
title: Check if your site can be instantly reloaded from bfcache
tags: ["perf", "browser:edge", "browser:chrome"]
---
Most browsers are now able to instantly go back to previously visited pages without having to wait for them to load. This ability is powered by the back/forward cache (or bfcache). Firefox, Safari, and Chromium-based browsers support it, and it's massive performance boost when hitting the back button.

The way the bfcache works is by storing a snapshot of the page in memory, in a way that no work needs to be done when going back to it, other than displaying the pixels on the screen.

Not all web pages can be cached in bfcache though. Chrome and Edge have a new tool that lets you detect potential issues with a page that might prevent it from being bfcache'd.

To test if your page can be cached:

* Open the **Application** tool.
* Click **Back/forward cache** in the side bar.
* Click the **Test back/forward cache** button.

A report will be displayed, telling you whether your page can be cached, and if not, why.

![Screenshot of Chrome DevTools with the Application tool, and the bfcache tab selected, showing a warning that the page can't be cached](/assets/img/check-bfcache-readiness.png)
