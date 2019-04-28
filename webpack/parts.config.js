exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host,
    port,
    open: false,
    overlay: true
  }
})
