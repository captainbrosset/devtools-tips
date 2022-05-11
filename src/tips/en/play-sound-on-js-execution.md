---
date: 2021-09-08
authors: Patrick Brosset
title: Play a sound when a line of JavaScript is executed
tags: ["debug", "javascript", "browser:safari"]
---
Sometimes pausing execution when a line of JavaScript is executed is too much, sometimes you only want to know that the line was executed at all, not pause there.

To do this you can add `console.log()` statements in your code, or [use logpoints](/tips/en/use-logpoints/).

In Safari, you can play an audio beep instead! This way you can hear that the line got executed, and your console doesn't get cluttered with more messages.

To add an audio breakpoint:

* Add a breakpoint on a line of code by clicking in the line number gutter.
* Right-click on the breakpoint and select **Edit breakpoint**.
* Click **Add action** and select **Play sound** from the action dropdown.
* Check the **Automatically continue after evaluating** option to avoid pausing on this line.

And that's it! Now every time this line is executed, an audio beep will be played.

You can remove the breakpoint by right-clicking on it and selecting **Delete Breakpoint**.

![GIF animation showing how to add the audio breakpoint in Safari Web Inspector](/assets/img/play-sound-on-js-execution.gif)
