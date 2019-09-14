import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { keys } from 'lodash'
import { hasEventHandlers } from '@check/has-event-handlers'

export function toHaveEventHandlers(component, eventHandlers) {
  const pass = hasEventHandlers(component, eventHandlers)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toEventHandlers'
      const recievedArgument = 'component'
      const expectedArgument = 'eventHandlers'
      const options = {
        isNot: this.isNot,
        promise: this.promise,
      }
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const componentEventHandlers = keys(component._handlers)
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified event handlers:`,
        'specified',
        `  ${printExpected(eventHandlers)}`,
        `${and} received`,
        `  ${printReceived(componentEventHandlers)}`
      ].join('\n')
    },
  }
}