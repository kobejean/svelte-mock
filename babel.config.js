module.exports = function (api) {
  api.cache(false)

  return {
    plugins: [
      ["module-resolver", {
        alias: {
          "@lib": "./lib",
          "@check": "./lib/check",
          "@expect": "./lib/expect",
          "@query": "./lib/query",
          "@utils": "./lib/utils"
        }
      }]
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: ["last 2 versions", "ie >= 11"]
        },
      ],
    ],
    env: {
      test: {
        plugins: ["@babel/plugin-transform-runtime"]
      }
    }
  }
};
