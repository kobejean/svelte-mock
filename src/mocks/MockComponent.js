/* eslint-disable camelcase */
import { getSupportedImplementation } from '@utils/version';
import { resolveDefault } from '@utils/import';

export default (() => {
  const implementations = [
    { implementation: './MockComponentV2_16_1', supportedUntil: '3.0.0' },
    { implementation: './MockComponentV3_12_0', supportedUntil: '3.13.0' },
    { implementation: './MockComponentV3_15_0', supportedUntil: '3.16.0' },
    { implementation: './MockComponentLatest' },
  ];
  const file = getSupportedImplementation(implementations);
  return resolveDefault(require(file));
})();
