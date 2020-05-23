import { getFixturePath, resolveDefault, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@test/utils/version';

jest.mock(getFixturePath('Fullname.svelte'));
const Fullname = resolveDefault(
    jest.requireMock(getFixturePath('Fullname.svelte')));
svelteMock.mockImplementation(Fullname);

const Bindings = resolveDefault(
    jest.requireActual(getFixturePath('Bindings.svelte')));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Component.getInstanceByBoundProps(boundProps)', () => {
  it('should return instances with matching props', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const boundProps = { firstname: 'Jean', lastname: 'Flaherty' };
    const recieved = Fullname.getInstanceByBoundProps(boundProps);
    expect(recieved).not.toBe(undefined);
  });

  it('should return instances with matching prop subset', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const recieved = Fullname.getInstanceByBoundProps({ firstname: 'Jean' });
    expect(recieved).not.toBe(undefined);
  });

  it('should return instances with matching props after state updates',
      async () => {
        // Given
        const target = document.createElement('div');
        const component = new Bindings({ target });
        // When
        component[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Sachico' });
        await tick();
        // Then
        const boundProps = { firstname: 'Sachico' };
        const recieved = Fullname.getInstanceByBoundProps(boundProps);
        expect(recieved).not.toBe(undefined);
      });

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const boundProps = { firstname: 'Sachico' };
    const recieved = Fullname.getInstanceByBoundProps(boundProps);
    expect(recieved).toBe(undefined);
  });
});
