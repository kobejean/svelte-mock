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
          "@mocks": "./src/mocks",
          "@query": "./src/query",
          "@utils": "./src/utils",
          "@test": "./test"
        }
      }]
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
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
