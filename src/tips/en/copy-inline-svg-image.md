---
date: 2024-05-28
authors: Patrick Brosset
title: Copy an inline SVG image's source code
tags: ["tip", "export", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari", "browser:polypane"]
---

To copy the SVG source code of an SVG image that's embedded directly in the HTML of a webpage, use the **Elements** tool in DevTools (**Inspector** in Firefox).

1. To open DevTools, right-click the SVG image on the webpage, and then click **Inspect**.

   DevTools opens up, with the **Elements** (or **Inspector**) tool showing the HTML of the page.

1. Make sure the `<svg>` element is selected. Depending on where you right-clicked on the webpage, an element that's inside the `<svg>` element might be selected instead. If so, click the `<svg>` element to select it.

1. Right-click the `<svg>` element in the **Elements** (or **Inspector**) tool, and then click **Copy** > **Copy outerHTML** (or **Outer HTML** in Firefox).

   The SVG source code is now copied to your clipboard.

1. Paste the SVG source code wherever you want to use it.

![Copying the SVG source code in Edge DevTools](../../assets/img/copy-inline-svg-image.png)

* **In Polypane**

1. Right-click the SVG image on the web page, and then click **Inspect**.

   The **Elements** panel opens with the SVG selected
1. in the **Element Info** part, click the **Copy** button and then select **Copy Outer HTML**.

   The SVG source code is now copied to your clipboard.

1. Paste the SVG source code wherever you want to use it.

![Copying the SVG source code in Polypane Elements Panel](../../assets/img/copy-inline-svg-image-polypane.png)