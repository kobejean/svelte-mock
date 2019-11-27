import { map, keys } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { assertIsMockComponent, hasInstanceWithEventHandlers } from '@check';
import { getEventHandlers } from '@inspect/get-event-handlers';

export function toHaveInstanceWithEventHandlers(Component, eventHandlers) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithEventHandlers(Component, eventHandlers);
  return {
    pass,
    message: /* istanbul ignore next */ function() {
      const matcherName = 'toHaveInstanceWithEventHandlers';
      const recievedArgument = 'Component';
      const expectedArgument = 'eventHandlers';
      const options = {
        isNot: this.isNot,
        promise: this.promise,
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
