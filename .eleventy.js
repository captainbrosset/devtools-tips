module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("processBrowserTagName", function(name) {
    return name.split(':')[1];
  });

  eleventyConfig.addFilter("onlyTags", function(tags) {
    return tags.filter(tag => !tag.startsWith('browser:'));
  });

  eleventyConfig.addFilter("onlyBrowsers", function(browsers) {
    return browsers.filter(browser => browser.startsWith('browser:'));
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      layouts: "layouts"
    }
  }
};
