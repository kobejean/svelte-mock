const { compileToJs } = require('../utils/compile');

// see blank component source code
const { code } = compileToJs('<script>export let a, b, c;</script><slot></slot>', {
  name: 'MockComponent', format: 'cjs',
});
console.log(code);