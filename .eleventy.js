const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  return {
    dir: { input: "pages", output: "_site" },
    pathPrefix: "/venture/",
  };
};
