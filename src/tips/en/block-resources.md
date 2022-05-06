---
date: 2021-08-19
authors: Patrick Brosset
title: Block resources to test your site without CSS or JavaScript
tags: ["network", "testing", "browser:edge", "browser:chrome", "browser:firefox"]
---
The various resources loaded by your site aren't always guaranteed to reach your users when they visit your site. Network problems can occur, JavaScript may be disabled, a CDN may be down, or the browser can decide to block a resource.

It's useful to test how your site looks when this occurs. It may also be useful to compare the performance of your site with and without certain resources.

With DevTools you can block individual URLs or more global patterns.

* With Chrome or Edge:
  * Go to the **Network** panel
  * Right-click on the request you want to block and select **Block request URL** (you can also select **Block request domain** to block all resources from the same domain)
  * Reload the page
  * You can also use the **Network request blocking** panel (which opens automatically when you block a request) to add, edit and remove URLs or URL patterns

![Screenshot of the Network panel in Edge showing the contextual menu with the "block request url" item](/assets/img/block-resources-1.png)

* With Firefox:
  * Go to the **Network** panel
  * Right-click on the request you want to block and select **Block URL**
  * Reload the page
  * You can also use the **Blocking** sidebar (which opens automatically when you block a request) to add, edit and remove URLs or URL patterns

![Screenshot of the Network panel in Firefox showing the contextual menu with the "block url" item and the "blocking" sidebar](/assets/img/block-resources-2.png)
