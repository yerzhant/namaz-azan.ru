const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: '/namaz/',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512 * 1024,
      maxAssetSize: 2 * 1024 * 1024,
      // assetFilter: file => !(/\.(map|mp3|mp3\.gz)$/.test(file)),
    },
    plugins: [
      new CompressionPlugin(),
    ],
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
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  devServer: {
    proxy: 'http://localhost',
  },
};
