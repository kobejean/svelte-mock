
const { isSvelteVersion } = require('./src/utils/version')

if (isSvelteVersion('3.0.0', '>=')) {
    console.warn(`WARNING:
    Svelte-mock has not been tested with svelte v3 and up and may have bugs. 
    If any bugs are found, please submit an issue at: 
    https://github.com/kobejean/svelte-mock/issues/new
    `)
}