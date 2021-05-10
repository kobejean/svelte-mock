import {
  requireMockFixture, createSlots, addSlotsToOptions,
} from '@test/utils';

const Slot = requireMockFixture('Slot.svelte');
const NamedSlot = requireMockFixture('NamedSlot.svelte');
const Paragraph = requireMockFixture('Paragraph.svelte');
svelteMock.mockImplementation(Slot);
svelteMock.mockImplementation(NamedSlot);
svelteMock.mockImplementation(Paragraph);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(component).toHaveSlots()', () => {
  it('should pass if the component has a slot', () => {
    // Given
    const target = document.createElement('div');
    const slots = createSlots();
    const options = addSlotsToOptions({ target }, slots);
    // When
    const component = new Slot(options);
    // Then
    expect(component).toHaveSlots();
  });

  it('should fail if the component does not have a slot', () => {
    // Given
    const target = document.createElement('div');
    // When
    const component = new Paragraph({ target });
    // Then
    expect(component).not.toHaveSlots();
  });

  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div');
    const slots = createSlots(['default', 'first']);
    const options = addSlotsToOptions({ target }, slots);
    // When
    const component = new NamedSlot(options);
    // Then
    expect(component).toHaveSlots(['default']);
  });

  it('should pass if named slots match a subset of an instance\'s named slots',
    () => {
      // Given
      const target = document.createElement('div');
      const slots = createSlots(['default', 'first', 'second']);
      const options = addSlotsToOptions({ target }, slots);
      // When
      const component = new NamedSlot(options);
      // Then
      expect(component).toHaveSlots(['second']);
    });

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div');
    const slots = createSlots();
    const options = addSlotsToOptions({ target }, slots);
    // When
    const component = new NamedSlot(options);
    // Then
    expect(component).not.toHaveSlots(['first']);
  });
});
