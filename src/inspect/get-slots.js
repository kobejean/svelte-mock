/* eslint-disable camelcase */
import { isSvelteVersion } from '@utils/version';
import { get, last } from 'lodash';

const getSlotsV2 = (component) => component._slotted;
const getSlotsV3_15_0 = (component) =>
  get(component, ['$$', 'ctx', '$$slots'], []);
const getSlotsLatest = (component) => last(get(component, ['$$', 'ctx'], []));

export const getSlots = (() => {
  if (isSvelteVersion('3.0.0', '<')) {
    return getSlotsV2;
  } else if (isSvelteVersion('3.16.0', '<')) {
    return getSlotsV3_15_0;
  }
  return getSlotsLatest;
})();
