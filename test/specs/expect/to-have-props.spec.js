import { requireMockFixture, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@utils/version';

const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Fullname);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(component).toHaveProps(props)', () => {
  it('should pass if props match', () => {
    // Given
    const target = document.createElement('div');
    const props = { firstname: 'Rick', lastname: 'Flaherty' };
    // When
    const component = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props,
    });
    // Then
    expect(component).toHaveProps({ firstname: 'Rick', lastname: 'Flaherty' });
  });

  it('should pass if props match a subset of the component\'s props', () => {
    // Given
    const target = document.createElement('div');
    const props = { firstname: 'Jean', lastname: 'Flaherty' };
    // When
    const component = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props,
    });
    // Then
    expect(component).toHaveProps({ firstname: 'Jean' });
  });

  it('should pass if props match after state updates', async () => {
    // Given
    const target = document.createElement('div');
    const props = { firstname: 'Jean', lastname: 'Flaherty' };
    const component = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props,
    });
    // When
    component[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Sachico' });
    await tick();
    // Then
    expect(component).toHaveProps({
      firstname: 'Sachico', lastname: 'Flaherty',
    });
  });

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div');
    const props = { firstname: 'Jean', lastname: 'Flaherty' };
    // When
    const component = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props,
    });
    // Then
    expect(component).not.toHaveProps({ lastname: 'Furuhata' });
  });
});
