const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const striptags = require("striptags");
const execSync = require('child_process').execSync;
require("dotenv").config();

const AUTHORS = require("./src/data/AUTHORS.json");

function extractImage(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return '';
  }

  const match = article.templateContent.match(/<img src="([^"]+)" alt="([^"]+)"/);

  if (match) {
    return `<img src="${match[1]}" alt="${match[2]}" loading="lazy"></img>`;
  }

  return '';
}

function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  excerpt = striptags(content)
    .substring(0, 100)
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/sw.js");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/.well-known");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("processBrowserTagName", function (name) {
    return name.split(':')[1];
  });

  eleventyConfig.addFilter("onlyTags", function (tags) {
    return tags.filter(tag => !tag.startsWith('browser:'));
  });

  eleventyConfig.addFilter("onlyBrowsers", function (browsers) {
    return browsers.filter(browser => browser.startsWith('browser:'));
  });

  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  eleventyConfig.addShortcode("mainImage", (article) => extractImage(article));

  eleventyConfig.addShortcode("lastTipDate", (collection) => {
    let lastDate = null;
    for (const post of collection) {
      if (!lastDate || post.date > lastDate) {
        lastDate = post.date;
      }
    }

    return lastDate.toISOString();
  });

  eleventyConfig.addShortcode("formatAuthors", authors => {
    const authorArray = Array.isArray(authors)
      ? authors
      : authors.split(",").map(a => a.trim());

    return authorArray
      .map(author =>
        AUTHORS[author] ? `<a href="${AUTHORS[author]}">${author}</a>` : author
      )
      .join(", ");
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(embedTwitter);

  if (process.env.BUILD_ENV !== "dev") {
    // Generate see also content before the build starts.
    eleventyConfig.on("beforeBuild", () => {
      console.log("Generating see-also data...");
      execSync(`node generate-see-also.js`, { encoding: 'utf-8' })
    });

    // Index the site with PageFind after the build.
    eleventyConfig.on("afterBuild", () => {
      console.log("Indexing site with PageFind...");
      execSync(`npx pagefind --source dist --glob \"**/*.html\"`, { encoding: 'utf-8' })
    });
  }

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
