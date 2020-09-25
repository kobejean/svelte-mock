/** @module check/class */
import { some } from 'lodash';

/**
 * Checks if an instance of a component matches the `matchFn`.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {function(component) : boolean} matchFn - A function that takes an
 * instance of a component and returns true if a condition is matched
 * @return {boolean} Returns true when at least one instance of `Component`
 * returns true when passed into `matchFn`.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component first=firstValue second=secondValue />
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
 * // true
 * hasInstanceMatching(
 *    Component,
 *    (component) => hasProps(component, ['first']),
 * );
 * // false
 * hasInstanceMatching(
 *    Component,
 *    (component) => hasProps(component, ['nonExistent']),
 * );
 * // true
 * hasInstanceMatching(
 *    Component,
 *    (component) => hasEventHandlers(component, ['click']),
 * );
 * // false
 * hasInstanceMatching(
 *    Component,
 *    (component) => hasEventHandlers(component, ['nonExistent']),
 * );
 *
 */

export function hasInstanceMatching(Component, matchFn) {
  return some(Component.mock.results, (result) => matchFn(result.value));
}

// Aliases
export const hasAnInstanceMatching = hasInstanceMatching;
