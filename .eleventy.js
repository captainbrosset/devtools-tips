const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fetch = require('node-fetch');

const token = process.env.AUTHOR_API_TOKEN;

async function getTipAuthors(tipPath) {
    try {
        const response = await fetch(`https://api.github.com/repos/captainbrosset/devtools-tips/commits?path=${tipPath}`, {
            headers: {
                Authorization: `token ${token}`
            }
        });
        const data = await response.json();
        return [...new Set(data.map(d => d.commit.author.name))];
    } catch (e) {
        console.error(`Error finding authors for ${tipPath}`, e);
        return [];
    }
}

module.exports = function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("src/assets");
        eleventyConfig.addPassthroughCopy("CNAME");

        eleventyConfig.addNunjucksAsyncShortcode("authors", async function(path) {
                    const authors = await getTipAuthors(path);
                    return authors.length ? `<ul class="authors">${authors.map(name => `<li>${name}</li>`).join('')}</ul>` : '';
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

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      layouts: "layouts"
    }
  }
};