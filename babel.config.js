module.exports = function (api) {
  api.cache(false)

  return {
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
