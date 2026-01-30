const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    // OLD WAY (Deprecated):
    // domains: ['placehold.co', 'images.ctfassets.net'],
    
    // NEW WAY:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
    dangerouslyAllowSVG: true, 
  },
  output: 'standalone',
};