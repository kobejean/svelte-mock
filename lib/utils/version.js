const { compare } = require('compare-versions')
const svelteVersion = require('svelte/package.json').version

function isSvelteVersion(version, operator = '=') {
    return compare(svelteVersion, version, operator)
}

exports.isSvelteVersion = isSvelteVersion