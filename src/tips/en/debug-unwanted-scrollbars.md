---
date: 2023-01-04
authors: Patrick Brosset, Kilian Valkhof, mirnovov
title: Debug unwanted scrollbars
tags: ["tip", "css", "browser:firefox", "browser:safari", "browser:chrome", "browser:edge", "browser:polypane"]
---
Scrollbars can sometimes appear on a webpage unexpectedly. When this happens, finding which HTML element is the cause of the scrollbars isn't always straightforward. DevTools provides features that help you debug unwanted scrollbars.

## Firefox

In the DOM tree in the **Inspector** tool, **scroll** badges appear next to elements that have scrollbars.

![Firefox DevTools, with the Inspector panel showing the Scroll badge on an element.](../../assets/img/debug-unwanted-scrollbars-1.png)

The **scroll** badges help you identify which elements in the DOM tree are scrolling.

Click a **scroll** badge to highlight the descendant elements that are causing the scrolling parent to overflow. The **Inspector** reveals the overflowing elements:

![Firefox DevTools, with the Inspector panel showing the Overflow badge on 3 highlighted elements.](../../assets/img/debug-unwanted-scrollbars-2.png)

Once you know which elements are the root cause of the problem, use the **Rules** sidebar pane to figure out which CSS properties are causing the overflow.

To learn more, see [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html).

## Chrome, Edge, and Safari

Similar to Firefox, in the DOM tree in the **Elements** tool of Chrome, Edge, or Safari DevTools, **scroll** badges appear next to elements that have scrollbars. The **scroll** badges help you identify which elements in the DOM tree are scrolling.

## Polypane

Polypane displays an **Horizontal overflow detected** icon below pages that have a horizontal scrollbar. The **Horizontal overflow detected** icon helps you understand why a page has a horizontal scrollbar:

![Polypane, with an overflow icon below a Pane. The text in the tooltip reads "Horizontal overflow detected!".](../../assets/img/debug-unwanted-scrollbars-3.png)

To find the elements that are causing the horizontal overflow in the page, click the icon. Polypane finds the elements and highlights them in red:

![Polypane showing a page. A single element is highlighted in red and is clearly expanding beyond the edge".](../../assets/img/debug-unwanted-scrollbars-4.png)

To fix the overflow problem, inspect the highlighted elements.

To learn more, see [Horizontal overflow detection](https://polypane.app/docs/horizontal-overflow/).
