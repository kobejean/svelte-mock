/** @module check/instance */
import { getEventHandlers } from '@from/instance/get-event-handlers';
import { matchesObject } from '@utils/match';

/**
 * Checks if an instance of a component has the specified event handlers.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} eventHandlers - The event handlers to check
 * @return {boolean} Returns true when all items in `eventHandlers` are event
 * handlers of the component.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component on:click="clickFn()" on:custom="customFn()" />
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
 * const component = Component.getInstanceByEventHandlers(['click']);
 *
 * hasEventHandlers(component, ['click']);             // true
 * hasEventHandlers(component, ['click', 'customFn']); // true
 * hasEventHandlers(component, ['nonExistent']));      // false
 * hasEventHandlers(component, { click: clickFn });    // true
 * hasEventHandlers(component, { click: wrongFn });    // false
 *
 */

export function hasEventHandlers(component, eventHandlers) {
  return matchesObject(getEventHandlers(component), eventHandlers);
}
