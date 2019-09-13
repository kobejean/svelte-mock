import { map, keys } from 'lodash'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { assertIsMockComponent, hasAnInstanceWithNamedSlots } from '@check'

export function toHaveAnInstanceWithNamedSlots(Component, namedSlots) {
  const matcherName = 'toHaveAnInstanceWithNamedSlots';
  const recievedArgument = 'Component';
  const expectedArgument = 'namedSlots';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  assertIsMockComponent(Component)
  const pass = hasAnInstanceWithNamedSlots(Component, namedSlots)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const found = pass ? 'found' : 'could not find'
      const instanceNamedSlots = map(
        Component.mock.results,
        result => keys(result.value._slotted)
      )
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified named slots:`,
        `${found} match for named slots`,
        `  ${printExpected(namedSlots)}`,
        'among',
        `  ${printReceived(instanceNamedSlots)}`,
      ].join('\n')
    },
  }
}