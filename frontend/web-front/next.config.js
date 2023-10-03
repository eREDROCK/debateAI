module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 200,
      };
    }

    return config;
  },
};

const nextConfig = {
  reactStrictMode: true,
  // hot reload
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1200, //チェック時間
      aggregateTimeout: 500, // 遅延時間
      ignored: ["node_modules"],
    };
    return config;
  },
};
module.exports = nextConfig;
