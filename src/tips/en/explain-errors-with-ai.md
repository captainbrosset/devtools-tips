---
date: 2024-01-05
authors: Patrick Brosset
title: Explain console errors by using artificial intelligence
tags: ["tip", "console", "help", "browser:edge"]
---

Edge DevTools lets use the Microsoft Copilot AI assistant to explain errors and warnings in the **Console** tool.

Console errors can sometimes be hard to understand and fix. The large language models that power modern AI assistants such as Microsoft Copilot are trained on so much data that they are sometimes able to reason about errors and provide helpful explanations.

The Console in Edge DevTools is now linked to the Copilot AI assistant sidebar in Edge. To explain an error in Edge DevTools:

1. Make sure you have the Copilot icon displayed in the top-right corner of Microsoft Edge. If not, go to **Settings and more** (...) > **Settings** > **Sidebar** > **Copilot** to enable it.
1. Make sure you're sign-in to Microsoft Edge with your personal Microsoft account.
1. Find the error you're interested in in the **Console** tool.
1. Click the **ask Copilot: "Explain this error"** button next to the error message.

The Copilot sidebar appears, your message is sent to the AI assistant, and you get a response that, hopefully, helps you understand the error.

![Edge with DevTools opened, an error was clicked, and Copilot is in the Edge sidebar, showing the error message and the explanation](../../assets/img/explain-errors-with-ai.png)

To learn more, see [Explain DevTools Console errors and source code using Copilot in Edge](https://learn.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features/copilot-explain).