---
date: 2022-03-25
authors: Patrick Brosset
title: Start your HTML and CSS prototypes in the browser directly
tags: ["css", "html", "testing", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
Sometimes I need a blank canvas to prototype an idea with HTML and CSS. Something outside of the website I'm working on. Maybe I need a new layout or component and I'm not sure yet how to do it.

In this case, starting from a blank HTML page makes a lot of sense since I don't have to worry about the rest of the site yet and only focus on my prototype.

Turns out a quick way to do this is to start it directly in the browser, instead of creating a new HTML file somewhere in a `dev` folder! Here's how I do it:

1. I open my favorite browser and type something like this in the address bar: `data:text/html,<div></div>`.

   This is a data URL that will tell the browser to just load the HTML content I provided after the `data:text/html,` prefix, instead of loading a remote website.
   I can also write more fancy HTML, maybe add more elements, and attributes. But usually just one div is enough to get me started, because my next step ...

1. I immediately open DevTools and dock it to the side of the browser window.

   I like having it on the side because it gives me a simple way to resize the space available to my prototype by just dragging the splitter between DevTools and the page.

1. And then that's when the prototyping begin.

   Using the **Elements**/**Inspector** panel, I can add more elements with the **Edit as HTML** feature, add and modify attributes by double-clicking them, add classes from the **Styles**/**Rules** panel, etc.

1. When I'm done coding in the browser and feel like I have what I wanted, it's time to export my changes so they don't disappear when close the browser window.

   * To export the HTML code, I usually do this: right-click on the `<body>` element and choose **Copy inner HTML**.
   * To export the CSS code: in Firefox, I open the **Changes** sidebar panel and click **Copy All Changes** ([learn more](../find-css-changes)), and Chrome/Edge I go to **Sources**, find the **inspector-stylesheet** source and copy the content from it.

![Screenshot of Edge , with a tab opened on the HTML data-url, and DevTools opened showing the Elements and Sources panels with local changes made](/assets/img/prototype-in-the-browser.png)

Here is a quick demo I did 4 years ago showing roughly this workflow. Things have changed a bit, but most of it still applies:

https://www.youtube.com/watch?v=o5wy237B5qc
