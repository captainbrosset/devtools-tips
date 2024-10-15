---
date: 2022-07-01
authors: Patrick Brosset, Kilian Valkhof
title: Jump from a label `for` attribute to the linked input (and more)
tags: ["tip", "html", "productivity", "browser:firefox", "browser:polypane"]
---

In HTML, it's possible for certain attributes to reference other elements by their IDs. For example, a `<label>`'s `for` attribute can be used to link the label to the input it's associated with:

```html
<label for="foo">Label</label>
<input id="foo">
```

Other cases of attributes referencing the ID of other elements include:

* `<button form="formID">`
* `<input list="datalistID">`
* `<td headers="header1ID,header2ID">`

In DevTools, to jump from an element that references another element's ID attribute, to that other element, use the following steps:

* In Firefox, in the **Inspector** tool: hold <kbd>Cmd</kbd> on MacOS or <kbd>Ctrl</kbd> on Windows or Linux, and then click the attribute.
* In Polypane, in the **Elements** panel: click the attribute.

The referenced element is selected in the DOM tree.

In the above `<label>`/`<input>` example, using the above steps on the `foo` value of the `for` attribute selects the `input` element.

![Animation showing the Firefox DevTools Inspector panel, the mouse clicks the for attribute of a label element and the selection jumps to the related input element.](../../assets/img/jump-to-referenced-elements.gif)

Thank you to [Manuel Matuzović](https://twitter.com/mmatuzo) for [sharing on twitter](https://twitter.com/mmatuzo/status/1542768792836636672).
