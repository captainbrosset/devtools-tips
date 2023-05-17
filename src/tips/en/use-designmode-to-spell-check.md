---
date: 2022-05-02
title: Use document.designMode to spell check your webpage
tags: ["console", "productivity", "testing", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari", "browser:polypane"]
---

[Amelia Bellamy-Royds](https://twitter.com/AmeliasBrain) shared a [really cool tip](https://twitter.com/AmeliasBrain/status/1521146127327801345) to spell-check a webpage's content from DevTools:

1. Open DevTools, and go to the **Console** tool.
1. Type `document.designMode = "on"` and press <kbd>Enter</kbd>.
1. Click somewhere on the webpage.
1. The browser now highlights the misspelled words in red!

![Edge, with DevTools opened on the side. The designMode trick was used in the Console, and the webpage shows a lot of red squiggly lines](../../assets/img/use-designmode-to-spell-check.png)
