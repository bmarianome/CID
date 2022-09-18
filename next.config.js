const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy({
    customDomain: 'https://plausible.bmariano.me',
})({
    reactStrictMode: true,
    swcMinify: true,
})