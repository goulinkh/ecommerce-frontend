// eslint-disable-next-line @typescript-eslint/no-var-requires
const appConfig = require('./config');
module.exports = {
  images: {
    domains: [new URL(appConfig.strapiURL).host],
  },
  webpack(config, { isServer }) {
    // Generate sitemap
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    // SVG Import support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
