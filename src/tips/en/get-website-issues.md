---
date: 2022-04-07
authors: Patrick Brosset
title: Automatically get issues your site has with performance, accessibility, security, compatibility, and others.
tags: ["accessibility", "perf", "testing", "browser:edge"]
---
Edge has a very useful **Issues** panel that can automatically list a lot of different issues with your site. It can detect common issues related to browser compatibility, accessibility, performance, security, and more.

To see issues with the current page in Edge:

1. Open DevTools (<kbd>F12</kbd>).

1. Click **More tools** (`+`) and click **Issues** (you can also open the panel by using the [Command menu](/tips/en/execute-commands)).

1. Issues are listed in the panel, organized by category, and severity.

1. At this point, reload the page to make sure all issues are listed, as some of them depend on how your page loads over the network.

1. You can use the toolbar at the top to filter issues too. The **Browser** filter, in particular, lets you filter down the compatibility issues to just the browsers you care about.

[Learn more about this tool](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/issues/).

![Screenshot of the issues panel in Edge, showing many different issues about the page](/assets/img/get-website-issues.png)
