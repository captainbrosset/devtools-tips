---
date: 2023-06-21
authors: Patrick Brosset
title: Add custom headers to the network table
tags: ["tip", "network", "browser:edge", "browser:chrome"]
see-also: ["see-request-path-instead-of-name.md"]
---

On the web, when a client (a browser) and a server communicate using HTTP, the requests and responses they send to each other contain headers. These headers are key/value pairs that contain metadata about the request and the response. Common examples of headers include the `Content-Type` header, which tells the browser what type of content the server is sending back, or the `User-Agent` header, which tells the server what browser the client is using.

It's also possible to add custom headers to requests and responses. This is often used by proprietary software and for debugging purposes. For example, the IIS web server adds a `X-Powered-By` header to responses.

In Chrome and Edge, you can configure the **Network** tool to display any custom header you want in the request table directly, alongside the columns that are already displayed:

1. Open DevTools and go to the **Network** tool.
1. Right-click on any of the columns in the request table, and then click **Response Headers** > **Manage Header Columns**.
1. In the **Manage Header Columns** popup window, click **Add Custom Header**.
1. Type your custom header name and press <kbd>Add</kbd>.

![Edge DevTools Network tool, showing a list of requests in the table, and the x-powered-by custom header as a column](../../assets/img/custom-headers-in-network-table.png)
