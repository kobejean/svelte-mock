import { matchesObject } from '@utils/match';
import { getSlots } from '@inspect/get-slots';

export function hasSlots(component, slots = ['default']) {
  return matchesObject(getSlots(component), slots);
}
