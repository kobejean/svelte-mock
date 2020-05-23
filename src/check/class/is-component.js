/** @module check/class */
import { every, has } from 'lodash';
import { isSvelteVersion } from '@utils/version';

/**
 * Checks if an object is a component constructor.
 *
 * @param {Object} object - An object to check if it is a component or not
 * @return {boolean} Returns true if `object` is a component constructor.
 *
 * @example
 *
 * // Svelte code
 * <Component>
 *
 * // Javascript code
 * isComponent(component);         // true
 * isComponent('not a component'); // false
 *
 */

export function isComponent(object) {
  const requiredMethods = ['set', 'on', 'destroy'];
  const prefix = isSvelteVersion('3.0.0', '>=') ? '$' : '';
  return every(requiredMethods, (requiredMethod) =>
    has(object.prototype, prefix + requiredMethod),
  );
}
