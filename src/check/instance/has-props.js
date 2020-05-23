/** @module check/instance */
import { matchesObject } from '@utils/match';
import { getProps } from '@fetch/get-props';

/**
 * Checks if an instance of a component has the specified props.
 *
 * @param {Component} component - An instance of a component
 * @param {(Array|Object)} props - The props to check
 * @return {boolean} Returns true when all items in `props` are
 * props of the component.
 *
 * @example
 *
 * // Svelte code
 * <Component first=firstValue second=secondValue />
 *
 * // Javascript code
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
