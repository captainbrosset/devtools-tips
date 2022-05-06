---
date: 2022-02-02
authors: Patrick Brosset
title: Record and replay user flows
tags: ["testing", "perf", "browser:chrome"]
---
Have you ever had to test the same user scenario again and again while working on a fix or performance improvement?
Sometimes you just have to click the same buttons and do the same actions every time you reload the page to test something. And this can be very time consuming and frustrating.

Chrome has a very handy **Recorder** panel to help with this. This panel lets you record any user flow once and then replay this flow as many times as you want.

To record a new flow:

* Open the **Recorder** panel by going to **More options** > **More tools** > **Recorder** (or using the [command menu](/tips/en/execute-commands) to open it from the keyboard).
* Click **Start new recording**, give your recording a name, and click the record button to start.
* Use the page as normal, clicking on buttons, using form controls, navigating to other pages, etc.
* When you're done with the user flow you want to record, click **End recording**.

From that point on, the recording will be available in the **Recorder** panel and you can simply replay it any time you want:

* Find your recording in the panel's initial screen, or from the dropdown located in the panel's toolbar.
* Click the **Play recording** button.

![GIF animation of the Recorder panel automatically replaying a set of recorded steps](/assets/img/record-replay.gif)

You can learn a lot more about this panel (including how to edit a recording and how to use it to test performance improvements) in [the Recorder documentation](https://developer.chrome.com/docs/devtools/recorder/).
