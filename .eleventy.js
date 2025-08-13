module.exports = function(eleventyConfig) {
  // Use the object syntax for clarity
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy("src/favicons");


  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};