---
date: 2021-06-24
authors: Patrick Brosset
title: Persist console messages across page navigations and reloads
tags: ["console", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
By default, the messages displayed in the console get removed as soon as you refresh the page (or navigate to a new page). If you want to keep those messages as long as DevTools is open, follow these steps:

* In Firefox:
  * In the Console panel, click on the cog icon (top-right corner) and select "Persist Logs"
* In Edge or Chrome:
  * In the Console panel, click on the cog icon (top-right corner) and check the "Preserve Log" box
* In Safari:
  * In the Console panel, check the "Preserve Log" box in the top toolbar

![Screenshot of Edge devtools' console showing the settings panel at the top, with the "perserve log" box checked](/assets/img/persist-logs-across-pages.png)