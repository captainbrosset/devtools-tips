---
date: 2022-02-25
authors: Patrick Brosset
title: Paste multiple CSS declarations at once
tags: ["css", "browser:firefox", "browser:safari", "browser:chrome", "browser:edge"]
---
You know how you can paste a CSS property name or value in the **Styles** (or **Rules**) panel? Well, you can actually paste several declarations at once too!

For example, try copying the following entire CSS code snippet, which includes multiple declarations:

```css
font-family: courier;
font-size: 14pt;
color: #f06;
margin: 4rem;
```

Now open DevTools, and the **Elements** (or **Inspector**) panel, find a CSS rule and click somewhere in it as if you were about to type a new property.

And now paste the code in. Instead of everything getting pasted in just this one text field, see how DevTools noticed that your clipboard contained multiple declarations, and created them all for you!

![GIF animation showing how pasting several declarations in a CSS rule in DevTools creates them all](/assets/img/paste-several-css-declarations.gif)
