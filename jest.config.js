
module.exports = {
  'collectCoverage': true,
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
  moduleNameMapper: {
    "^@lib$": "<rootDir>/lib",
    "^@(check|expect|query|utils)(.*)$": "<rootDir>/lib/$1$2" 
  },
  testRegex: '/test/.+\\.spec\\.js$'
};
