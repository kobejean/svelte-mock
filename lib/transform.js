const { compile } = require('./utils/compile')
const merge = require('merge-source-map')
const Replacer = require('regexp-sourcemaps')

const coverageSupportReplacer = new Replacer(/(\n)(.*)(p\(changed, ctx\) {)/, '\n$2/* istanbul ignore next */\n$2$3', 'coverageSupportReplacer');

function transformForCoverageSupport(code, map, filename) {
  console.log('b', map)
  const sourcesContent = map.sourcesContent
  const replaced = coverageSupportReplacer.replace(code, filename)
  code = replaced.code
  console.log('m', map)
  map = merge(map, replaced.map)
  map.sourcesContent = sourcesContent
  console.log('a', map)
  return { code, map }
}

function process(src, filename) {
  const compiled = compile(src, { filename, format: 'cjs' })
  const code = compiled.js ? compiled.js.code : compiled.code
  const map = compiled.js ? compiled.js.map : compiled.map
  const transformed = transformForCoverageSupport(code, map, filename)
  // console.log(transformed.code, filename)
  return transformed
}

exports.process = process
