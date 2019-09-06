const compileForJest = require('./lib/utils/compile').compileForJest

function process(src, filename) {
    return compileForJest(src, filename, true)
}

exports.process = process
