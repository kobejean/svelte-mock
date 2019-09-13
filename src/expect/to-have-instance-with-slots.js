import { map, keys, isNil, defaultTo } from 'lodash'
import { matcherHint, printReceived } from 'jest-matcher-utils'
import { assertIsMockComponent, hasInstanceWithSlots } from '@check'

export function toHaveInstanceWithSlots(Component, slots) {
  assertIsMockComponent(Component)
  const pass = hasInstanceWithSlots(Component, slots)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithSlots';
      const recievedArgument = 'Component';
      const expectedArgument = isNil(slots) ? null :'namedSlots';
      const options = {
        isNot: this.isNot,
        promise: this.promise,
      };
      const has = pass ? 'has' : 'does not have'
      const expectedSlots = defaultTo(slots, ['default']);
      const instanceNamedSlots = map(
        Component.mock.results,
        result => keys(result.value._slotted)
      )
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with slots:`,
        `${found} match for slots`,
        `  ${printExpected(expectedSlots)}`,
        'among',
        `  ${printReceived(instanceNamedSlots)}`,
      ].join('\n')
    },
  }
}

// Aliases
export const toHaveAnInstanceWithSlots = toHaveInstanceWithSlots