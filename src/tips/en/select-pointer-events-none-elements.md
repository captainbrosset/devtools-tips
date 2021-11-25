---
title: Select elements with pointer-events:none by holding Shift
tags: ["html", "css", "browser:chrome", "browser:edge"]
---
When selecting elements from the page they normally get highlighted on hover and selected on click. However certain elements can't be selected.

Indeed, if an element does not react to pointer events because the `pointer-events:none` CSS declaration is set, then you just can't select it, and the only way to get to it is to find it in the **Elements**/**Inspector** panel.

In Chrome and Edge, you can hold the <kbd>Shift</kbd> key on your keyboard while hovering elements in the page! When you do this, even elements with `pointer-events:none` can be selected!

![Gif animation showing how a pointer-events:none element normally can't be selected, except when Shift is pressed](/assets/img/select-pointer-events-none-elements.gif)

If you wish Firefox had this too, make your voice heard on [this bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1129488).
