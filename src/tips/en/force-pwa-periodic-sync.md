---
date: 2021-09-10
authors: Patrick Brosset
title: Force PWA periodic background syncs
tags: ["network", "pwa", "browser:edge", "browser:chrome"]
---
The [periodic background sync API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API), available to PWAs is a great way to fetch new content while the user isn't on the site, and while they have access to the network, to make sure they have the latest content when they come back to the app.

It can be hard to debug though, as the sync only happen after the minimum interval has passed, and the browser thinks that now is a good time to trigger the sync.

Thankfully, there is a way in Chrome and Edge to force the sync, so you don't have to wait for the browser to do it.

* Navigate to the **Application** panel.
* Select the **Service Workers** tab.
* Scroll down to the **Periodic Sync** input.
* Enter the tag name for your registered sync, and click the **Periodic Sync** button.

![Screenshot of the Application panel in Edge showing the periodic sync input and buttons](/assets/img/force-pwa-periodic-sync.png)
