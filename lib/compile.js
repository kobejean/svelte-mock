const compareVersions = require('compare-versions')
const svelteVersion = require('svelte/package.json').version

let compile;
if (compareVersions.compare(svelteVersion, '3.5.0', '<')) {
  // svelte version < 3.5.0
  compile = require('svelte').compile
} else {
  // svelte version >= 3.5.0
  compile = require('svelte/compiler').compile
}

exports.compile = compile