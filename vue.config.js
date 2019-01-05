module.exports = {
  configureWebpack: {
    performance: {
      maxEntrypointSize: 256000,
      maxAssetSize: 512000,
      assetFilter: file => !(/\.(map|mp3)$/.test(file)),
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
