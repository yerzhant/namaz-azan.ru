module.exports = {
  baseUrl: '/namaz/',
  configureWebpack: {
    performance: {
      maxEntrypointSize: 350 * 1024,
      maxAssetSize: 700 * 1024,
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
  pwa: {
    themeColor: '#1a3157',
    iconPaths: {
      favicon16: 'icons/icon-48x48.png',
      favicon32: 'icons/icon-96x96.png',
      appleTouchIcon: 'icons/icon-152x152.png',
      msTileImage: 'icons/icon-144x144.png',
      maskIcon: '',
    },
  },
  devServer: {
    proxy: 'http://localhost',
  },
};
