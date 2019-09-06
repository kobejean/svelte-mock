const { assign } = require('lodash')
const svelteMock = require('./lib/index')
const extensions = require('./lib/expect')

global.svelteMock = svelteMock
expect.extend(extensions)
assign(exports, extensions)