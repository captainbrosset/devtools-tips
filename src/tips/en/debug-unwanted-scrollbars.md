---
date: 2023-01-04
authors: Patrick Brosset, Kilian Valkhof
title: Debug unwanted scrollbars
tags: ["tip", "css", "browser:firefox", "browser:polypane"]
---
Sometimes scrollbars appear on a web page in places we don't want them to. And when this happens, it's not always very straightforward to fix the problem. Which container is responsible for the scrollbars in the first place? Which elements are even causing the scrollbars to appear? Why are they too big?

All very good questions that can cause a lot of time lost and frustration.


**In Firefox**

In the **Inspector** panel, where the DOM tree of the page is displayed, you will notice **scroll** badges next to all elements that have scrollbars!

![Firefox DevTools, with the Inspector panel showing the Scroll badge on an element.](../../assets/img/debug-unwanted-scrollbars-1.png)

This takes care of our first question: which element is scrolling? As for the second question: which elements are causing the scrolling, if you just click on one of the **scroll** badges, the **Inspector** will jump to the element (or elements) that caused the scrollbars to appear and highlight them for you!

![Firefox DevTools, with the Inspector panel showing the Overflow badge on 3 highlighted elements.](../../assets/img/debug-unwanted-scrollbars-2.png)

Now this feature won't answer our third question: Why are these elements too big? But once you know which elements are the root cause of the problem, you can use the **Rules** siderbar pane to figure out which CSS properties are responsible for it.

[Learn more here](https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow).

**In Polypane**

When a page has a horizontal scrollbar, Polypane will display an **Overflow icon** below it. This will tell you why there is a horizontal overflow: either there are elements that are too wide or there is a `100vw` applied to the page.

![Polypane, with an overflow icon below a Pane. The text in the tooltip reads "Horizontal overflow detected!".](../../assets/img/debug-unwanted-scrollbars-3.png)

After clicking the icon, Polypane finds the elements causing an overflow in your page and highlights them in red.

![Polypane showing a page. A single element is highlighted in red and is clearly expanding beyond the edge".](../../assets/img/debug-unwanted-scrollbars-4.png)

From here, you can inspect the element and find the cause of the problem.


[Learn more here](https://polypane.app/docs/horizontal-overflow/).
