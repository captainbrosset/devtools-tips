---
date: 2023-11-24
authors: Patrick Brosset
title: Block DevTools
tags: ["help", "browser:chrome", "browser:edge", "browser:safari", "browser:firefox"]
---
There are two levels to consider when talking about blocking (or disabling) DevTools in a browser:

1. Disabling DevTools at the browser level. For example, if you have a browser for web development, and another one for personal browsing, you may want to disable DevTools in the latter. Maybe because you don't want <kbd>F12</kbd> to open DevTools. Or maybe it's your mum's browser and she always gets confused when she accidentally opens DevTools.
1. Disabling DevTools for an entire organization. For example, you're a teacher and you don't want your students to be able to use DevTools. Or your an IT admin and you want to disable DevTools for all the computers in your company.

All browsers have different ways to disable DevTools. Here are the ones we currently know about. If you know of others, please [let us know on the DevTools Tips GitHub repo](https://github.com/captainbrosset/devtools-tips).

* **Firefox**:

  * You can disable the <kbd>F12</kbd> keyboard shortcut by going to `about:config`, searching for the `devtools.f12_enabled` setting, and setting it to `false`. Other DevTools shortcuts are still enabled by default though.
  * You can disable DevTools for your organization by using the [`DisableDeveloperTools` policy](https://mozilla.github.io/policy-templates/#disabledevelopertools). Learn more about [policies in Firefox](https://support.mozilla.org/products/firefox-enterprise/policies-customization-enterprise/policies-overview-enterprise).

* **Edge**:

  * In Edge, the <kbd>F12</kbd> keyboard is already disabled by default. The first time you press it, a confirmation dialog appears, and you can choose to either open DevTools, or continue blocking the shortcut. You can also ask Edge to remember your decision so you never have to see the dialog again. Other DevTools shortcuts are still enabled by default though.
  * You can disable DevTools for your organization by using the [`DeveloperToolsAvailability` policy](https://learn.microsoft.com/deployedge/microsoft-edge-policies#developertoolsavailability). Learn more about [policies in Edge](https://learn.microsoft.com/deployedge/microsoft-edge-policies).

* **Chrome**:

  * You can disable DevTools for your organization by using the [`DeveloperToolsAvailability` policy](https://chromeenterprise.google/policies/#DeveloperToolsAvailability). Learn more about [policies in Chrome](https://chromeenterprise.google/policies/).

* **Safari**:

  * In Safari, DevTools (or _Web Inspector_ as it's called there) is disabled by default. You can enable it in the Advanced tab of the Preferences. See [Enable DevTools in Safari](./enable-safari-devtools.md).
