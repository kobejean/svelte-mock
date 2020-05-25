/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasEventHandlers } from '@check/instance/has-event-handlers';

/**
 * Checks if an instance of a component has the specified event handlers.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} eventHandlers - The event handlers to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `eventHandlers`.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component on:click="clickFn()" on:custom="customFn()" />
 * <Component on:focus="focusFn()" />
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
 * hasInstanceWithEventHandlers(Component, ['click']);             // true
 * hasInstanceWithEventHandlers(Component, ['click', 'custom']);   // true
 * hasInstanceWithEventHandlers(Component, ['nonExistent']));      // false
 * hasInstanceWithEventHandlers(Component, { focus: focusFn });    // true
 * hasInstanceWithEventHandlers(Component, { focus: wrongFn });    // false
 *
 */

export function hasInstanceWithEventHandlers(Component, eventHandlers) {
  return hasInstanceMatching(
      Component,
      (component) => hasEventHandlers(component, eventHandlers),
  );
}

// Aliases
export const hasAnInstanceWithEventHandlers = hasInstanceWithEventHandlers;
