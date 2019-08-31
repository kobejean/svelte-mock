const { some, map } = require('lodash')
const { isComponentMatchingProps } = require('../utils')
const { matcherHint, printReceived, printExpected } = require('jest-matcher-utils')

function hasInstanceWithProps(Component, props) {
  return some(Component.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingProps(component, props)
  })
}

function toHaveInstanceWithProps(Component, props) {
  const matcherName = 'toHaveInstanceWithProps';
  const recievedArgument = 'Component';
  const expectedArgument = 'props';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = hasInstanceWithProps(Component, props)
  return {
    pass,
    message: () => {
      const has = pass ? 'has' : 'does not have'
      const found = pass ? 'found' : 'could not find'
      const instanceProps = map(Component.mock.results, function (result) {
        return result.value.get()
      })
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with props:`,
        `${found} match for props`,
        `  ${printExpected(props)}`,
        'in instance props',
        `  ${printReceived(instanceProps)}`,
      ].join('\n')
    },
  }
}

exports.toHaveInstanceWithProps = toHaveInstanceWithProps
