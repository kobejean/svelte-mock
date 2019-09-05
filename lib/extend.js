const svelteMock = require('./index')
const extensions = require('./expect')

global.svelteMock = svelteMock
expect.extend(extensions)
