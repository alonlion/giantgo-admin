module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.runighcat.com/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = 'https://cdn.runighcat.com/'
    } else {
      // mutate for development...
    }
  }
}
