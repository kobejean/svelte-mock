import { requireMockFixture, requireActualFixture, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@utils/version';

const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Fullname);

const Bindings = requireActualFixture('Bindings.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(component).toHaveBoundProps(boundProps)', () => {
  it('should pass if bound props match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' });
    const expected = { firstname: 'Jean', lastname: 'Flaherty' };
    expect(fullname).toHaveBoundProps(expected);
  });

  it('should pass if bound props match a subset of the component\'s bound ' +
    'props', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' });
    expect(fullname).toHaveBoundProps({ lastname: 'Flaherty' });
  });

  it('should pass if bound props match after state updates', async () => {
    // Given
    const target = document.createElement('div');
    const component = new Bindings({ target });
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' });
    // When
    component[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Loyd' });
    await tick();
    // Then
    expect(fullname).toHaveBoundProps({ firstname: 'Loyd' });
  });

  it('should fail if bound props do not match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Bindings({ target });
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Rick' });
    expect(fullname).not.toHaveBoundProps({ lastname: 'Flaherty' });
  });
});
