import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { keys } from 'lodash';
import { hasEventHandlers } from '@check/has-event-handlers';
import { getEventHandlers } from '@fetch/get-event-handlers';

export function toHaveEventHandlers(component, eventHandlers) {
  const pass = hasEventHandlers(component, eventHandlers);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toEventHandlers';
      const recievedArgument = 'component';
      const expectedArgument = 'eventHandlers';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const and = pass ? 'and' : 'but';
      const componentEventHandlers = keys(getEventHandlers(component));
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified event handlers:`,
        'specified',
        `  ${printExpected(eventHandlers)}`,
        `${and} received`,
        `  ${printReceived(componentEventHandlers)}`,
      ].join('\n');
    },
  };
}
