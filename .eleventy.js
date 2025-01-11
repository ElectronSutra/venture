const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  const markdownItOptions = { html: true };
  const markdownItAnchorOptions = { permalink: true };
  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions,
  );

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: { input: "pages", output: "_site" },
  };
};
