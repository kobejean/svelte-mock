/** @module check/class */
import { every, has } from 'lodash';
import { isSvelteVersion } from '@utils/version';

/**
 * Checks if an object is a component constructor.
 *
 * @param {Object} object - An object to check if it is a component or not
 * @return {boolean} Returns true if `object` is a component constructor.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component>
 *
 *
 * @example <caption>Test code (App.spec.js)</caption>
 * // Import component
 * import Component from 'Component.svelte';
 *
 * isComponent(Component);         // true
 * isComponent('not a component'); // false
 *
 */

export function isComponent(object) {
  const requiredMethods = ['set', 'on', 'destroy'];
  const prefix = isSvelteVersion('3.0.0', '>=') ? '$' : '';
  return every(requiredMethods, (requiredMethod) =>
    has(object.prototype, prefix + requiredMethod)
  );
}
