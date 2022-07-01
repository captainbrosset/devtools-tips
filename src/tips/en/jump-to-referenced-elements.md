---
date: 2022-07-01
authors: Patrick Brosset
title: Jump from a label `for` attribute to the linked input (and more)
tags: ["html", "productivity", "browser:firefox"]
---

In Firefox, you can jump from an element that references the ID attribute of an other element, to that other element, by <kbd>Cmd</kbd>+clicking (or <kbd>Ctrl</kbd>+clicking) the attribute.

Here is a common example for when this is useful:

```html
<label for="foo">Label</label>
...
<input id="foo">
```

In the above example, clicking the `foo` attribute value in the `label` element (while holding the <kbd>Cmd</kbd> or <kbd>Ctrl</kbd> key) will jump to the `input` element and select it. This can be very useful if the elements are far apart in the DOM tree.

Note that this also works for other kinds of "links" like:

* `<button form="formID">`
* `<input list="datalistID">`
* `<td headers="header1ID,header2ID">`

![GIF animation showing the Firefox DevTools Inspector panel, the mouse clicks the for attribute of a label element and the selection jumps to the related input element](/assets/img/jump-to-referenced-elements.gif)

Thank you to [Manuel Matuzović](https://twitter.com/mmatuzo) for [sharing on twitter](https://twitter.com/mmatuzo/status/1542768792836636672).
