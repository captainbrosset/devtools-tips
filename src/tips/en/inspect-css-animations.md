---
date: 2022-08-13
authors: Pankaj Parashar
title: Inspect CSS animations
tags: ["css", "browser:edge", "browser:chrome", "browser:firefox"]
---

Modern browser devtools provides a handy tool to inspect and modify the CSS animation effects. These tools not only helps you debug animations, but also lets you modify the various animation properties.

For Chromium browsers (Chrome/Edge),
- Open Command Menu (`Cmd+Shift+P` or `Ctrl+Shift+P`) > Run "Show Animations" and press Enter. This will open the **Animations** drawer. Trigger the animation to record it on the timeline. The Animations drawer is divided into 4 sections,
  1. **Controls**: From here, you can clear all currently captured animation groups, or change the speed of the currently selected animation group.
  2. **Overview**: Select an animation group here to inspect and modify it in the Details pane.
  3. **Timeline**: Pause and start an animation from here, or jump to a specific point in the animation.
  4. **Details**: Inspect and modify the currently selected animation group like adding delay or changing timing duration.

For Firefox,
- Inspect the element that uses CSS animations. Open the **Animations** pane from the right sidebar. Trigger the animation to view a synchronized timeline in the pane. Use the draggable widget to scrub through the timeline or jump to a specific point. You can also change the playback speed and do much [more](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html).
