/** @module check/class */

/**
 * Checks if a component has been instantiated.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @return {boolean} Returns true when `Component` has been instantiated at
 * least once.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 *    import OtherComponent from './OtherComponent.svelte'
 * </script>
 *
 * <Component />
 * <OtherComponent />
 *
 *
 * @example <caption>Test code (App.spec.js)</caption>
 * jest.mock('Component.svelte');
 * jest.mock('OtherComponent.svelte');
 * jest.mock('NonExistentComponent.svelte');
 * import Component from 'Component.svelte';
 * import OtherComponent from 'OtherComponent.svelte';
 * import NonExistentComponent from 'NonExistentComponent.svelte';
 * svelteMock.mockImplementation(Component);
 * svelteMock.mockImplementation(OtherComponent);
 * svelteMock.mockImplementation(NonExistentComponent);
 *
 * import App from 'App.svelte';
 * new App();
 *
 * hasInstance(Component);             // true
 * hasInstance(OtherComponent);        // true
 * hasInstance(NonExistentComponent);  // false
 *
 */


export function hasInstance(Component) {
  return Component.mock.results.length > 0;
}

// Aliases
export const hasAnInstance = hasInstance;
