---
date: 2023-02-02
authors: Patrick Brosset
title: Disable abusive debugger statements that prevent inspecting websites
tags: ["javascript", "debug", "browser:firefox", "browser:chrome", "browser:edge"]
---
Some websites make it impossible to use DevTools by adding `debugger` statements in their code.

The statements don't do anything for normal users, but as soon as DevTools is opened, the JavaScript execution pauses, and this makes it impossible to debug or inspect the site as normal.

To disable the abusive `debugger` statement:

* Open the **Sources** tool (or **Debugger** tool in Firefox).
* Right-click the line number gutter, right next to the `debugger` statement.
* Either click **Never pause here**.
* Or create a new **Conditional breakpoint**, and enter `false` as the condition for this breakpoint.
* Refresh the page.

Now, everytime this line of code is executed, the nasty `debugger` statement will be ignored and the page will run normally!

![The Sources tool in Firefox, showing how to add a conditional breakpoint.](/assets/img/disable-abusive-debugger-statement.gif)

Thank you [François for the tweet](https://twitter.com/quicksave2k/status/1610250172210073607) and [Pankaj Parashar for the tip about using the **Never pause here** option](https://github.com/captainbrosset/devtools-tips/issues/66).
