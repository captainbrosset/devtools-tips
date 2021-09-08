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
        const alreadySeenAuthors = new Set();
        return data.map(d => {
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
        return [];
    }
}

module.exports = function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("src/assets");
        eleventyConfig.addPassthroughCopy("src/sw.js");
        eleventyConfig.addPassthroughCopy("src/manifest.json");
        eleventyConfig.addPassthroughCopy("CNAME");

        eleventyConfig.addNunjucksAsyncShortcode("authors", async function(path) {
                    const authors = await getTipAuthors(path);
                    if (!authors.length) {
                        return '';
                    }
                    return `<ul class="authors">${authors.map(data => `<li><a href="${data.url}">${data.name}</a></li>`).join('')}</ul>`;
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