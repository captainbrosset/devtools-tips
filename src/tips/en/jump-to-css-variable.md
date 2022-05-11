---
date: 2021-09-27
authors: Patrick Brosset
title: Jump from a CSS variable usage to where it is defined
tags: ["css", "browser:chrome", "browser:edge"]
---
CSS **[custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)** (also called **variables**) are very useful to avoid repeating values in CSS, like colors for example.

You can define and use a custom property as shown below:

```css
rule-1 {
  --my-main-color: blue;
}
rule-2 {
  color: var(--my-main-color);
}
```

Sometimes, it can be hard in DevTools to see both the place where the variable is used **and** the place where it is defined. There may be a lot of rules and properties that apply to an element, requiring a lot of scrolling and searching.

In Edge and Chrome, you can simply click on a `var(--foo)` function to jump to where the `--foo` variable is defined!

* In Edge or Chrome, select an element in the **Elements** panels which has CSS rules applied that use custom properties.
* Hover over the property name inside the `var()` function. You can see the value in a tooltip.
* Click on the property name.
* The Styles panel scrolls to where the property is defined and highlights it for a second.

![GIF animation of clicking on a custom property link in the Styles panel in Edge](/assets/img/jump-to-css-variable.gif)
