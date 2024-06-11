---
date: 2024-06-11
authors: Patrick Brosset
title: Highlight areas that the browser engine re-paints
tags: ["tip", "perf", "highlighter", "browser:edge", "browser:chrome", "browser:safari"]
---

When you scroll through a webpage, or when parts of the webpage change, the browser engine sometimes needs to repaint parts of the page. The process of converting the layout and style information into pixels on the screen is specific to each browser engine, but it can be quite expensive in terms of performance, especially when the repainted areas are large and when repaints occur often.

Use **Paint flashing** in DevTools if you suspect that your webpage is slow because of frequent and large repaints. **Paint flashing** highlights the areas of the webpage that the browser engine repaints, making it possible for you to visually identify the problematic areas.

**Warning**: using **Paint flashing** may not be suitable for people prone to photosensitive epilepsy.

## In Chrome and Edge

1. Open DevTools.
1. Open the **Rendering** tool.
1. Select the **Paint flashing** checkbox.
1. Interact with the webpage to see the areas that the browser engine repaints.

   As the browser engine repaints areas of the page, these areas get highlighted in a different color:

   ![Paint flashing in Edge](../../assets/img/highlighted-repainted-areas.png)

## In Safari

1. Open the Web Inspector.
1. Go to the **Elements** tool.
1. Click the **Paint flashing** button in the toolbar.

## In Firefox

Unfortunately, Firefox no longer has a built-in paint flashing tool. This is due to the new rendering engine (WebRender) that Firefox uses, and which doesn't support paint flashing. See [Paint flashing DevTools for WebRender](https://bugzilla.mozilla.org/show_bug.cgi?id=1612922) on Bugzilla if you want to follow the updates on this feature.
