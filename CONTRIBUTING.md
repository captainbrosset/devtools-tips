# Contributing to DevTools tips

## Building and testing the site locally

* Clone the repository locally using GitHub. See [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
* Using your command line, go in the directory you've just cloned.
* Install all dependencies: `npm install`.
* Build the project and start a local web server: `npm run watch`.
* Then open a browser and go to [localhost:8080](http://localhost:8080).

The page should auto-reload as you make changes to source code.

## Building in `dev` mode

The site is build by default in `production` mode, but you can also choose to build in `dev` mode. Building in `dev` mode does the following things:

* The service worker code is removed from the build site, making it easier to reload your changes.

To build in `dev` mode:

* Create a file called `.env` at the root of the repository. Do not check this file in Git.
* Type `BUILD_ENV="dev"` in the file, and save it.
* Restart the build.

To go back to `production` mode, just delete the file, or change the content to `BUILD_ENV="production"`.

## Adding a new tip

#### Tip file name

Choose a unique ID for your new tip:

* There shouldn't already be a file in `src/tips/en` with the name `<the-new-id>.md`.
* Make the ID human-readable, so it's easy to know what the tip is about without opening the md file.
* Use only lowercase characters and replace spaces with `-`.

#### Markdown file

* Create a new file: `src/tips/en/<the-new-id>.md`.
* Add a front matter to the file with the following information:
  * `title`: A title for the tip. This should be a slightly longer version of the tip ID.
  * `tags`: A list of categories and browsers that correspond to this tip.
    * Reuse existing categories (found in other tips, like `css`, `console`, etc.). Please do not create new categories unless already discussed with project leads.
    * At the end of the list, insert the browsers that this tip works on, by adding a tag that starts with `browser:` followed by either `edge`, `firefox`, `chrome`, `safari`, or `polypane`. Please do not add new browsers unless discussed with project leads.
  * `date`: Today's date in `YYYY-MM-DD` format. This will appear as the tip creation date on the site.
  * `authors`: Your preferred name. This will appear at the bottom of the tip for people to know who contributed the tip. Some tips have multiple authors (for example if you're updating a tip someone created earlier), in which case this should be an array of string.
  * `see-also`: Optional. This should be an array of other related tips. Related tips are already generated at build time by looking at similarities between tips, but the `see-also` array can be used to manually defined related tips. This is useful when the automated detection fails to find related tips that should really be linked. Items in the array must be strings formatted as `<the-other-tip-id>.md`.

  ```markdown
  ---
  date: 2021-10-23
  authors: Patrick Brosset
  title: Store a node as a variable to use it in the console
  tags: ["html", "console", "browser:edge", "browser:firefox", "browser:chrome", "browser:safari"]
  see-also: ["get-recently-selected-dom-nodes-in-console.md"]
  ---
  ```

#### Tip content

Add the content of the tip in the file, as markdown.

* About headings: tips are usually very short, a description of a common problem, then a specific DevTools feature that solves it, so you usually won't need headings. If you do, please use `h3` only (`###` in markdown) since `h1` is already used for the site global title and `h2` for the title of the tip.

* Markdown formatting: feel free to format your content with italic, bold, bullet points, line breaks, etc.

* Images: please add an image as this helps users a lot. Please include only 1 image if possible, and please add alt text. Place the image in `src/assets/img` and give it the same name as the tip md file: `<the-new-id>.png`. To include your image to the tip file, use a relative link like `![the alt text](../../assets/img/<the-new-id>.png)`.

* Links: to add links from your new tip to other tips, use relative links to markdown files. These links will then be processed at build-time to create the correct absolute links. For example, to link to the `filter-network-requests.md` tip, use: `[Filter requests in the Network panel by status code, mime type and more](./filter-network-requests.md)`.

* Build the site locally to test that things work fine locally.

#### Getting your tip adding to the site

Open a pull request to get your new tip reviewed and checked-in. See [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Adding your author info

If you want your name at the bottom of tips to be linked to a website of your choosing, add the site to the `AUTHORS.json` file:

* Open `src/data/AUTHORS.json`.
* In the JSON object, add a new property where:
  * The key is your name, exactly as it appears in tips' `authors` field.
  * The value is the URL you want your name to link to, as a string.
