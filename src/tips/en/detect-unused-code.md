---
date: 2023-03-03
authors: Patrick Brosset
title: Detect unused CSS and JavaScript code
tags: ["perf", "css", "javascript", "browser:edge", "browser:chrome", "browser:safari"]
---

To make sure your webpage loads and appears faster for your users, load only the CSS and JS code that your page requires to appear correctly. If some of your CSS or JS code is only needed later, when the user starts interacting with the webpage, then consider deferring this code until it's really needed.

Chrome and Edge have a useful **Coverage** tool that can help identify which parts of code are unused. To detect unused code on page load:

1. Open the **Coverage** tool by using the [Command Menu](/tips/en/execute-commands/): type <kbd>Ctrl+Shift+P</kbd> (or <kbd>cmd+Shift+P</kbd> on mac), then type **Coverage** and press <kbd>Enter</kbd>.

1. In **Coverage**, click the **Start instrumenting coverage and refresh the page** button (i.e., the refresh button).

1. Wait for the webpage to reload and for the coverage report to appear.

    The report shows a list of CSS and JS files with a percentage of unused bytes.

1. Click on any of the files to open it in the **Sources** tool.

    The file appears in the tool, and the line number gutter on the left indicates which lines were used, in blue, and which were unused, in red.

You can now decide whether some parts of your code can be loaded later, when needed only.

![Edge DevTools, with the Coverage tool in the drawer, showing a list of files, and the Sources tool in the main panel, showing one of the files with red and blue bars in the gutter, which indicates which lines are unused vs. used](/assets/img/detect-unused-code.png)

In Safari, you can detect unused JS code, with the following steps,

1. In the **Sources** panel, open the JS file from the left sidebar. 
2. Click the coverage icon `C` in the toolbar (top-right) to fade unexecuted code in the next page reload. 
3. Reload the page.
4. Lines that were not executed will be greyed out as opposed to the ones that were executed during the reload.

![Safari Web Inspector with Sources panel open, showing unexecuted code in a light gray color for a JS file](/assets/img/detect-unused-code-safari.png)
