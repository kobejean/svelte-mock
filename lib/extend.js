const svelteMock = require('./index')
const { some, map } = require('lodash')
const { extensions } = require('./expect')
const { matcherHint, printReceived, printExpected } = require('jest-matcher-utils')

global.svelteMock = svelteMock

expect.extend(extensions)

exports.extensions = extensions
