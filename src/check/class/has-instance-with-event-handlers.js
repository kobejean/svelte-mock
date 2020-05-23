/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasEventHandlers } from './has-event-handlers';

/**
 * Checks if an instance of a component has the specified event handlers.
 *
 * @param {Constructor<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} eventHandlers - The event handlers to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `eventHandlers`.
 *
 * @example
 *
 * // Svelte code
 * <Component on:click="clickFn()" on:custom="customFn()" />
 * <Component on:focus="focusFn()" />
 *
 * // Javascript code
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
