---
date: 2024-10-15
authors: Patrick Brosset
title: Override source files to test changes in the browser
tags: ["tip", "debug", "testing", "browser:edge", "browser:chrome", "browser:firefox"]
---
It can be helpful to make quick changes to the source code that a site uses, especially when debugging a site in production. For example, if you suspect that a bug is caused by a specific line of code, and you want to test a fix, it can be faster and easier to make the required change temporarily on the production code directly, rather than setting up a local development environment.

Chrome, Edge, and Firefox allow you to temporarily override any source file that a site uses with files stored locally on your computer.

Note that the files are only overridden while DevTools is open, and no changes are made to the original files on the server.

## Override files in the Firefox DevTools Debugger tool

1. In Firefox DevTools, open the **Debugger** tool.

1. In the **Sources** panel, find the file that you want to override.

1. Right-click the file and select **Add script override**.

   A file explorer window opens.

1. Choose a location for the file override and submit.

1. Make changes to the local file stored at the location you chose.

1. Refresh the page in Firefox to see the changes.

## Override files in the Chrome or Edge DevTools Sources tool

1. In Chrome or Edge DevTools, open the **Sources** tool.

1. In the right pane, open the **Overrides** tab. You might need to click the **More tabs** chevron icon to see that tab.

1. Click **Select folder for overrides**.

   A file explorer window opens.

1. Choose a folder for the file overrides to be stored in, and then submit.

   DevTools requests your permission to access the file system, click **Allow**.

1. In the right pane, open the **Page** tab.

1. Find the file that you want to override and click it.

   The file content appears in the editor.

1. Make changes to the file content, and then save the file.

   The changes get saved locally within a subfolder of the folder you chose. The subfolder is named after the domain of the site you're debugging. If you go to another site and override a file from that site, the overrides are stored in another subfolder of the folder your chose.

1. Refresh the page in Chrome or Edge to see the changes.
