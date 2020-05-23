import { map } from 'lodash';
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';
import { hasInstanceWithBoundProps } from '@check';
import { assertIsMockComponent } from '@utils/assert';
import { getBoundProps } from '@fetch/get-bound-props';

export function toHaveInstanceWithBoundProps(Component, boundProps) {
  assertIsMockComponent(Component);
  const pass = hasInstanceWithBoundProps(Component, boundProps);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstanceWithBoundProps';
      const recievedArgument = 'Component';
      const expectedArgument = 'boundProps';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const found = pass ? 'found' : 'could not find';
      const instanceBoundProps = map(Component.mock.results, (result) =>
        getBoundProps(result.value),
      );
      return [
        matcherHint(matcherName, recievedArgument, expectedArgument, options),
        '',
        `Received component ${has} an instance with the specified bound props:`,
        `${found} match for bound props`,
        `  ${printExpected(boundProps)}`,
        'among',
        `  ${printReceived(instanceBoundProps)}`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstanceWithBoundProps = toHaveInstanceWithBoundProps;
