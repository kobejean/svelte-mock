
module.exports = {
  'collectCoverage': true,
  'transform': {
    '\\.js$': 'rollup-jest',
    '\\.svelte$': 'svelte-mock/transform',
  },
  'moduleFileExtensions': ['js', 'svelte'],
  'setupFilesAfterEnv': ['svelte-mock/extend'],
  'testRegex': '/src/.+\\.spec\\.js$',
};
