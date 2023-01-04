---
date: 2023-01-04
authors: Patrick Brosset, Kilian Valkhof
title: See formatted JSON responses
tags: ["network", "browser:firefox", "browser:edge", "browser:polypane"]
---
Edge (starting with 110), Firefox and Polypane all have a very nice **JSON viewer** tool that makes it easy to view JSON responses from your server directly in the browser window.

You don't even need to open DevTools for it to work! Just enter the URL to a JSON response in a browser tab, in Edge, Firefox or Polypane, and instead of getting the raw text back, the JSON will be formatted and highlighted.

You can try it out with [this sample JSON response](https://jsonplaceholder.typicode.com/posts/1/comments), or [these JSON test files](https://codepo8.github.io/json-dummy-data/).

![The JSON viewer in Microsoft Edge](/assets/img/see-json-responses.png)

Note that in Firefox and Polypane, the JSON viewer has a few more options not yet available in Edge:

* Search within the response.
* See the raw text.
* See the headers.
* Save the file locally.
* Expand and collapse specific sections (Polypane only)
