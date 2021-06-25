---
title: Debugging your CSS and page structure with outline visualizations.
tags: ["highlighter", "css", "browser:chrome"]
---
`* { outline: 1px solid red; }` is a debugging debugging trick I learned some time ago from [@adamwathan](https://twitter.com/adamwathan).

It's (to me at least) a simple, yet powerful method for understanding the page structure and finding overflow bugs, knowing why your element is being pushed away for no apparent reason (very annoying right? 😂), etc.

Here's how to do it:

1. Open Chrome's DevTools (F12).
2. Go to the Elements Tab.
3. Click the "+" (New Style) icon.
4. Add the rule  `{ outline: 1px solid red; }` to the CSS Selector `*`.

Here's the video:

![outline-everything](/assets/img/outline-everything.gif)

And voila! everything is outlined now so you can understand what's going on :)