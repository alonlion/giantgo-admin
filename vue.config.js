module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://140.143.66.162/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config.output.publicPath = 'https://cdn.runighcat.com/'
    } else {
      // mutate for development...
    }
  }
}
