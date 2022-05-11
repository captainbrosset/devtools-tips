---
date: 2021-11-07
authors: Patrick Brosset, Christian Heilmann, Alex Lakatos
title: Simulate pseudo CSS classes
tags: ["html", "css", "debug", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
---
If you use `:hover`, `:active`, and other such pseudo-classes in CSS, you can actually simulate these states in DevTools without having to hover over or click on buttons and links.

Open the Styles panel (in Chrome, Edge or Safari) or the Rules panel (in Firefox), and click the `:hov` button. This will expand a section that allows you to lock one or multiple of these pseudo-classes on the selected element.

![Screenshot of the :hov panel to simulate various pseudo-classes](/assets/img/simulate-pseudo-classes.png)

This is great when you write your styles, as you can define see the changes to - for example - a hover state of an element without having to use your mouse to see it in action. 

It is even more useful when you want to test the different states of an element. In the following screencast you can see how to use the state simulation to check the hover, active, visited and focused state of a link without having to interact with the link using your keyboard or mouse. If you want to try it out yourself, [here is the demo page](https://codepen.io/codepo8/pen/WNEMaPO).

https://www.youtube.com/watch?v=CgHuHYRyvXc
