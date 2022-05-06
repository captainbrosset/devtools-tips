---
date: 2022-02-09
authors: Patrick Brosset, Christian Heilmann
title: Use full browser window for device emulation
tags: ["testing", "productivity", "browser:edge", "browser:chrome", "browser:firefox"]
---
Emulating different devices in the browser is incredibly useful. It gets tricky when you are on a device with limited resolution as the emulated device needs to be zoomed down to fit the screen as a large part of the window is taken up by the Developer Tools.  

Firefox has a keyboard shortcut to show device emulation without Developer Tools - <kbd>command</kbd> + <kbd>option</kbd> + <kbd>M</kbd> on Mac and <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>M</kbd> on Windows/Linux.

On Chromium based browsers like Chrome and Edge the trick is to start the device emulation and then un-dock the Developer Tools. You can un-dock the tools into their own window using the `…` menu. This gives you the full browser as an emulation playground.

![Screencast showing device emulation andhow to undock the Developer Tools into an own window](/assets/img/use-full-browser-for-device-emulation.gif)
