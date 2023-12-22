---
date: 2023-05-05
authors: Patrick Brosset
title: Speed up or slow down a video
tags: ["tip", "console", "personalization", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---

You can speed up or slow down a video on a website by using the [`playbackRate`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playbackRate) property of the video element.

This can be very useful for when the website makes it tricky to do this in the UI!

1. Open DevTools.
1. Select the `<video>` element by either right-clicking on it and choosing **Inspect Element** or by using the **Elements** or **Inspector** tool.
1. Go to the **Console** tool.
1. Type `$0.playbackRate = 2` and press **Enter**.

This number you choose is the multiplier for the playback speed. So `2` will make the video play twice as fast, `0.5` will make it play at half the speed, etc.

Thank you [Umar Hansa](https://twitter.com/umaar/status/1654079892240171010) for this tip!

![Screenshot of the Console tool showing the playbackRate property](../../assets/img/change-video-playback-rate.png)
