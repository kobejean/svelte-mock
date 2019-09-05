const { compile } = require('./utils/compile')
const Replacer = require('regexp-sourcemaps')

const coverageSupportReplacer = new Replacer(
  /\s((p|d)\((changed, _?ctx|detach)\) {)/gm,
  '/* istanbul ignore next */ $2 /* istanbul ignore next */ ($3) /* istanbul ignore next */ {',
  'coverageSupportReplacer'
)

function transformForCoverageSupport(code, map, filename) {
  const replaced = coverageSupportReplacer.replace(code, filename)
  return { code: replaced.code, map }
}

function process(src, filename) {
  const compiled = compile(src, { filename, format: 'cjs' })
  const code = compiled.js ? compiled.js.code : compiled.code
  const map = compiled.js ? compiled.js.map : compiled.map
  return transformForCoverageSupport(code, map, filename)
}

exports.process = process
