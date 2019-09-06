const { get } = require('lodash')
const compareVersions = require('node-version-compare')
const svelteVersion = require('svelte/package.json').version
const Replacer = require('regexp-sourcemaps')

const compile = (() => {
  if (compareVersions(svelteVersion, '3.5.0', '<')) {
    // svelte version < 3.5.0
    return require('svelte').compile
  } else {
    // svelte version >= 3.5.0
    return require('svelte/compiler').compile
  }
})()

function compileToJs(src, options) {
  const compiled = compile(src, options)
  return get(compiled, 'js', compiled)
}

const coverageSupportReplacer = new Replacer(
  /\s((p|d)\((changed, _?ctx|detach)\) {)/gm,
  '/* istanbul ignore next */ $2 /* istanbul ignore next */ ($3) /* istanbul ignore next */ {',
  'coverageSupportReplacer'
)
function compileForJest(src, filename, debug = false) {
  const compiled = compileToJs(src, { filename, format: 'cjs' })
  // transform code for better coverage support
  const coverageSupported = coverageSupportReplacer.replace(compiled.code, filename)
  // show coverage report on generated code when in debug mode and on source code otherswise
  return debug ? coverageSupported : { code: coverageSupported.code, map: compiled.map }
}

function makeComponent(string, name) {
  let { code } = compileToJs(string, { name, format: 'cjs' })
  // Modify last line so that we dont export the component here
  code = code.substring(0, code.lastIndexOf('\n'))
  code += '\n' + name + ';'
  return (() => { return eval(code) })()
}

exports.compile = compile
exports.compileForJest = compileForJest
exports.makeComponent = makeComponent
