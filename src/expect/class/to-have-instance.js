import { matcherHint, printReceived } from 'jest-matcher-utils';
import { hasInstance } from '@check/class';
import { assertIsMockComponent } from '@utils/assert';

export function toHaveInstance(Component) {
  assertIsMockComponent(Component);
  const pass = hasInstance(Component);
  return {
    pass,
    message: /* istanbul ignore next */ () => {
      const matcherName = 'toHaveInstance';
      const recievedArgument = 'Component';
      const options = {
        isNot: this.isNot, // eslint-disable-line no-invalid-this
        promise: this.promise, // eslint-disable-line no-invalid-this
      };
      const has = pass ? 'has' : 'does not have';
      const and = pass ? 'and' : 'but';
      const instanceCount = Component.mock.results.length;
      return [
        matcherHint(matcherName, recievedArgument, null, options),
        '',
        `Received Component ${has} an instance:`,
        `expected at least one instance ${and} recieved ` +
          `${printReceived(instanceCount)} instances`,
      ].join('\n');
    },
  };
}

// Aliases
export const toHaveAnInstance = toHaveInstance;
