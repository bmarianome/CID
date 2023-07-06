import { withPlausibleProxy } from "next-plausible"

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
});
