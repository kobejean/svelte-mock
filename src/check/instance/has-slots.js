/** @module check/instance */
import { getSlots } from '@from/instance/get-slots';
import { matchesObject } from '@utils/match';

/**
 * Checks if an instance of a component has the specified slots.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} [slots] - The slots to check. Default/unnamed slot
 * is checked if this parameter is not provided.
 * @return {boolean} Returns true when all items in `slots` are
 * slots of the component.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component id="component1">
 *   <span>First</span>
 * </Component>
 * <Component id="component2">
 *   <span slot="first">First</span>
 *   <span slot="second">Second</span>
 * </Component>
 *
 *
 * @example <caption>Test code (App.spec.js)</caption>
 * // Import mocked components
 * jest.mock('Component.svelte');
 * import Component from 'Component.svelte';
 * svelteMock.mockImplementation(Component);
 *
 * // Import and render app
 * import App from 'App.svelte';
 * new App();
 *
 * // Get instance of component
 * const component1 = Component.getInstanceByProps({ id: 'component1' });
 * const component2 = Component.getInstanceByProps({ id: 'component2' });
 *
 * // Check for unnamed slot
 * hasSlots(component1);                          // true
 * // Check for named slots
 * hasSlots(component2, ['first']);               // true
 * hasSlots(component2, ['first', 'second']);     // true
 * hasSlots(component2, ['nonExistent']));        // false
 * hasSlots(component2, { first: firstSlot });    // true
 * hasSlots(component2, { first: wrongSlot });    // false
 *
 */


export function hasSlots(component, slots = ['default']) {
  return matchesObject(getSlots(component), slots);
}
