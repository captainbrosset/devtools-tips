const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fetch = require('node-fetch');

const token = process.env.AUTHOR_API_TOKEN;

async function getTipAuthorsAndDate(tipPath) {
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
            if (!date || new date(d.commit.author.date) > date) {
              date = new date(d.commit.author.date);
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
        console.error(`Error finding authors for ${tipPath}`);
    }

    return {authors, date};
}

module.exports = function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("src/assets");
        eleventyConfig.addPassthroughCopy("src/sw.js");
        eleventyConfig.addPassthroughCopy("src/manifest.json");
        eleventyConfig.addPassthroughCopy("src/.well-known");
        eleventyConfig.addPassthroughCopy("CNAME");

        eleventyConfig.addNunjucksAsyncShortcode("authorsdate", async function(path) {
                    const {authors, date} = await getTipAuthorsAndDate(path);

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