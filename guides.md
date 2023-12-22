# DevTools Tips guides

Idea is to provide longer guides about DevTools, which can link off to individual tips.
People like individual tip pages, when they search for how to do things on google, they end up on my site.
But people are confused when they go to my home page. It doesn't say what the site is about, and the list of tips seems random. Should they read the first one? Is it sorted by popularity?

Two main audiences on devtoolstips.org:

* Beginner users, who likely need getting started guides.
* Advanced users (more than 5 years in web dev) who likely want just tips, but could use guides on advanced debugging topics.

According to my survey, the most frustrating things to do with devtools are:

1. Perf/memory
    Understanding performance results
    understanding the performance tab; just don’t know where to start
    memory leak profiling
    memory snapshot with detached dom nodes
    Performance metrics, I’ve never found a good process.
    Performance & network performance analysis 
    Tracing performance issues, although that's probably just me not far along enough the profiling learning curve.
    I would dream to have a guide to understand your profiler and flamegraphs, to be able to use them to improve the apps I am developping. I don't know how to use Performance tab to pinpoint the weak points of my apps.
2. CSS/HTML
    Found out why an element looks the way it looks
    Tracking modifications made in DevTools
    Finding the css rule that is causing a specific style to apply.
    deugging css is much better but still very hard
    Adding elements to HTML in the inspector - the "edit as html" is clumsy so I usually just end up doing it via console
    Workflow around getting to the bottom with what CSS styles actually apply. It is very much a me-problem, not a tool-problem. :-)
    sync change of the devtool with vscode
3. Understanding DevTools
    The number of panels and options.
    Quickly navigate between different panels/features of the dev tools to find the tools I’m looking for. Especially in the Chrome dev tools it‘s very hard to find features and keep an overview between all the different panels and tabs.
    I only do a few things with DevTools -> not discovering new things.
    I've been using these sections of devtools for years now and have probably built in the muscle memory for anything that I originally found tricky -> originally tricky, and lots of muscle memory = not using new things.
    Console opening underneath elements instead of changing tab
4. Debugging network issues
    Debugging network issues
    editing requests to be resent (having to go to cmd editing curl etc)
    Network analysis

1 seems mainly important for more senior people, but could apply to all.
2 and 3 seem important for beginners.

So the idea is to continue delivering tips, like today, so people can continue getting to them via search engines.
But, in addition to this, completely change the home page to be more of a learning experience landing page.
A page that explains what the site is about, gives a structured table of content of longer guides, as well as a list of popular/latest tips somewhere.

---

Understand DevTools

    What is DevTools
        Built-in, updates with the browser, hidden UI specific for developers, non-standards/product-specific.
    Who is it for
        Mostly for web devs, but non dev users might find it useful.
    The UI of DevTools
        General UI description, differences between browsers, drawers, panels, tabs, etc.
        Give ways to understand it, decomplexify it. Mental model to understand the UI. How is it structured.
            Overview diagrams.
    The tools
        Many different tools, mostly tools as panels.
        Get to know them, don't only use the same ones.
        Find documentation for them.
        List of tools, and what they're useful for.
            List them, say what they are for, some may seem complex but there's a reason for them. Say that you can open/close/move them.
            Explain how to find features, quick open tools, command menu, toolbar menus, etc. Also give mental model for which tool does what, where to debug particular kinds of problems.
    The workflow
        Runtime analysis, debugging, inspection
        Understand the difference between source code files, and runtime objects.
        Changes disappear when you refresh. How to bring them back.

---

DevTools for QA testers: xpath, selectors, etc.

---

Improve performance/memory usage.

Hard one to write. Needs SMEs to help. But could start with a high-level overview of how to use the tool at least.
And then dive deeper into some chosen topics. Like improving load time, runtime perf, memory usage, memory leaks, etc.

    Understanding performance results
    understanding the performance tab; just don’t know where to start
    memory leak profiling
    memory snapshot with detached dom nodes
    Performance metrics, I’ve never found a good process.
    Performance & network performance analysis 
    Tracing performance issues, although that's probably just me not far along enough the profiling learning curve.
    I would dream to have a guide to understand your profiler and flamegraphs, to be able to use them to improve the apps I am developping. I don't know how to use Performance tab to pinpoint the weak points of my apps.

First check what's the most important problem:
    Is it on page load?
    Is it a specific scenario, at run time. If so, repro this scenario, define it clearly.

     too many/large repaints: paint flashing?
     too many recalc?
     too many requests?

From Alex:

"The most important advice we give teams struggling with performance is to get one (preferably more, but start small) critical user journey -- that is, clicks across several pages that represent a real session -- into bench automation so that teams get high-quality, low-latency feedback about how their changes look.

Per-PR perf-tooling is essential to keeping teams healthy and avoiding regression on the Performance Management Maturity scale:

https://lnkd.in/gcTjnPMh"


Do this soon and often. Use same scenarios to find regressions.
Soon = good because the developer is still involved in the product development and has the specifics paged into memory. Which is why it's great to use devtools, it's already part of your dev loop.


Also talk about throttling/empathy:

Folks often come to us with performance problems that are, in fact, respect issues.

When your products are designed to serve users who aren't privileged in location, language, ability, and wealth, performance problems get caught early and rarely metastasize.

If you aren't sure how to change your product culture, start with GDS's Design Principles and "Start With User Needs":

https://lnkd.in/gc88r25A

Hard part is to visualize what's going on. To see the problems. DevTools helps with this.
You can extract a ton of data out of a profile, but visualizing what's important is key.

---

Personalize DevTools
    Make the UI work for your
        Move tools around, open/close tools
        Theme
        Language
        Zoom the display
        Keyboard shortcuts
        Install extensions
    Go further
        Create your own theme
        Customize objects
        Inspect DevTools with DevTools

---

Debug CSS and HTML

---
