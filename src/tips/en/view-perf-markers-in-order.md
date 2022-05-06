---
date: 2021-06-10
authors: Patrick Brosset
title: View performance markers in order
tags: ["javascript", "perf", "console", "browser:edge", "browser:chrome", "browser:safari"]
---
When logging `performance.timing` events to the console, they appear in alphabetical order since they are properties of the `PerformanceTiming` object.

In order to view them in order, you can use `console.table(performance.timing)` and click on the column heading to sort them by time.

![Screenshot of the console in Edge showing the PerformanceTiming object, with alphabetical properties, and then using console.table to sort properties](/assets/img/view-perf-markers-in-order.png)