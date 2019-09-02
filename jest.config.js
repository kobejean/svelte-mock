
module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
    '\\.html$': '<rootDir>/transform.js',
    '\\.svelte$': '<rootDir>/transform.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/extend.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'html'
  ],
  testRegex: '/test/.+\\.spec\\.js$'
};
