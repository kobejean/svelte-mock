
module.exports = {
  'collectCoverage': true,
  transform: {
    '\\.js$': 'babel-jest',
    '\\.svelte$': '<rootDir>/src/transform.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/extend.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'html',
    'svelte',
    'svelte.js'
  ],
  moduleNameMapper: {
    '^@src$': '<rootDir>/src',
    '^@(check|expect|inspect|query|utils)(.*)$': '<rootDir>/src/$1$2',
    '^@test/fixtures(.*)$': '<rootDir>/test/fixtures/$1',
    '^@test/utils(.*)$': '<rootDir>/test/utils/$1'
  },
  testRegex: '/test/.+\\.spec\\.js$'
};
