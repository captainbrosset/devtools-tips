---
date: 2021-06-11
authors: Patrick Brosset
title: Filter requests in the Network panel by status code, mime type and more
tags: ["network", "browser:edge", "browser:chrome", "browser:firefox"]
---
The Network panel lets you filter requests by status code, or mime type, and more.

* Click in the filter input field in the toolbar.
* Start typing `status-code`, you should see an autocomplete popup letting you know of the possible accepted values. Use `status-code:404` to find all requests that ended up in a 404 error.
* Other possible filters include `mime-type`, `domain`, `larger-than`, `method`, and more.
* You can also negate the search by putting a `-` in front (e.g. `-status-code:404`).

![Screenshot of the Network panel in Edge showing the filter input field](/assets/img/filter-network-requests.png)