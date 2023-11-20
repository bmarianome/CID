const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  customDomain: "https://plausible-analytics.up.railway.app"
})({
  reactStrictMode: true,
  swcMinify: true,
});
