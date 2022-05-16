---
date: 2022-05-16
authors: Patrick Brosset
title: Create your own simulated devices
tags: ["testing", "browser:chrome", "browser:edge", "browser:firefox"]
---

You can simulate various different devices from DevTools, to get an idea of how your webpage might render on those devices (note that this is only a simulation, the tool only changes the screen dimensions, touch event handling, and user agent string, but ultimately, the rendering of the webpage is still done by the browser you are using).

But what's even better, is that you can create your own simulated devices. This is useful if what's available in the list isn't enough for you. Here's how:

* Open DevTools (press <kbd>F12</kbd>), and start the device mode (on Edge and Chrome, click the **Toggle device emulation** button, on Firefox, click **Responsive Design Mode**).
* In the device simulation screen, expand the device drop-down and click **Edit...**. The device customization screen appears.
* From this screen, you can check or uncheck devices to customize the device drop-down, and you can click **Add Custom Device...** to add your own devices.
* Choose a device name, dimensions, dpr, and user agent string, and submit. Your new device should now be available in the device drop-down!

![GIF animation of the device mode in Firefox, showing how to customize the list of devices, including adding custom devices](/assets/img/add-new-devices.gif)
