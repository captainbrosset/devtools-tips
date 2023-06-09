---
date: 2023-06-09
authors: Patrick Brosset
title: Debug your Safari Web Apps on macOS
tags: ["apps", "browser:safari"]
---
Starting with [Safari 17 (announced at WWDC 2023)](https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/) any website you use in Safari can be installed as a Web App on macOS. Once installed, the Web App shows up like any other app on macOS, in all of the same places, like in the Dock. It also has its own standalone window.

Once installed, you can debug your Web Apps using the Web Inspector in Safari, here is how:

1. If you haven't done this already, enable the developer features in Safari. This only needs to be done once:

   1. In Safari, go to **Safari** > **Settings**.
   1. Select the **Advanced** tab.
   1. Click **Show features for web developers**.

1. Open your Web App.
1. In Safari, go to the **Develop** menu.
1. Select the device your Web App is running on. This will be your Mac's machine name.
1. In the submenu, select the Web App you want to debug.

To learn more, see [Safari's Develop menu documentation](https://developer.apple.com/documentation/safari-developer-tools/develop-menu).

![The Develop menu in the Safari menu bar, showing different devices and debugging targets](../../assets/img/debug-safari-mac-webapps.png)
