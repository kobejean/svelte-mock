/** @module check */
import { hasInstanceMatching } from './has-instance-matching';
import { hasBoundProps } from './has-bound-props';

/**
 * Checks if an instance of a component has the specified bound props.
 *
 * @param {Constructor<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} boundProps - The bound props to check
 * @return {boolean} Returns true when at least one instance of `Component`
 * has the matching `boundProps`.
 *
 * @example
 *
 * // Svelte code
 * <Component bind:first=firstValue bind:second=secondValue />
 * <Component bind:third=thirdValue />
 *
 * // Javascript code
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
