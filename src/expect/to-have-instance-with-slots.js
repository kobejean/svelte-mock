import { map, keys, isNil, defaultTo } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasInstanceWithSlots } from '@check';
import { assertIsMockComponent } from '@utils/assert';
import { getSlots } from '@inspect/get-slots';

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
          (result) => keys(getSlots(result.value)),
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
