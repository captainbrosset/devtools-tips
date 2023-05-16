---
date: 2022-06-30
authors: Patrick Brosset
title: Fix color contrast issues using the element tooltip
tags: ["accessibility", "browser:edge", "browser:chrome"]
---

There are multiple ways to detect and fix color contrast issues with DevTools, but here is a nice one to keep in mind. It's not straightforward to use and takes a few steps, but makes it very nice to see the resulting contrast ratio as you change the color value.

Thanks to [Adam Argyle](https://twitter.com/argyleink) for [sharing this on Twitter](https://twitter.com/argyleink/status/1255236249255845892).

1. In the **Styles** panel, click on the color value you want to change, to focus the field.
1. Press <kbd>Ctrl+Shift+C</kbd> (or <kbd>Cmd+Shift+C</kbd> on Mac) to start the inspect tool.
1. Position your mouse over the element which you are changing the color for. Don't click anywhere, we want to keep the color value field focused, just hover over the element so the element tooltip appears.
1. Now change the color value with the keyboard and check the contrast ratio in the tooltip as you do so.

![Animation of the Elements panel in Microsoft Edge. User clicks on color value, then activates the inspect tool, then hovers over an element on the page, then uses the arrow keys to change the color. We see the element tooltip showing the background and text colors as well as the resulting contrast.](../../assets/img/fix-color-contrast-issues-with-element-tooltip.gif)

Related tips:

* [Detect low color contrast issues](./detect-low-color-contrast.md).
* [Fix low color contrast issues](./fix-color-contrast-issues.md).
