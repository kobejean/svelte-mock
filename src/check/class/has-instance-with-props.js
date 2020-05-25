/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasProps } from '@check/instance/has-props';

/**
 * Checks if an instance of a component has the specified props.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} props - The props to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `props`.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component first={firstValue} second={secondValue} />
 * <Component third={thirdValue} />
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
 * hasInstanceWithProps(Component, ['first']);             // true
 * hasInstanceWithProps(Component, ['first', 'second']);   // true
 * hasInstanceWithProps(Component, ['nonExistent']));      // false
 * hasInstanceWithProps(Component, { third: thirdValue }); // true
 * hasInstanceWithProps(Component, { third: wrongValue }); // false
 *
 */

export function hasInstanceWithProps(Component, props) {
  return hasInstanceMatching(
      Component,
      (component) => hasProps(component, props),
  );
}

// Aliases
export const hasAnInstanceWithProps = hasInstanceWithProps;
