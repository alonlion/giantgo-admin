module.exports = {
  devServer: {
    proxy: {
      '/v1/api': {
        target: 'https://www.runighcat.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
