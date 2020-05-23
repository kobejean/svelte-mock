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
 * @example
 *
 * // Svelte code
 * <Component bind:first=firstValue bind:second=secondValue />
 *
 * // Javascript code
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
