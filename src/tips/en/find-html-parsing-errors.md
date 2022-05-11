---
date: 2022-01-17
authors: Patrick Brosset
title: Find HTML parsing errors
tags: ["html", "browser:firefox"]
---
DevTools is so full of features these days that we hardly ever use View-Source anymore. But it turns out that it has one trick up its sleeves that other tools don't, at least in Firefox.

Indeed, in that browser, on top of showing the HTML source code of the page, it also highlights in red the HTML parsing errors!

Consider the following HTML code:

```html
<!DOCTYPE html>
<ul>
  <li>
    Lorem ipsum dolor sit...
  </li>
  <li>
    Lorem ipsum dolor sit...
  </li>
  <li>
    Lorem ipsum dolor sit</em>, ...
  </li>
</ul>
```

Firefox's view-source makes it easy to find the stray `</em>` ending tag! You can also hover over it to reveal more information about the type of parsing error.

![Screenshot of the View-Source page in Firefox, with a stray em closing tag highlighted in red, with a tooltip](/assets/img/find-html-parsing-errors.png)
