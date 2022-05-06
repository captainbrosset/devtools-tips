---
date: 2021-06-08
authors: Patrick Brosset
title: Find inactive CSS styles
tags: ["css", "debug", "browser:firefox"]
---
Firefox has a unique feature that helps find CSS styles that don't have any effect on the page.

This is not an audit tool that helps with removing useless CSS rules, but it is useful to know when a given CSS property isn't doing anything on the selected element.

* Select an element in the Inspector panel
* Look at the Rules sidebar panel
* If you see a property that is greyed out and has an information icon next to it, then that means it is currently inactive
* Hover over the information icon to know why the property is inactive

![Screenshot of the inactive style feature](/assets/img/find-inactive-styles.webp)