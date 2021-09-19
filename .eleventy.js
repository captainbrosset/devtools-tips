const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fetch = require('node-fetch');

const token = process.env.AUTHOR_API_TOKEN;

const ANTHORS_DATES_CACHE = new Map();

async function getTipAuthorsAndDate(tipPath) {
  if (ANTHORS_DATES_CACHE.has(tipPath)) {
    return ANTHORS_DATES_CACHE.get(tipPath);
  }

  let authors = [];
  let date = null;

  try {
    const response = await fetch(`https://api.github.com/repos/captainbrosset/devtools-tips/commits?path=${tipPath}`, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    const data = await response.json();
    const alreadySeenAuthors = new Set();
    authors = data.map(d => {
      if (!date || new Date(d.commit.author.date) > date) {
        date = new Date(d.commit.author.date);
      }

      return {
        // Warning: if you ever feel like getting d.author instead, so you can link to github profiles, please remember that
        // not all commits on github are linked to an actual github user, and so d.author may be null.
        name: d.commit.author.name,
        url: `https://github.com/captainbrosset/devtools-tips/commit/${d.sha}`
      };
    }).filter(d => {
      if (alreadySeenAuthors.has(d.name)) {
        return false;
      } else {
        alreadySeenAuthors.add(d.name);
        return true;
      }
    });
  } catch (e) {
    console.error(`Error finding authors for ${tipPath}`, e);
  }

  ANTHORS_DATES_CACHE.set(tipPath, {authors, date});
  return { authors, date };
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/sw.js");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/.well-known");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addNunjucksAsyncShortcode("postdate", async function (path) {
    const { date } = await getTipAuthorsAndDate(path);
    return date.toISOString();
  });

  eleventyConfig.addNunjucksAsyncShortcode("authorsdate", async function (path) {
    const { authors, date } = await getTipAuthorsAndDate(path);

    let content = '<ul class="authors">Authors:';
    if (authors.length) {
      content += authors.map(data => `<li><a href="${data.url}">${data.name}</a></li>`).join('');
    } else {
      content += '<li>Not found</li>';
    }
    content += '</ul>';

    if (date) {
      content += `<p class="last-edit">Last edit: <time datetime="${date.toISOString()}">${date.toLocaleDateString()}</time></p>`;
    }

    return content;
  });

  eleventyConfig.addFilter("processBrowserTagName", function (name) {
    return name.split(':')[1];
  });

  eleventyConfig.addFilter("onlyTags", function (tags) {
    return tags.filter(tag => !tag.startsWith('browser:'));
  });

  eleventyConfig.addFilter("onlyBrowsers", function (browsers) {
    return browsers.filter(browser => browser.startsWith('browser:'));
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      layouts: "layouts",
      includes: "includes",
    }
  }
};