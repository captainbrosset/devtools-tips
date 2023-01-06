---
date: 2022-10-19
authors: Patrick Brosset, Kilian Valkhof
title: Simulate different devices and screen sizes
tags: ["testing", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari", "browser:polypane"]
---
There is a great mode in all major browser developer tools that makes it really easy to test your webpage under different screen sizes and even simulate other devices.

![Animation showing how the tool makes it easy to resize the screen size by dragging the mouse](/assets/img/simulate-devices.gif)

To enable it:

* In Chrome:

  In DevTools, click **Toggle Device Toolbar** or press <kbd>Ctrl+Shift+M</kbd> (or <kbd>Cmd+Shift+M</kbd> on macOS).

* In Edge:

  In DevTools, click **Toggle device emulation** or press <kbd>Ctrl+Shift+M</kbd> (or <kbd>Cmd+Shift+M</kbd> on macOS).

* In Firefox:

  * You can do it even without opening DevTools: go to **Application menu** > **More tools** > **Responsive design mode**, or press <kbd>Ctrl+Shift+M</kbd> (or <kbd>Cmd+Shift+M</kbd> on macOS).
  * Or, if you're in DevTools, click **Responsive Design Mode**, or press <kbd>Ctrl+Shift+M</kbd> (or <kbd>Cmd+Shift+M</kbd> on macOS).

* In Safari:

  In the **Develop** menu bar item, click **Enter Responsive Design Mode**, or press <kbd>Ctrl+Command+R</kbd>.

* In Polypane:

  This is the default mode in Polypane. Unique to Polypane is that it allows you to see [multiple different sizes side-by-side](/tips/en/simulate-multiple-devices/).

  ![Polypane showing three different devices side-by-side.](/assets/img/simulate-devices-polypane.png)

When enabled, you can:

* Resize the screen size by hand.
* Choose one of the pre-defined devices to simulate. **Note**: this option only simulates the screen size, user agent string, and touch events (when necessary), but doesn't render the page like the real device would. Always test your webpage with the real device too.
* [Create your own simulated devices](/tips/en/add-new-devices).
* [Capture screenshots](/tips/en/take-in-device-screenshots).
* [Throttle the network speed to test your website on slower connections](/tips/en/throttle-network-speed).
* And more.
