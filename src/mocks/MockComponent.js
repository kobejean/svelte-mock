/* eslint-disable camelcase */
import { isSvelteVersion } from '@utils/version';
import { makeComponent } from '@utils/compile';
import { resolveDefault } from '@utils/import';


export default (() => {
  if (isSvelteVersion('3.0.0', '<')) {
    return makeComponent('<slot></slot>', 'MockComponent');
  } else if (isSvelteVersion('3.13.0', '<')) {
    return resolveDefault(require('./MockComponentV3_12_0'));
  } else if (isSvelteVersion('3.16.0', '<')) {
    return resolveDefault(require('./MockComponentV3_15_0'));
  } else {
    return resolveDefault(require('./MockComponentLatest'));
  }
})();
