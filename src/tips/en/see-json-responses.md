---
date: 2021-09-01
authors: Patrick Brosset
title: See formatted JSON responses
tags: ["network", "browser:firefox"]
---
Firefox comes with a very nice [JSON viewer](https://developer.mozilla.org/en-US/docs/Tools/JSON_viewer) that makes it easy to review responses from your server directly in the browser window.

You don't even need to open DevTools.

Just enter the URL to a JSON response in a tab, and instead of getting the raw text back, the JSON will be formatted and a toolbar will appear, with buttons to:

* Search within the response
* See the raw text
* See the headers
* Save the file locally

![Screenshot of the JSON viewer in Firefox](/assets/img/see-json-responses.png)

You can try it out with [this sample JSON response](https://jsonplaceholder.typicode.com/posts/1/comments).
