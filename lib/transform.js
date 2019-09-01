const { compile } = require('./utils/compile')
const { get } = require('lodash')

function process(src, filename) {
  const compiled = compile(src, { filename, format: 'cjs' })
  const code = compiled.js ? compiled.js.code : compiled.code
  const map = compiled.js ? compiled.js.map : compiled.map
  return { code, map }
}

exports.process = process
