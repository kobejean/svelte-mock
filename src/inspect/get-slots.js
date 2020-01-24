/* eslint-disable camelcase */
import { getSupportedImplementation } from '@utils/version';
import { get, last } from 'lodash';

const getSlotsV2 = (component) => component._slotted;
const getSlotsV3_15_0 = (component) =>
  get(component, ['$$', 'ctx', '$$slots'], []);
const getSlotsLatest = (component) => last(get(component, ['$$', 'ctx'], []));

export const getSlots = (() => {
  const implementations = [
    { implementation: getSlotsV2, supportedUntil: '3.0.0' },
    { implementation: getSlotsV3_15_0, supportedUntil: '3.16.0' },
    { implementation: getSlotsLatest },
  ];
  return getSupportedImplementation(implementations);
})();
