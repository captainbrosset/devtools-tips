---
date: 2021-11-17
authors: Patrick Brosset, Christian Heilmann
title: Take screenshots of your site in a device frame
tags: ["export", "browser:chrome", "browser:edge"]
---
Taking a photo of a mobile device or tablet is daunting as you have to deal with fingerprints, glare and focus issues. Using Device Emulation makes this a lot easier.

![Screenshot of the devtoolstips.org website in an iPhone frame](/assets/img/take-in-device-screenshots.png)

To take a screenshot of a web page inside a device frame, use either Chrome or Edge (or any Chromium browser):

* In DevTools, turn on **Device Emulation** by clicking the icon or pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> (<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> on Mac).
* Select a device from the Device dropdown menu. Be aware that not all devices have graphical frames.
   ![The device dropdown menu open and showing all the options](/assets/img/take-in-device-screenshots-devices-dropdown.png)
* Click the **…** button (**More options**) and select **Show device frame**.
   ![Turning on device frame in the more options menu of the Device emulation tool](/assets/img/take-in-device-screenshots-show-device-frame.png)
* Click the **…** button again and select **Capture screenshot**.
   ![Selecting the screenshot option from the More Options menu](/assets/img/take-in-device-screenshots-capture-screenshot.png)

That's it, you now have a photo of your web page inside a device on transparent background.

You can see this in action in the following video:

https://www.youtube.com/watch?v=ZViLMjxpqEE