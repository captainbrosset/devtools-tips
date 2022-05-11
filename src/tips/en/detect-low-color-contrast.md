---
date: 2022-03-03
authors: Patrick Brosset
title: Detect low color contrast issues
tags: ["accessibility", "browser:edge", "browser:chrome", "browser:firefox"]
---
Low color vision is very common, and your choice of text and background colors can negatively impact people's experience of your website. What seems legible to you might not be for everyone.

DevTools comes with a number of features to help you detect possible color contrast issues:

* You can simulate various color vision deficiencies ➡️ [Simulate color vision deficiencies](/tips/en/simulate-color-vision-deficiencies/).

* You can get color contrast ratios on hover, when using the inspect tool ➡️ [See quick accessibility information on hover](/tips/en/see-quick-a11y-info-on-hover/).

* In Chrome and Edge, you can list all contrast issues at once with the **CSS Overview** tool.
  * Open the [Command Menu](/tips/en/execute-commands/): <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> on mac).
  * Click **Capture overview**.
  * Click the **Colors** tab in the sidebar and scroll down to the **Contrast issues** section.

  ![Screenshot of the CSS Overview panel in Chrome, showing the color contrast issues section](/assets/img/detect-low-color-contrast-css-overview.png)

* In Firefox, you can find all contrast issues too, using the **Accessibility** panel.
  * Open the **Accessibility** panel from the toolbar.
  * In the **Check for issues** drop-down, select **Contrast**.
  * Click each item in the table and review the color contrast ratio.

  ![Screenshot of the Accessibility panel in Firefox, showing the list of contrast issues](/assets/img/detect-low-color-contrast-accessibility-panel.png)
