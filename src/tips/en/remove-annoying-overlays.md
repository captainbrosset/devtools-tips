---
date: 2022-08-09
authors: Patrick Brosset
title: Remove annoying page overlays and other elements
tags: ["productivity", "html", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
A lot of websites these days get covered with overlays and crammed with lots of ads and other things that make it hard to just read the content of the page.

To get rid of an annoying overlay, or any other element for that matter:

1. Open DevTools (press <kbd>F12</kbd>).
1. Start the inspect tool by clicking the pointer icon in the DevTools toolbar.
1. On the webpage, select the element which you want to remove. As you hover elements, they will get highlighted. Use this highlight to make sure you're selecting the right element.
1. Now, with the element selected in the **Inspector**/**Elements** panel, just press <kbd>Delete</kbd> on your keyboard to remove the element.

![GIF animation showing the whole flow from selecting the element with the inspect tool and pressing delete, resulting in the element disappearing from the page](/assets/img/remove-annoying-overlays.gif)

Credits go to [Chris Heilmann](https://christianheilmann.com/) for this tip and other cool DevTools tips for non-developers, which you can find here: [web cheatcodes](https://codepo8.github.io/web-cheatcodes/).
