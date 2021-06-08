# Contributing to DevTools tips

## Adding a new tip

* Choose a unique ID for your new tip:
  * There shouldn't already be a file in `src/tips/en` with the name `<the-new-id>.md`
  * Make the ID human-readable, so it's easy to know what the tip is about without opening the md file
  * Use only lowercase characters and replace spaces with `-`
* Create the md file:
  * Create a new file: `src/tips/en/<the-new-id>.md`
  * Add a front matter to the file with the following information:
    * `title`: A title for the tip
    * `tags`: A list of categories and browsers that correspond to this tip
      * Try to reuse existing categories (found in other tips, like `css`, `console`, etc.)
      * At the end of the list, insert the browsers that this tip works on, by adding a tag that starts with `browser:` followed by either `edge`, `firefox` or `chrome`
  * Add the content of the tip in the file, as markdown. Don't use headings, but feel free to format your content with italic, bold, bullet points, line breaks, etc.
  * Try to add an image as this helps user a lot. Please include only 1 image if possible, and please add alt text.
    * Place the image in `src/assets/img` and give it the same name as the tip md file: `<the-new-id>.png`
* Build the site locally to test that things work fine
* Open a pull request to get your new tip reviewed and checked-in

## Building and testing the site locally

First make sure you have cloned the repo locally, then open a command line at the root of the repo.

* `npm init` to get all of the dependencies installed
* `npx @11ty/eleventy --serve` to launch the build and start a local server
* Then open a browser and navigate to [localhost:8080](localhost:8080)
