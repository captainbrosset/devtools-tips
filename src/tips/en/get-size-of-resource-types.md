---
date: 2023-02-16
authors: Patrick Brosset, Pankaj Parashar
title: See the size of the transferred data for images, scripts, or other resources
tags: ["network", "perf", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
To know how much data your website transfers between the server and the client to display images, or scripts, or anything else:

1. Open the **Network** tool.

1. Refresh the page to make sure the list of requests appears in the tool.

1. Filter the list of requests to only what you're interested in:

    * For example, to see only images, click the **Img** tag in the toolbar (or **Images** in Firefox).
    * Or, to see only JPEG image files, enter `.jpg` in the **Filter** text box (to learn more about filtering, see [Filter requests in the Network panel by status code, mime type and more](./filter-network-requests.md)).
    * To see only JavaSript files, click the **JS** tag in the toolbar.

1. Look at the transferred size in the status bar at the bottom of the **Network** tool. The first number is the amount of data transferred for the filtered resources displayed in the tool.

In the screenshot below, the **CSS** and **JS** tags have been checked in the toolbar, filtering the list of resources down to just stylesheets and JavaScript files, and the status bar shows that these resources amount to 73.8kB total.

![The Network tool in Chrome, with the transferred size highlighted](../../assets/img/get-size-of-resource-types.png)
