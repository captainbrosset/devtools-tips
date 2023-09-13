---
date: 2023-09-13
authors: Kilian Valkhof
title: Find the offset parent of an element
tags: ["css", "browser:polypane"]
---

To know what an element is offset against horizontally or vertically (Which you do with `position:relative` and a `left`, `top` or `inset` value) you need to know its **offset parent**. 

The offset parent of an element is the closest ancestor that has a position other than `static`, or the root element if none of the ancestors have positioning. Learn more about [offset parents on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).

To find the offset parent of an element in Polypane:

1. Inspect the element in the **Elements** panel.

1. Open the **Debug** tab, and then scroll down to the **Context** section.

   The **Offset parent** sub-section is listed there:

   ![Polypane showing an inspected element with the Debug tab open. The Offset parent entry is highlighted.](../../assets/img/find-the-offset-parent-of-an-element.png)

