import { map } from 'lodash'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { assertIsMockComponent, hasAnInstanceWithBoundProps } from '@check'
import { getBoundProps } from '@utils/bind'

function toHaveAnInstanceWithBoundProps(Component, boundProps) {
  const matcherName = 'toHaveAnInstanceWithBoundProps';
  const recievedArgument = 'Component';
  const expectedArgument = 'boundProps';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  assertIsMockComponent(Component)
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
