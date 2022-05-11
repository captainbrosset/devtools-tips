---
date: 2021-12-16
authors: Patrick Brosset
title: Download all images from the page
tags: ["productivity", "browser:edge", "browser:chrome", "browser:firefox", "browser:safari"]
---
If you want to download all of the images on a webpage in one go, you can use the following few lines of JavaScript code to do it:

```javascript
$$('img').forEach(async (img) => {
  try {
    const src = img.src;
    
    // Fetch the image as a blob.
    const fetchResponse = await fetch(src);
    const blob = await fetchResponse.blob();
    const mimeType = blob.type;

    // Figure out a name for it from the src and the mime-type.
    const start = src.lastIndexOf('/') + 1;
    const end = src.indexOf('.', start);
    let name = src.substring(start, end === -1 ? undefined : end);
    name = name.replace(/[^a-zA-Z0-9]+/g, '-');
    name += '.' + mimeType.substring(mimeType.lastIndexOf('/') + 1);
    
    // Download the blob using a <a> element.
    const a = document.createElement('a');
    a.setAttribute('href', URL.createObjectURL(blob));
    a.setAttribute('download', name);
    a.click();
  } catch (e) {}
});
```

This will list all of the `img` elements on the page, then attempt to fetch them from the server (which might fail for some, depending on the [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) on the page), and then trigger the download of each one of them by the browser, using a `<a download>` element.

If you want to reuse this script often, you can store it in your **Snippets** on Chrome or Edge (learn how to do it [here](/tips/en/multi-line-console)).

![Screenshot of the Snippets panel in Edge, with the JS code from above, and the download panel open showing all images have been downloaded](/assets/img/download-all-images.png)