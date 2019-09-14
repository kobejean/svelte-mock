import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import { hasProps } from '@check/has-props'

export function toHaveProps(component, props) {
  const pass = hasProps(component, props)
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveProps'
      const recievedArgument = 'component'
      const expectedArgument = 'props'
      const options = {
        isNot: this.isNot,
        promise: this.promise,
      }
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