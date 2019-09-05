import { isComponentMatchingBoundProps } from '../utils/checks'
import { getBoundProps } from '../utils/bind'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'

function toHaveBoundProps(component, boundProps) {
  const matcherName = 'toHaveBoundProps';
  const recievedArgument = 'component';
  const expectedArgument = 'boundProps';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = isComponentMatchingBoundProps(component, boundProps)
  return {
    pass,
    message: () => {
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const componentBoundProps = getBoundProps(component)
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified bound props:`,
        'specified',
        `  ${printExpected(boundProps)}`,
        `${and} received`,
        `  ${printReceived(componentBoundProps)}`
      ].join('\n')
    },
  }
}

exports.toHaveBoundProps = toHaveBoundProps
