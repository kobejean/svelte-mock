import { keys } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasSlots } from '@check/has-slots';
import { getSlots } from '@fetch/get-slots';

export function toHaveSlots(component, slots) {
  const pass = hasSlots(component, slots);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveSlots';
      const recievedArgument = 'component';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const componentSlots = keys(getSlots(component));
      return [
        matcherHint(matcherName, recievedArgument, null, options),
        '',
        `Received component ${has} slots:`,
        `${found} match for event handlers`,
        `  ${printExpected(slots)}`,
        'among',
        `  ${printReceived(componentSlots)}`,
      ].join('\n');
    },
  };
}
