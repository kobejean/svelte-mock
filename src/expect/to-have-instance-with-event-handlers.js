import { map, keys } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasInstanceWithEventHandlers } from '@check';
import { assertIsMockComponent } from '@utils/assert';
import { getEventHandlers } from '@inspect/get-event-handlers';

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
