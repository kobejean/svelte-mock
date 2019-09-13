import { keys } from 'lodash'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { hasNamedSlots } from '@check/has-named-slots'

export function toHaveNamedSlots(component, namedSlots) {
  const matcherName = 'toHaveNamedSlots';
  const recievedArgument = 'component';
  const expectedArgument = 'namedSlots';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = hasNamedSlots(component, namedSlots)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const componentNamedSlots = keys(component._slotted)
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified named slots:`,
        'specified',
        `  ${printExpected(namedSlots)}`,
        `${and} received`,
        `  ${printReceived(componentNamedSlots)}`
      ].join('\n')
    },
  }
}