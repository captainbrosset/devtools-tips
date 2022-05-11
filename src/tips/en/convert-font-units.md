---
date: 2021-07-12
authors: Patrick Brosset
title: Convert font property units
tags: ["css", "browser:edge", "browser:chrome", "browser:firefox"]
---
Font CSS properties such as `font-size`, `line-height` or `letter-spacing` can be expressed in multiple different length units (like many other CSS properties).

Firefox, Chrome and Edge allow you to convert values between these units easily. 

* In Firefox
  * Find an element in the Inspector panel that has font properties which you'd like to change
  * Select the Fonts sidebar tab
  * Use the unit drop-downs next to `Size`, `Line Height` or `Spacing` to convert the current value to another unit

![Screenshot of the fonts panel in Firefox, showing the unit conversion drop-down](/assets/img/convert-font-units-1.png)

* In Chrome or Edge
  * You first need to enable the Fonts editor experiment
    * Go to the DevTools settings (F1)
    * Go to the Experiments tab
    * Check the "Enable the new Font Editor tool within the Styles pane" box
    * Re-start DevTools
  * Find an element in the Elements panel that has font properties which you'd like to change
  * Click on the `Aa` icon in the Styles sidebar, in the CSS rule that contains the property you want to convert
  * Use the unit drop-downs next to `Font Size`, `Line Height`, `Font Weight` or `Spacing` to convert the current value to another unit

![Screenshot of the fonts panel in Edge, showing the unit conversion drop-down](/assets/img/convert-font-units-2.png)