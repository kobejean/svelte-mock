import { requireMockFixture, requireActualFixture } from '@test/utils/import';

const Slot = requireMockFixture('Slot.svelte');
const NamedSlot = requireMockFixture('NamedSlot.svelte');
const Paragraph = requireMockFixture('Paragraph.svelte');
const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Slot);
svelteMock.mockImplementation(NamedSlot);
svelteMock.mockImplementation(Paragraph);
svelteMock.mockImplementation(Fullname);

const Slots = requireActualFixture('Slots.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(Component).toHaveInstanceWithSlots(slots)', () => {
  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Slot).toHaveInstanceWithSlots();
  });

  it('should fail if there are no instances with slots', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Paragraph).not.toHaveInstanceWithSlots();
  });

  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Slot).toHaveInstanceWithSlots(['default']);
  });

  it('should pass if named slots match a subset of an instance\'s named slots',
      () => {
        // Given
        const target = document.createElement('div');
        // When
        new Slots({ target });
        // Then
        expect(NamedSlot).toHaveInstanceWithSlots(['second']);
      });

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Slot).not.toHaveInstanceWithSlots(['first']);
  });

  it('should pass if named slots match dynamically ' +
      'instantiated svelte component', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(NamedSlot).toHaveInstanceWithSlots(['third']);
  });

  it('should render default slot content', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Fullname).toHaveInstanceWithProps({ firstname: 'Jean', lastname: 'Flaherty' });
  });

  it('should render named slot content', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    expect(Fullname).toHaveInstanceWithProps({ firstname: '仁', lastname: 'フラハティ' });
  });
});
