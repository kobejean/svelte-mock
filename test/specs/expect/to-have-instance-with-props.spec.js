import { requireMockFixture, requireActualFixture, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@utils/version';

const Paragraph = requireMockFixture('Paragraph.svelte');
const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Paragraph);
svelteMock.mockImplementation(Fullname);

const MultipleInstance = requireActualFixture('MultipleInstance.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(Component).toHaveInstanceWithProps(props)', () => {
  it('should pass if props match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new MultipleInstance({ target });
    // Then
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Goodbye World' });
  });

  it('should pass if props match a subset of an instance\'s props', () => {
    // Given
    const target = document.createElement('div');
    // When
    new MultipleInstance({ target });
    // Then
    expect(Fullname).toHaveInstanceWithProps({ lastname: 'Flaherty' });
  });

  it('should pass if props match after state updates', async () => {
    // Given
    const target = document.createElement('div');
    const component = new MultipleInstance({ target });
    // When
    component[SVELTE_CHANGES.SET_METHOD]({ message: 'Kitty' });
    await tick();
    // Then
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Hello Kitty' });
  });

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new MultipleInstance({ target });
    // Then
    expect(Paragraph).not.toHaveInstanceWithProps({ text: 'Sayonara' });
  });
});
