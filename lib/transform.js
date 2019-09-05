const { compile } = require('./utils/compile')
const Replacer = require('regexp-sourcemaps')

const coverageSupportReplacer = new Replacer(/(?<=\n)\s*?(?=if \(changed\..*\))/, '\n/* istanbul ignore if */\n', 'coverageSupportReplacer');

function transformForCoverageSupport(code, map, filename) {
  const replaced = coverageSupportReplacer.replace(code, filename)
  code = replaced.code
  return { code: replaced.code, map }
}

function process(src, filename) {
  const compiled = compile(src, { filename, format: 'cjs' })
  const code = compiled.js ? compiled.js.code : compiled.code
  const map = compiled.js ? compiled.js.map : compiled.map
  return transformForCoverageSupport(code, map, filename)
}

exports.process = process
