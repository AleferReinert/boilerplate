// PWA config
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

// Next config
module.exports = withPWA({
    reactStrictMode: true,
    experimental: {
      forceSwcTransforms: true
    }
})
