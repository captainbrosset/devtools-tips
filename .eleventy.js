const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const striptags = require("striptags");
require("dotenv").config();

const AUTHORS = require("./src/data/AUTHORS.json");
const EXCERPT_LENGTH = 200;

function extractImage(article, prefix = '') {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return '';
  }

  const match = article.templateContent.match(/<img src="([^"]+)" alt="([^"]+)"/);

  if (match) {
    return `<img src="${prefix}${match[1]}" alt="${match[2]}" loading="lazy"></img>`;
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
    .substring(0, EXCERPT_LENGTH)
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/guides/**/*.{png,jpg,jpeg,gif,svg}");
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

  eleventyConfig.addTransform("fix-tip-urls", async function(content) {
    if (this.inputPath.includes('/src/tips/en/')) {
      // Replace all relative links to other tips with their absolute links.
      // This is needed because we want relative file links in dev, in order
      // to benefit from markdown preview. But we want absolute links in prod.
      content = content.replace(/href="\.\/([^.]+)\.md"/g, 'href="/tips/en/$1"');

      // Also replace all relative image links with their absolute versions.
      content = content.replace(/src="\.\.\/\.\.\/assets\/img\//g, 'src="/assets/img/');
    }

    return content; // no change done.
  });

  // A hacky way to get all tips. We don't actually use this collection.
  // We just use this callback to store the tips in an array.
  const allTips = [];
  eleventyConfig.addCollection("allTips", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      allTips.push(item);
      return item.inputPath.includes('/src/tips/en/');
    });
  });

  eleventyConfig.addShortcode("insertTip", slug => {
    const tipData = allTips.find(tip => tip.fileSlug === slug);
    if (!tipData) {
      return `Tip not found: ${slug}`;
    }

    // We're generating HTML in MD, so we need to avoid leading
    // whitespaces at the beginning of each line. Otherwise, it will
    // be rendered as code.
    return [
      `<div class="tip tip-in-guide">`,
        `<span class="tip-title">Tip: <a href="/tips/en/${slug}">${tipData.data.title}</a></span>`,
        `<a href="/tips/en/${slug}" class="tip-image">${extractImage(tipData, '../')}</a>`,
        `<div class="tip-excerpt">`,
          extractExcerpt(tipData),
          `<a href="/tips/en/${slug}">Read more</a>`,
        `</div>`,
      `</div>`,
    ].join("");
  });

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
