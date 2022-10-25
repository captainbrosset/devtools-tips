---
date: 2022-10-25
authors: Patrick Brosset, Christian Heilmann, Pankaj Parashar
title: Re-use scripts as snippets
tags: ["javascript", "browser:edge", "browser:chrome", "browser:safari"]
---
The **Console** is great to write short JavaScript expressions that read from the document or manipulate it. But it's also a terrible editor.

You can actually use a full editor in Edge, Chrome, and Safari to write more complex scripts and run them in the context of the current page and even keep them for later re-use.

Note: if you're looking for a way to do this in Firefox, there isn't currently one. However, you can [write code on multiple lines](/tips/en/multi-line-console/) which helps a lot already, and even search through previous Console expressions by pressing `F9` in the **Console** tool.

### In Edge & Chrome

In Chromium-based browsers, these are called [**snippets**](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/javascript/snippets) and you can access them in the **Sources** tool by clicking **Snippets** in the left hand side toolbar (you may have to use the `>>` to reach them).

You can create as many named snippets as you like and remove ones you don't need any more.

Snippets have full access to the window object and you can use any of the console API methods in them too. For example, this script would replace each image in the document with its alternative text:

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

Even better, you can use the [Command menu](/tips/en/execute-commands) to run snippets more easily. Simply press <kbd>ctrl</kbd>+<kbd>P</kbd> (or <kbd>cmd</kbd>+<kbd>P</kbd> on mac) and type `!` followed by the name of your Snippet.

![Running a snippet from the Command menu](/assets/img/use-scripts-as-snippets-2.gif)

### In Safari

In Safari, these scripts are called Console Snippets and can also be created from the **Sources** tool by clicking the `+` icon at the bottom of the tool, and choosing **Console Snippet...**.

![Creating a snippet in Safari](/assets/img/use-scripts-as-snippets-3.gif)
