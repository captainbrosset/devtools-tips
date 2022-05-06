---
date: 2021-11-30
authors: Patrick Brosset
title: Copy a CSS rule as CSS-in-JS format
tags: ["css", "javascript", "browser:edge", "browser:chrome"]
---
Do you use a CSS-in-JS framework? If so, you know how frustrating it can be to copy CSS from DevTools and paste it into your code.

Indeed if the CSS you worked on in the **Styles** panel looks like this:

```css
h1 {
  background: hotpink;
  letter-spacing: .5rem;
  margin: 2rem;
  font-size: 3rem;
}
```

your CSS-in-JS framework probably expect it this way instead:

```javascript
{
  background: 'hotpink',
  letterSpacing: '.5rem',
  margin: '2rem',
  fontSize: '3rem'
}
```

Although the 2 are relatively similar, it's frustrating having to change semi-columns to commas, adding quotes, and swapping hyphen-separated property names with their camelCase equivalents.

In Edge and Chrome, you don't have to. They both have an option that does the re-formatting for you:

* Right-click on any rule in the **Styles** pane.
* Select **Copy all declarations as JS**.

Note that you can also use **Copy declaration as JS** if you only want one. But this feature really shines when you copy all declarations at once.

![GIF showing the Styles pane in Edge, with the "Copy all declarations as JS" option being used, and then pasting the result in the Console to show that it is formatted](/assets/img/copy-rule-as-css-in-js.gif)

Find out more about this feature on [the Microsoft DevTools docs website](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/css-in-js), or take a look at this short screencast:

https://www.youtube.com/watch?v=DCWSV0J5C8A
