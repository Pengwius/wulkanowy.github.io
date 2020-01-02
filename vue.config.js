module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
};