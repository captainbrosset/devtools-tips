---
date: 2023-01-04
authors: Patrick Brosset
title: Emulate idle detection states
tags: ["testing", "browser:chrome"]
---

The [Idle Detection API](https://developer.mozilla.org/docs/Web/API/Idle_Detection_API) is useful for web developers to detect when the user isn't interacting with their device. This can be useful for chat applications, for example, to mark the user as away.

**Note**: this API is only available on Chrome, Opera, and Samsung Internet.

The problem is testing the code that uses this API can be tricky, or even impossible. In order for your device to be idle, you need to stop using the mouse and keyboard. But in order to check that the code works correctly, you need to interact with the browser DevTools in some way.

Thankfully, Chrome has a nice little feature in its DevTools to emulate various idle detection states. Here's how:

* Using the **[Command Menu](/tips/en/execute-commands)**, open the **Sensors** tool.
* Scroll down and look for the **Emulate Idle Detector state** section.
* Choose one of the states to test if your code does what it's supposed to.

![Chrome DevTools' Sensors panel, showing a drop-down list with the different states that can be emulated.](/assets/img/emulate-idle-detection-states.png)

[Learn more about the Idle Detection API and the corresponding DevTools support](https://developer.chrome.com/articles/idle-detection/#devtools-support).
