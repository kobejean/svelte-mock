const { compare } = require('compare-versions')
const svelteVersion = require('svelte/package.json').version

function isSvelteVersion(version, operator = '=') {
    return compare(svelteVersion, version, operator)
}

exports.isSvelteVersion = isSvelteVersion

exports.SVELTE_CHANGES = {
  SET_METHOD: isSvelteVersion('3.0.0', '<') ? 'set' : '$set',
  OPTION_PROPS: isSvelteVersion('3.0.0', '<') ? 'data' : 'props',
  OPTION_SLOTS: isSvelteVersion('3.0.0', '<') ? 'slots' : 'props.$$slots',
}
