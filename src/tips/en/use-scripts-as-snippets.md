---
date: 2021-10-29
authors: Patrick Brosset, Christian Heilmann
title: Re-use scripts as snippets
tags: ["javascript", "browser:edge", "browser:chrome"]
---
The console is great to write JavaScript to read from the document or manipulate it but it's a terrible editor. 

The sources panel (in Edge or Chrome), however, is a full editor and you can use it to write more complex scripts to run in the context of the current page and keep them for later re-use.

These are called [snippets](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/javascript/snippets) and you can access them in the Sources tool on the left hand side (you may have to use the `>>` to reach them). You can create as many named snippets as you like and remove ones you don't need any more.\
Snippets have full access to the window object and you can use any of the console API methods in them too.

For example, this script would replace each image in the document with its alternative text:

```javascript 
$$('img').forEach(i=>{
   let txt = document.createElement('span');
   txt.innerText = i.alt;
   i.parentNode.replaceChild(txt,i);
   console.log(i.alt); 
});
```

You can run snippets by pressing <kbd>ctrl</kbd>+<kbd>Enter</kbd> (or <kbd>cmd</kbd>+<kbd>Enter</kbd> on mac) or using the button on the bottom of the editor.

![The snippets editor in the Sources tool with a snippet open in the editor](/assets/img/use-scripts-as-snippets-1.png)

Even better, you can use the [command menu](/tips/en/execute-commands) to run snippets more easily. Simply press <kbd>ctrl</kbd>+<kbd>P</kbd> (or <kbd>cmd</kbd>+<kbd>P</kbd> on mac) and type `!` followed by the name of your Snippet.

![Running a snippet from the Command menu](/assets/img/use-scripts-as-snippets-2.gif)
