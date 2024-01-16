module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      "https://shihonet-api-29ca225d2dcb.herokuapp.com/": {
        target: "https://toshikyon-fansite-9a0912894d4b.herokuapp.com/",
      }
    }
  }
}
