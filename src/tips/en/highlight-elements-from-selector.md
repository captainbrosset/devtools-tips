---
date: 2023-09-08
authors: Patrick Brosset, Kilian Valkhof
title: Highlight all elements on the page that match a given CSS selector
tags: ["tip", "highlighter", "css", "browser:firefox", "browser:chrome", "browser:edge", "browser:safari", "browser:polypane"]
see-also: ["highlight-css-properties-on-hover.md"]
---

When you select an element in DevTools (in the **Elements** or **Inspector** tool), you see the CSS rules that apply to it. But, these rules can also apply to other elements in the page than the currently selected one.

To see all the elements that match a given CSS rule selector, and therefore know which elements will be impacted if you change that rule:

* In Firefox, select an element in the **Inspector** tool, then click the **Highlight all elements matching this selector** button next to a CSS rule in the **Styles** pane:

  ![Firefox, with a webpage showing 3 highlighted elements, and the button enabled in the Styles pane](../../assets/img/highlight-elements-from-selector-firefox.png)

* In Chrome, Edge, or Safari, select an element in the **Elements** tool, then hover over a CSS selector in the **Styles** pane:

  ![Edge, with a webpage showing 3 highlighted elements, and a CSS selector hovered in the Styles pane](../../assets/img/highlight-elements-from-selector-edge.png)

* In Polypane, select an element in the **Elements** panel, then click the **Highlight all elements matching this selector** button next to a CSS rule in the **Styles** tab:

  ![Polypane, with three panes showing a website. in each pane there is a highlighted element. There is a button enabled in the Styles tab](../../assets/img/highlight-elements-from-selector-polypane.png)
