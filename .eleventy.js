const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { exec } = require("child_process");

function execCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, function(err, stdout, stderr) {
            if (err != null) {
                reject(new Error(err));
            } else if (typeof(stderr) != "string") {
                reject(new Error(stderr));
            } else {
                resolve(stdout);
            }
        });
    });
}

async function getTipAuthors(tipPath) {
    const results = await execCommand(`git log --pretty=format:"%an" ${tipPath}`);
    console.log('Found authors', results);
    return [...new Set(results.split('\n'))];
}

module.exports = function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("src/assets");
        eleventyConfig.addPassthroughCopy("CNAME");

        eleventyConfig.addNunjucksAsyncShortcode("authors", async function(path) {
                    const authors = await getTipAuthors(path);
                    return `<ul class="authors">${authors.map(name => `<li>${name}</li>`).join('')}</ul>`;
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