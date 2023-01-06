---
date: 2021-06-30
authors: Patrick Brosset, Kilian Valkhof
title: Sample colors from the page
tags: ["productivity", "browser:edge", "browser:chrome", "browser:firefox", "browser:polypane"]
---
Being able to sample colors from the page is super useful. Firefox, Edge and Chrome all allow you to do this in 2 different ways:

* In Firefox it's really simple and doesn't even require opening DevTools:
  * Go to the main Firefox menu
  * Go to the "More Tools" submenu
  * Click on the Eyedropper menu item

![Animation of the eyedropper tool being started from the Firefox main menu.](/assets/img/sample-colors-from-the-page-1.gif)

* There is a second way to do this in Firefox from DevTools:
  * Open the Inspector panel
  * Click on the eye dropper button in the typ-right corner of the panel

![The eyedropper button in Firefox's inspector panel.](/assets/img/sample-colors-from-the-page-2.png)

* In Polypane you also do not need devtools
  * Click the eye dropper icon in the address bar.
  * Or use the keyboard shortcut `Shift Alt P`.

  After selecting a color, an overview of previously selected colors, previews and contrast ratios is shown.

![Animation of starting the eyedropper tool from Polypane's address bar.](/assets/img/sample-colors-from-the-page-4.gif)




* In Chrome and Edge:
  * Open the Elements panel and select an element that has some CSS color set to it
  * Find the color in the Styles pane and click on the color swatch icon next to it
  * Just start moving the mouse over the page

![Animation of starting the eyedropper tool from chrome and edge's color pickers.](/assets/img/sample-colors-from-the-page-3.gif)
