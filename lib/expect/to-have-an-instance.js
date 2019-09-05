import { hasAnInstance } from '../utils/checks'
import { matcherHint, printReceived } from 'jest-matcher-utils'

function toHaveAnInstance(Component) {
  const matcherName = 'toHaveAnInstance';
  const recievedArgument = 'Component';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = hasAnInstance(Component)
  return {
    pass,
    message: () => {
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

exports.toHaveAnInstance = toHaveAnInstance
