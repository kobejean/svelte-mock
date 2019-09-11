import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { isComponentMatchingProps } from '@check'

function toHaveProps(component, props) {
  const matcherName = 'toHaveProps';
  const recievedArgument = 'component';
  const expectedArgument = 'props';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = isComponentMatchingProps(component, props)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const componentProps = component.get()
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified props:`,
        'specified',
        `  ${printExpected(props)}`,
        `${and} received`,
        `  ${printReceived(componentProps)}`
      ].join('\n')
    },
  }
}

exports.toHaveProps = toHaveProps
