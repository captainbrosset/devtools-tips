---
date: 2023-03-22
authors: Kilian Valkhof
title: Find broken links
tags: ["tip", "testing", "browser:polypane"]
---

_The link to X on page Y doesn't work_ is probably a bug report you've received at some point. But how do you find these broken links before someone else does?

In Polypane, the **Outline Panel** will show you all the links on the page, and check if they return a 200 status code, or if they return an error code (like 404, or 500). 

![Polypane, with the outline panel open. Two of the links show a 404 error code](../../assets/img/find-broken-links-polypane.png)

Along with broken URLs, Polypane also finds unfinished/placeholder URLs like `mailto:` and `https://` without anything else after that text.