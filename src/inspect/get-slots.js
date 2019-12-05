import { isSvelteVersion } from '@utils/version';
import { get, last } from 'lodash';

const getSlotsV2 = (component) => component._slotted;
const getSlotsV3 = (component) => last(get(component, ['$$', 'ctx'], []));

export const getSlots = isSvelteVersion('3.0.0', '<') ?
  getSlotsV2 : getSlotsV3;
