---
date: 2023-11-21
authors: Pankaj Parashar, Patrick Brosset
title: Debug popups that appear on hover
tags: ["tip", "debug", "browser:edge", "browser:chrome", "browser:polypane"]
see-also: ["debug-js-hover.md", "debug-js-hover-2.md"]
---

As described in [Debug popups that appear on hover using JS](./debug-js-hover.md) and in [Debug popups that appear on hover using the debugger statement](./debug-js-hover-2.md), there are ways to debug popups that appear on hover using JavaScript.

The main problem in debugging overlay elements, like popups, is that they disappear as soon as the page loses focus, for example after moving focus to the DevTools window.

Chromium-based browsers such as Chrome and Edge, provide a way to emulate a focused state on the webpage even if DevTools has focus.

To emulate a focused state on the webpage:

1. Open the **Command Menu** (`Cmd+Shift+P` or `Ctrl+Shift+P`).
1. Type **rendering** and select the **Show Rendering** command. The **Rendering** tool appears at the bottom of DevTools.
1. In the **Rendering** tool, scroll down and check the **Emulate a focused page** option. The webpage now has focus.
1. Use DevTools to inspect and debug elements that only appear when focus is in the webpage.

![The Rendering tool in DevTools, showing the Emulate a focused page option](../../assets/img/debug-popups-on-hover.png)

## In Polypane

Polypane has a similar feature to retain the focus state inside each pane. To enable this feature:

1. Right-click the sync icon.
1. Check "focus".

In addition to retaining the focus, it is also kept in sync across all panes.

![Polypane with an opened context menu on the sync button, and the 'Focus' option checked and highlighted](../../assets/img/debug-popups-on-hover-polypane.png)