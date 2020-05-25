/** @module check/instance */
import { getBoundProps } from '@from/instance/get-bound-props';
import { matchesObject } from '@utils/match';


/**
 * Checks if an instance of a component has the specified bound props.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} boundProps - The bound props to check
 * @return {boolean} Returns true when all items in `boundProps` are bound
 * props of the component.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component bind:first=firstValue bind:second=secondValue />
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
 * const component = Component.getInstanceByBoundProps(['first', 'second']);
 *
 * hasBoundProps(component, ['first']);               // true
 * hasBoundProps(component, ['first', 'second']);     // true
 * hasBoundProps(component, ['nonExistent']));        // false
 * hasBoundProps(component, { first: firstValue });   // true
 * hasBoundProps(component, { first: wrongValue });   // false
 *
 */

export function hasBoundProps(component, boundProps) {
  return matchesObject(getBoundProps(component), boundProps);
}
