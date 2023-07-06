const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
});
