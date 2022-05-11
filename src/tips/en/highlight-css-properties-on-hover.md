---
date: 2021-12-09
authors: Patrick Brosset
title: Highlight the effect of individual CSS properties on hover
tags: ["css", "highlighter", "browser:chrome", "browser:edge"]
---
How do certain CSS properties apply to the page isn't always an easy question to answer.

While some properties might be considered simple, others have complex effects that depend on other factors. Properties like `justify-content` or `gap` depend on writing and layout direction for example.

Edge and Chrome help with this by highlighting the effect that individual CSS properties have in the page. This doesn't work with all properties, but does work with `margin`, `padding`, `border`, `justify-content`, `align-items`, `gap`.

* Find one of the above properties in the **Styles** panel.
* Move your mouse cursor over it.
* Watch as the corresponding affected region of the element gets highlighted in the page.

![GIF animation showing a flex layout in the page, and the cursor moving over various properties in the Styles pane](/assets/img/highlight-css-properties-on-hover.gif)
