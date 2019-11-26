module.exports = function (api) {
  api.cache(false)

  return {
    plugins: [
      ["module-resolver", {
        alias: {
          "@src": "./src",
          "@check": "./src/check",
          "@expect": "./src/expect",
          "@inspect": "./src/inspect",
          "@query": "./src/query",
          "@utils": "./src/utils",
          "@test/fixtures": "./test/fixtures",
          "@test/utils": "./test/utils"
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
