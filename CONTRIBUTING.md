# Contributing to DevTools tips

## Adding a new tip

* Choose a unique ID for this tip:
  * There shouldn't already be a file in `src/tips/en-US` with the name `<the-new-id>.md`
  * Make the ID human-readable, so it's easy to know what the tip is about without opening the md file
* Create the md file:
  * Create a new file: `src/tips/en-US/<the-new-id>.md`
  * Add a front matter to the file with the following information:
    * `title`: A title for the tip
    * `tags`: Tags so this tip is easy to find
  * Add the content of the tip in the file
  * If images are needed, add them to `assets`

## Building the site locally

* `npm init`
* `npx @11ty/eleventy` or `npx @11ty/eleventy --serve` to also start a local server.
