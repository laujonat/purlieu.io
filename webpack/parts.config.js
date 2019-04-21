exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",
    host, 
    port, 
    open: true,
    overlay: true,
  },
});