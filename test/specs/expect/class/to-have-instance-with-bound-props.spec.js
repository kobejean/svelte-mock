import { requireMockFixture, requireActualFixture, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@test/utils/version';

const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Fullname);

const Bindings = requireActualFixture('Bindings.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(Component).toHaveInstanceWithBoundProps(boundProps)', () => {
  it('should pass if bound props match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const expected = { firstname: 'Jean', lastname: 'Flaherty' };
    expect(Fullname).toHaveInstanceWithBoundProps(expected);
  });

  it('should pass if bound props match a subset of an instance\'s bound ' +
    'props', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const expected = { lastname: 'Flaherty' };
    expect(Fullname).toHaveInstanceWithBoundProps(expected);
  });

  it('should pass if bound props match after state updates', async () => {
    // Given
    const target = document.createElement('div');
    const component = new Bindings({ target });
    // When
    component[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Loyd' });
    await tick();
    // Then
    expect(Fullname).toHaveInstanceWithBoundProps({ firstname: 'Loyd' });
  });

  it('should fail if bound props do not match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    expect(Fullname).not.toHaveInstanceWithBoundProps({ firstname: 'Rick' });
  });
});
