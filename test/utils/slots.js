import { transform, set } from 'lodash';
import { isSvelteVersion } from '@utils/version';

export function createSlot() {
  return isSvelteVersion('3.0.0', '<') ?
    document.createDocumentFragment() : [(() => {})];
}

export function createSlots(slotNames = ['default']) {
  return transform(slotNames, (result, slotName) =>
    result[slotName] = createSlot(), {});
}

export function addSlotsToOptions(options, slots) {
  if (isSvelteVersion('3.0.0', '<')) {
    const newSlots = { ...options.slots, ...slots };
    set(options, 'slots', newSlots);
  } else {
    const newSlots = { ...options.$$slots, ...slots };
    set(options, 'props.$$slots', newSlots);
    set(options, 'props.$$scope.ctx.$$slots', newSlots);
  }
  return options;
}
