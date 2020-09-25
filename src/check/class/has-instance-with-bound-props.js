/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasBoundProps } from '@check/instance/has-bound-props';

/**
 * Checks if an instance of a component has the specified bound props.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} boundProps - The bound props to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `boundProps`.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component bind:first=firstValue bind:second=secondValue />
 * <Component bind:third=thirdValue />
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
 * hasInstanceWithBoundProps(Component, ['first']);             // true
 * hasInstanceWithBoundProps(Component, ['first', 'second']);   // true
 * hasInstanceWithBoundProps(Component, ['nonExistent']));      // false
 * hasInstanceWithBoundProps(Component, { third: thirdValue }); // true
 * hasInstanceWithBoundProps(Component, { third: wrongValue }); // false
 *
 */

export function hasInstanceWithBoundProps(Component, props) {
  return hasInstanceMatching(
      Component,
      (component) => hasBoundProps(component, props),
  );
}

// Aliases
export const hasAnInstanceWithBoundProps = hasInstanceWithBoundProps;
