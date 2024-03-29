/** @module expect/instance */
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasBoundProps } from '@check/instance/has-bound-props';
import { getBoundProps } from '@from/instance/get-bound-props';

export function toHaveBoundProps(component, boundProps) {
  const pass = hasBoundProps(component, boundProps);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveBoundProps';
      const recievedArgument = 'component';
      const expectedArgument = 'boundProps';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const and = pass ? 'and' : 'but';
      const componentBoundProps = getBoundProps(component);
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} the specified bound props:`,
        'specified',
        `  ${printExpected(boundProps)}`,
        `${and} received`,
        `  ${printReceived(componentBoundProps)}`,
      ].join('\n');
    },
  };
}
