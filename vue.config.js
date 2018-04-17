module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.runighcat.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
