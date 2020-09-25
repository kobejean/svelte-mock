/** @module check/instance */
import { getProps } from '@from/instance/get-props';
import { matchesObject } from '@utils/match';

/**
 * Checks if an instance of a component has the specified props.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} props - The props to check
 * @return {boolean} Returns true when all items in `props` are
 * props of the component.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component first=firstValue second=secondValue />
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
 * const component = Component.getInstanceByProps(['first', 'second']);
 *
 * hasProps(component, ['first']);               // true
 * hasProps(component, ['first', 'second']);     // true
 * hasProps(component, ['nonExistent']));        // false
 * hasProps(component, { first: firstValue });   // true
 * hasProps(component, { first: wrongValue });   // false
 *
 */

export function hasProps(component, props) {
  return matchesObject(getProps(component), props);
}
