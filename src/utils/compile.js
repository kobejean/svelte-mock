const { get } = require('lodash');
const { isSvelteVersion } = require('./version');
const Replacer = require('regexp-sourcemaps');

const compile = (() => {
  if (isSvelteVersion('3.5.0', '<')) {
    // svelte version < 3.5.0
    return require('svelte').compile;
  } else {
    // svelte version >= 3.5.0
    return require('svelte/compiler').compile;
  }
})();

function compileToJs(src, options) {
  const compiled = compile(src, options);
  return get(compiled, 'js', compiled);
}

const coverageSupportReplacer = new Replacer(
  /\s((p|d)\((changed, _?ctx|detach)\) {)/gm,
  '/* istanbul ignore next */ $2 /* istanbul ignore next */ ($3) ' +
      '/* istanbul ignore next */ {',
  'coverageSupportReplacer'
);
const exportReplacer = new Replacer(
  /exports\.default = /gm,
  'Object.defineProperty(exports, "__esModule", { value: true });\nexports.default = ',
  'exportReplacer'
);
function compileForJest(src, filename, debug = false) {
  const compiled = compileToJs(src, {
    filename, format: 'cjs', accessors: true, preserveComments: true,
  });
  // transform code for better coverage support
  const coverageSupported = coverageSupportReplacer.replace(
    compiled.code, filename
  );
  const exportModified = exportReplacer.replace(
    coverageSupported.code, filename
  )
  // show coverage report on generated code when in debug mode and on
  // source code otherswise

  const result = debug ? exportModified : {
    code: exportModified.code,
    map: compiled.map,
  };
  result.map = JSON.stringify(result.map);
  return result;
}

exports.compile = compile;
exports.compileForJest = compileForJest;
exports.compileToJs = compileToJs;
