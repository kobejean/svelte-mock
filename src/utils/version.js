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

exports.SVELTE_CHANGES = {
  SET_METHOD: isSvelteVersion('3.0.0', '<') ? 'set' : '$set',
  OPTION_PROPS: isSvelteVersion('3.0.0', '<') ? 'data' : 'props',
  OPTION_SLOTS: isSvelteVersion('3.0.0', '<') ? 'slots' : 'props.$$slots',
};
