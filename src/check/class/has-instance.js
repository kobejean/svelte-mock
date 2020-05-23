/** @module check/class */

/**
 * Checks if a component has been instantiated.
 *
 * @param {Constructor<Component>} Component - A mocked component constructor
 * @return {boolean} Returns true when `Component` has been instantiated at
 * least once.
 *
 * @example
 *
 * // Svelte code
 * <Component />
 * <OtherComponent />
 *
 * // Javascript code
 * hasInstance(Component;              // true
 * hasInstance(OtherComponent);        // true
 * hasInstance(NonExistentComponent);  // false
 *
 */


export function hasInstance(Component) {
  return Component.mock.results.length > 0;
}

// Aliases
export const hasAnInstance = hasInstance;
