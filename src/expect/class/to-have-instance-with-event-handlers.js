/** @module expect/class */
import { map, keys } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasInstanceWithEventHandlers } from '@check';
import { assertIsMockComponent } from '@utils/assert';
import { getEventHandlers } from '@from/instance/get-event-handlers';


/**
 * Passes if a mocked component class has an instance with event handlers.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} eventHandlers - The event handlers to check
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component on:click="clickFn()" on:custom="customFn()" />
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
 * expect(Component).toHaveInstanceWithEventHandlers(['click']);
 * expect(Component).toHaveInstanceWithEventHandlers(['click', 'custom']);
 * expect(Component).not.toHaveInstanceWithEventHandlers(['nonExistent']);
 * expect(Component).toHaveInstanceWithEventHandlers({ click: clickFn });
 * expect(Component).not.toHaveInstanceWithEventHandlers({ click: wrongFn });
 *
 */

export function toHaveInstanceWithEventHandlers(Component, eventHandlers) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithEventHandlers(Component, eventHandlers);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithEventHandlers';
      const recievedArgument = 'Component';
      const expectedArgument = 'eventHandlers';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const instanceEventHandlers = map(Component.mock.results, (result) =>
        keys(getEventHandlers(result.value)),
      );
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified event` +
          `handlers:`,
        `${found} match for event handlers`,
        `  ${printExpected(eventHandlers)}`,
        'among',
        `  ${printReceived(instanceEventHandlers)}`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstanceWithEventHandlers = (
  toHaveInstanceWithEventHandlers
);
