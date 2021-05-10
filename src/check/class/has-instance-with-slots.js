/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasSlots } from '@check/instance/has-slots';

/**
 * Checks if an instance of a component has the specified slots.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} [slots] - The slots to check. Default/unnamed slot
 * is checked if this parameter is not provided.
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `slots`.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component>
 *   <span>First</span>
 * </Component>
 * <Component>
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
 * // Check for unnamed slot
 * hasInstanceWithSlots(Component);                        // true
 * // Check for named slots
 * hasInstanceWithSlots(Component, ['first']);             // true
 * hasInstanceWithSlots(Component, ['first', 'second']);   // true
 * hasInstanceWithSlots(Component, ['nonExistent']));      // false
 * hasInstanceWithSlots(Component, { first: firstSlot });  // true
 * hasInstanceWithSlots(Component, { first: wrongSlot });  // false
 *
 */

export function hasInstanceWithSlots(Component, slots) {
  return hasInstanceMatching(
    Component,
    (component) => hasSlots(component, slots)
  );
}

// Aliases
export const hasAnInstanceWithSlots = hasInstanceWithSlots;
