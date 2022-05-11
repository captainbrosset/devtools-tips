---
date: 2022-03-16
authors: Patrick Brosset
title: Debug unwanted scrollbars
tags: ["css", "browser:firefox"]
---
Sometimes scrollbars appear on a web page in places we don't want them to. And when this happens, it's not always very straightforward to fix the problem. Which container is responsible for the scrollbars in the first place? Which elements are even causing the scrollbars to appear? Why are they too big?

All very good questions that can cause a lot of time lost and frustration.

Thankfully, Firefox has a tool just for this. In the **Inspector** panel, where the DOM tree of the page is displayed, you will notice **scroll** badges next to all elements that have scrollbars!

![Screenshot of Firefox DevTools, with the Inspector panel showing the Scroll badge on an element](/assets/img/debug-unwanted-scrollbars-1.png)

This takes care of our first question: which element is scrolling? As for the second question: which elements are causing the scrolling, if you just click on one of the **scroll** badges, the **Inspector** will jump to the element (or elements) that caused the scrollbars to appear and highlight them for you!

![Screenshot of Firefox DevTools, with the Inspector panel showing the Overflow badge on 3 highlighted elements](/assets/img/debug-unwanted-scrollbars-2.png)

Now this feature won't answer our third question: Why are these elements too big? But once you know which elements are the root cause of the problem, you can use the **Rules** siderbar pane to figure out which CSS properties are responsible for it.

[Learn more here](https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow).
