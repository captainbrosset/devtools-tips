---
date: 2021-10-29
authors: Patrick Brosset
title: Easily change CSS number values from the keyboard in increments of 0.1, 1, 10, 100
tags: ["css", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
When playing with styling or layout code in DevTools, it's useful to be able to change widths, margins, and other CSS number values quickly.

Manually entering new numbers works of course, but it gets in the way of creativity a little bit.

In DevTools you can change numbers by using the arrow keys on your keyboard, this way you can easily and quickly test changes while checking the result in real time in the page. But there's more, you can also hold the various control keys to change the speed at which the numbers increment:

* Focus a CSS value in the **Styles**/**Rules** panel.
* Make sure the text cursor is on a number.
* Press the **Up** or **Down** arrow button on the keyboard to increment, or decrement the number by 1.
* Hold <kbd>Shift</kbd> at the same time to increment by 10.
* Or, hold <kbd>Alt</kbd> to increment by 0.1.
* Or, hold <kbd>Ctrl</kbd> to increment by 100.

![GIF animation of the Styles panel in Edge showing how numbers can be changed in various increments](/assets/img/increment-css-number-values.gif)
