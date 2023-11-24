---
date: 2022-08-17
authors: Pankaj Parashar, Patrick Brosset
title: Inspect CSS animations
tags: ["tip", "css", "browser:edge", "browser:chrome", "browser:firefox"]
---

Modern browser DevTools provide a handy tool to inspect and modify CSS animations, CSS transitions, and Web animations. These tools not only help you debug animations, but also let you modify the various animation properties.

**For Chromium browsers (Chrome/Edge)**

Open the [Command Menu](./execute-commands.md) (`Cmd+Shift+P` or `Ctrl+Shift+P`), type "Show Animations", and press Enter.
This will open the **Animations** tool.

Next, trigger an animation in the webpage to record it in the tool. The **Animations** tool is divided into 4 sections:

1. **Controls**: From here, you can clear all currently captured animation groups, or change the speed of the currently selected animation group.
2. **Overview**: Select an animation group here to inspect and modify it in the Details pane.
3. **Timeline**: Pause and start an animation from here, or jump to a specific point in the animation.
4. **Details**: Inspect and modify the currently selected animation group like adding delay or changing timing duration.

**For Firefox**

Inspect an element that uses an animation in the **Inspector** tool (or a parent of that element) and open the **Animations** pane from the right sidebar.

Next, trigger the animation to view its timeline in the **Animations** pane.

Use the draggable vertical line to scrub through the timeline or jump to a specific point. You can also change the playback speed and do much [more](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html).

![Animation of Chrome DevTools showing how to inspect and modify CSS animations using the Animation inspector.](../../assets/img/inspect-css-animation.gif)
