---
date: 2023-02-07
authors: Patrick Brosset
title: View console logs from non-Safari browsers on an iPhone
tags: ["debug", "console", "browser:edge", "browser:chrome"]
---
Using the `about:inspect` special page you can see your website's logs in Chrome or Edge running on iPhone!

This is important because debugging a webpage that's running in Safari on an iPhone isn't hard, but debugging the same webpage when it's running in Chrome or Edge on an iPhone is impossible, and sometimes there are pages that may work in Safari, but not in Chrome or Edge.

The former requires connecting your iPhone to a Mac via USB, enabling the WebInspector tools on the Mac, and connecting from Safari desktop to Safari mobile (learn more at [Enabling Web Inspector](https://webkit.org/web-inspector/enabling-web-inspector/)).

The latter, however, is not possible. Even if Chrome and Edge use the webkit webview on iPhone, Apple just doesn't let you connect to these webviews from your Mac. Because the webview-version of webkit is subtly different from the version of webkit that powers Safari, it's possible for your webpage to work in Safari but not in Chrome or Edge, even on the same iPhone.

Thankfully, here is a way to at least see your console logs from these browsers, which is better than nothing:

1. In Chrome or Edge on iPhone, open a new tab and go to `about:inspect`.
1. Click **Start Logging**.
1. Keep this tab open and open a new one.
1. In the new tab, go to the site that you need to test and run the user scenario that will trigger a the console logs you need to see.
1. Return to the previous tab. Your logs are now displayed on the `about:inspect` page.

![Edge on iOS, showing the about:inspect page, filled with logs](../../assets/img/view-logs-for-other-browsers-on-ios.png)
