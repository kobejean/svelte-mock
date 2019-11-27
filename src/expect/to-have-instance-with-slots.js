import { map, keys, isNil, defaultTo } from 'lodash';
import { matcherHint, printReceived } from 'jest-matcher-utils';
import { assertIsMockComponent, hasInstanceWithSlots } from '@check';
import { getSlots } from '@inspect/get-slots';

export function toHaveInstanceWithSlots(Component, slots) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithSlots(Component, slots);
  return {
    pass,
    message: /* istanbul ignore next */ function() {
      const matcherName = 'toHaveInstanceWithSlots';
      const recievedArgument = 'Component';
      const expectedArgument = isNil(slots) ? null : 'namedSlots';
      const options = {
        isNot: this.isNot,
        promise: this.promise,
      };
      const has = pass ? 'has' : 'does not have';
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
