import { some, map } from 'lodash'
import { hasAnInstanceWithBoundProps } from '../utils/checks'
import { getBoundProps } from '../utils/bind'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'

function toHaveAnInstanceWithBoundProps(Component, boundProps) {
  const matcherName = 'toHaveAnInstanceWithBoundProps';
  const recievedArgument = 'Component';
  const expectedArgument = 'boundProps';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  const pass = hasAnInstanceWithBoundProps(Component, boundProps)
  return {
    pass,
    message: () => {
      const has = pass ? 'has' : 'does not have'
      const found = pass ? 'found' : 'could not find'
      const instanceBoundProps = map(
        Component.mock.results,
        result => getBoundProps(result.value)
      )
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified bound props:`,
        `${found} match for bound props`,
        `  ${printExpected(boundProps)}`,
        'among',
        `  ${printReceived(instanceBoundProps)}`,
      ].join('\n')
    },
  }
}

exports.toHaveAnInstanceWithBoundProps = toHaveAnInstanceWithBoundProps
