/** @module expect/class */
import { map, keys, isNil, defaultTo } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { assertIsMockComponent } from '@utils/assert';
import { hasInstanceWithSlots } from '@check';
import { getSlots } from '@from/instance/get-slots';


/**
 * Passes if a mocked component class has an instance with the specified slots.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} [slots] - The slots to check. Default/unnamed slot
 * is checked if this parameter is not provided.
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component>
 *   <span>First</span>
 * </Component>
 * <Component>
 *   <span slot="first">First</span>
 *   <span slot="second">Second</span>
 * </Component>
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
 * // Check for unnamed slot
 * expect(Component).toHaveInstanceWithSlots();
 * // Check for named slots
 * expect(Component).toHaveInstanceWithSlots(['first']);
 * expect(Component).toHaveInstanceWithSlots(['first', 'second']);
 * expect(Component).not.toHaveInstanceWithSlots(['nonExistent']);
 * expect(Component).toHaveInstanceWithSlots({ first: firstSlot });
 * expect(Component).not.toHaveInstanceWithSlots({ first: wrongSlot });
 *
 */

export function toHaveInstanceWithSlots(Component, slots) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithSlots(Component, slots);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithSlots';
      const recievedArgument = 'Component';
      const expectedArgument = isNil(slots) ? null : 'namedSlots';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const expectedSlots = defaultTo(slots, ['default']);
      const instanceSlots = map(
        Component.mock.results,
        (result) => keys(getSlots(result.value))
      );
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with slots:`,
        `${found} match for slots`,
        `  ${printExpected(expectedSlots)}`,
        'among',
        `  ${printReceived(instanceSlots)}`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstanceWithSlots = toHaveInstanceWithSlots;
