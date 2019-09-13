import { map } from 'lodash'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { assertIsMockComponent, hasAnInstanceWithProps } from '@check'

export function toHaveAnInstanceWithProps(Component, props) {
  const matcherName = 'toHaveAnInstanceWithProps';
  const recievedArgument = 'Component';
  const expectedArgument = 'props';
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };
  assertIsMockComponent(Component)
  const pass = hasAnInstanceWithProps(Component, props)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const has = pass ? 'has' : 'does not have'
      const found = pass ? 'found' : 'could not find'
      const instanceProps = map(
        Component.mock.results,
        result => result.value.get()
      )
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified props:`,
        `${found} match for props`,
        `  ${printExpected(props)}`,
        'among',
        `  ${printReceived(instanceProps)}`,
      ].join('\n')
    },
  }
}