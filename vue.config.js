const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "https://toshikyon-fansite-9a0912894d4b.herokuapp.com/": {
        target: "https://shihonet-api-29ca225d2dcb.herokuapp.com/",
      }
    }
  }
})
