const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  customDomain: "https://stats.bmariano.me"
})({
  reactStrictMode: true,
  swcMinify: true,
});
