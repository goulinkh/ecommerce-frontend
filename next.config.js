const appConfig = require("./config");
module.exports = {
  images: {
    domains: [new URL(appConfig.strapiURL).host],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
