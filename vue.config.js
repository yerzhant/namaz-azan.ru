module.exports = {
  configureWebpack: {
    performance: {
      // maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/vars.scss";',
      },
    },
  },
};
