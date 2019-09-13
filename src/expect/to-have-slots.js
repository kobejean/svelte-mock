import { keys } from 'lodash'
import { matcherHint, printReceived } from 'jest-matcher-utils'
import { hasSlots } from '@check/has-slots'

export function toHaveSlots(component) {
  const matcherName = 'toHaveSlots';
  const recievedArgument = 'component';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = hasSlots(component)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const componentNamedSlots = keys(component._slotted)
      return [
        matcherHint(matcherName, recievedArgument, null, options),
        '',
        `Received component ${has} slots:`,
        `  ${printReceived(componentNamedSlots)}`
      ].join('\n')
    },
  }
}