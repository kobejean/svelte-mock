/** @module expect/class */
import { map } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { assertIsMockComponent } from '@utils/assert';
import { hasInstanceWithBoundProps } from '@check';
import { getBoundProps } from '@from/instance/get-bound-props';


/**
 * Passes if a mocked component class has an instance with bound props.
 *
 * @param {Class<Component>} Component - A mocked component constructor
 * @param {(Array|Object)} boundProps - The bound props to check
 *
 * @example <caption>Svelte code (App.svelte)</caption>
 * <script>
 *    import Component from './Component.svelte'
 * </script>
 *
 * <Component bind:first=firstValue bind:second=secondValue />
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
 * expect(Component).toHaveInstanceWithBoundProps(['first']);
 * expect(Component).toHaveInstanceWithBoundProps(['first', 'second']);
 * expect(Component).not.toHaveInstanceWithBoundProps(['nonExistent']);
 * expect(Component).toHaveInstanceWithBoundProps({ first: firstValue });
 * expect(Component).not.toHaveInstanceWithBoundProps({ first: wrongValue });
 *
 */

export function toHaveInstanceWithBoundProps(Component, boundProps) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithBoundProps(Component, boundProps);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithBoundProps';
      const recievedArgument = 'Component';
      const expectedArgument = 'boundProps';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const instanceBoundProps = map(Component.mock.results, (result) =>
        getBoundProps(result.value)
      );
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified bound props:`,
        `${found} match for bound props`,
        `  ${printExpected(boundProps)}`,
        'among',
        `  ${printReceived(instanceBoundProps)}`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstanceWithBoundProps = toHaveInstanceWithBoundProps;
