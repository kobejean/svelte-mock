const { some, map } = require('lodash')
const { isComponentMatchingProps } = require('../utils/checks')
const { matcherHint, printReceived, printExpected } = require('jest-matcher-utils')

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
    message: () => {
      const has = pass ? 'has' : 'does not have'
      const and = pass ? 'and' : 'but'
      const componentProps = component.get()
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the expected props:`,
        'expected',
        `  ${printExpected(props)}`,
        `${and} received`,
        `  ${printReceived(componentProps)}`
      ].join('\n')
    },
  }
}

exports.toHaveProps = toHaveProps
