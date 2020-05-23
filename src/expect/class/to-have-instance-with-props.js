import { map } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { assertIsMockComponent } from '@utils/assert';
import { hasInstanceWithProps } from '@check';
import { getProps } from '@from/instance/get-props';

export function toHaveInstanceWithProps(Component, props) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithProps(Component, props);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithProps';
      const recievedArgument = 'Component';
      const expectedArgument = 'props';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const instanceProps = map(
          Component.mock.results,
          (result) => getProps(result.value),
      );
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified props:`,
        `${found} match for props`,
        `  ${printExpected(props)}`,
        'among',
        `  ${printReceived(instanceProps)}`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstanceWithProps = toHaveInstanceWithProps;
