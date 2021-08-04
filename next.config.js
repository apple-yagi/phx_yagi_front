const withPlugins = require("next-compose-plugins");
const removeImports = require("next-remove-imports")();

module.exports = withPlugins([removeImports({})], {
  images: {
    domains: ["cdn.svgporn.com", "iconbu.com", "d1d9yfqtve2e82.cloudfront.net"]
  }
});
