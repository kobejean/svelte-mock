
module.exports = {
  'collectCoverage': true,
  transform: {
    '\\.js$': 'babel-jest',
    '\\.html$': '<rootDir>/src/transform.js',
    '\\.svelte$': '<rootDir>/src/transform.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/extend.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'html',
    'svelte'
  ],
  moduleNameMapper: {
    '^@src$': '<rootDir>/src',
    '^@(check|expect|query|utils)(.*)$': '<rootDir>/src/$1$2',
    '^@test/fixtures(.*)$': '<rootDir>/test/fixtures/$1'
  },
  testRegex: '/test/.+\\.spec\\.js$'
};
