/** @module check */
import { matchesObject } from '@utils/match';
import { getSlots } from '@inspect/get-slots';

/**
 * Checks if an instance of a component has the specified slots.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} [slots] - The slots to check. Default/unnamed slot
 * is checked if this parameter is not provided.
 * @return {boolean} Returns true when all items in `slots` are
 * slots of the component.
 *
 * @example
 *
 * // Svelte code
 * <Component>
 *   <span>First</span>
 * </Component>
 * <Component>
 *   <span slot="first">First</span>
 *   <span slot="second">Second</span>
 * </Component>
 *
 * // Javascript code
 * // Check for unnamed slot
 * hasSlots(component);                          // true
 * // Check for named slots
 * hasSlots(component, ['first']);               // true
 * hasSlots(component, ['first', 'second']);     // true
 * hasSlots(component, ['nonExistent']));        // false
 * hasSlots(component, { first: firstSlot });    // true
 * hasSlots(component, { first: wrongSlot });    // false
 *
 */


export function hasSlots(component, slots = ['default']) {
  return matchesObject(getSlots(component), slots);
}
