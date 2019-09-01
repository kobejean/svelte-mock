module.exports = function (api) {
  api.cache(false)

  return {
    plugins: ["@babel/plugin-proposal-object-rest-spread"],
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
