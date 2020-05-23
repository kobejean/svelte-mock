/** @module check/instance */
import { matchesObject } from '@utils/match';
import { getEventHandlers } from '@fetch/get-event-handlers';

/**
 * Checks if an instance of a component has the specified event handlers.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} eventHandlers - The event handlers to check
 * @return {boolean} Returns true when all items in `eventHandlers` are event
 * handlers of the component.
 *
 * @example
 *
 * // Svelte code
 * <Component on:click="clickFn()" on:custom="customFn()" />
 *
 * // Javascript code
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
