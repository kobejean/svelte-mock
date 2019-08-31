const compareVersions = require('compare-versions')
const svelteVersion = require('svelte/package.json').version

const compile = (function () {
  if (compareVersions.compare(svelteVersion, '3.5.0', '<')) {
    // svelte version < 3.5.0
    return require('svelte').compile
  } else {
    // svelte version >= 3.5.0
    return require('svelte/compiler').compile
  }
})()

function makeComponent(string, x) {
  const name = 'SvelteComponent'
  const compiled = compile(string, { name, format: 'cjs' })
  let code = compiled.js ? compiled.js.code : compiled.code
  // Modify last line so that we dont export the component here
  code = code.substring(0, code.lastIndexOf('\n'))
  code += '\n' + name + ';'
  return (function () { return eval(code) })()
}

exports.compile = compile
exports.makeComponent = makeComponent
