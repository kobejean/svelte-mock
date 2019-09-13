import { matcherHint, printReceived } from 'jest-matcher-utils'
import { assertIsMockComponent, hasAnInstance } from '@check'

export function toHaveAnInstance(Component) {
  const matcherName = 'toHaveAnInstance';
  const recievedArgument = 'Component';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  assertIsMockComponent(Component)
  const pass = hasAnInstance(Component)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const instanceCount = Component.mock.results.length
      return [
        matcherHint(matcherName, recievedArgument, null, options),
        '',
        `Received Component ${has} an instance:`,
        `expected at least one instance ${and} recieved ${printReceived(instanceCount)} instances`,
      ].join('\n')
    },
  }
}