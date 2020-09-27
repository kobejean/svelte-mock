
module.exports = {
  'collectCoverage': true,
  'transform': {
    '\\.js$': 'babel-jest',
    '\\.svelte$': '<rootDir>/src/transform.js',
  },
  'moduleFileExtensions': [
    'js',
    'json',
    'svelte',
  ],
  'moduleNameMapper': {
    '^@src$': '<rootDir>/src',
    '^@(check|expect|from|mocks|utils)(.*)$': '<rootDir>/src/$1$2',
    '^@test(.*)$': '<rootDir>/test/$1',
  },
  'testRegex': '/test/.+\\.spec\\.js$',
};
