---
date: 2023-05-31
authors: Patrick Brosset
title: Find all elements with a specific style
tags: ["css", "console", "testing", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari", "browser:polypane"]
see-also: ["find-all-images-without-alt-text.md", "find-broken-links.md", "download-all-images.md"]
---

Let's say you want to list all of the elements on a page that are absolutely positioned. Or maybe you want to find all of the elements that use CSS grid. How would you do that?

One way is to run a few lines of JavaScript code in the **Console** tool to iterate over all of the elements and check their computed styles. Here's how:

1. Open the **Console** tool.

2. Copy the below code snippet and paste it in the **Console**. Change the `whatToFind` object to match your needs.

  ```js
  var whatToFind = {
    property: "position",
    values: ["absolute"]
  };
  
  var walker = document.createTreeWalker(
    document.documentElement,
    NodeFilter.SHOW_ELEMENT,
    el => {
      const style = getComputedStyle(el)[whatToFind.property];
      return whatToFind.values.includes(style)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
    }
  );
  
  while (walker.nextNode()) {
    console.log(walker.currentNode); 
  }
  ```

3. Press <kbd>Enter</kbd> and voila! In the screenshot below, all of the absolutely positioned elements on the page are listed.

![The Firefox DevTools Console tool, with the code shown on the left, and the resulting nodes listed on the right](../../assets/img/find-all-elements-with-style.png)

4. If you wanted to find all of the elements that use CSS grid, you would change the `whatToFind` object to this:

  ```js
  var whatToFind = {
    property: "display",
    values: ["grid", "inline-grid"]
  };
  ```

To avoid having to copy or type this code every time, you can also use the **Snippet** tool in Chromium-based browsers as explained in [Re-use scripts as snippets](./use-scripts-as-snippets.md).
