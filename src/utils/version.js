const { compare } = require('compare-versions');
const svelteVersion = require('svelte/package.json').version;

function isSvelteVersion(version, operator = '=') {
  return compare(svelteVersion, version, operator);
}

function getSupportedImplementation(implementations) {
  for (const info of implementations) {
    if (!info.supportedUntil || isSvelteVersion(info.supportedUntil, '<')) {
      return info.implementation;
    }
  }
  console.warn('Could not find supported implementation in', implementations);
  return implementations[implementations.length - 1].implementation;
}

exports.isSvelteVersion = isSvelteVersion;
exports.getSupportedImplementation = getSupportedImplementation;
