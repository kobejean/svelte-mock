/** @module check/class */
import { hasInstanceMatching } from './has-instance-matching';
import { hasProps } from './has-props';

/**
 * Checks if an instance of a component has the specified props.
 *
 * @param {Constructor<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} props - The props to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `props`.
 *
 * @example
 *
 * // Svelte code
 * <Component first={firstValue} second={secondValue} />
 * <Component third={thirdValue} />
 *
 * // Javascript code
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
