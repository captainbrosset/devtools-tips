---
date: 2021-10-29
authors: Patrick Brosset
title: Evaluate XPath to find elements in the page
tags: ["html", "testing", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
DevTools supports 2 ways to evaluate [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath) expressions to help you locate elements in the page. All browsers support those 2 ways:

* From the Elements (or Inspector) panel:
  * Click anywhere in the panel to make sure it has focus
  * Press <kbd>ctrl</kbd>+<kbd>F</kbd> (or <kbd>cmd</kbd>+<kbd>F</kbd> on Mac) to focus the search field
  * Enter your XPath expression and press enter to find the elements that match

![Screenshot of the Inspector panel in Firefox showing the search field with an XPath expression](/assets/img/evaluate-xpath-1.png)

Note that you can also [copy the XPath expression from any element in DevTools](/tips/en/copy-element-xpath/).

* From the Console panel:
  * You can use the built-in `$x()` helper function like this:

```javascript
$x('//div/div/label');
```

![Screenshot of the Console panel in Safari showing an array of elements, as the result of executing the above function](/assets/img/evaluate-xpath-2.png)
