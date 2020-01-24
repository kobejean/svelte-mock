import { getFixturePath, requireActualFixture } from '@test/utils/import';

const Slot = svelteMock.doMock(getFixturePath('Slot.svelte'));
const NamedSlot = svelteMock.doMock(getFixturePath('NamedSlot.svelte'));

const Slots = requireActualFixture('Slots.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Component.getInstanceBySlots(slots)', () => {
  it('should return instances with matching named slot', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    const slots = ['default', 'first'];
    const recieved = NamedSlot.getInstanceBySlots(slots);
    expect(recieved).toHaveSlots(slots);
  });

  it('should return instance with matching named slot subset', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    const slots = ['second'];
    const recieved = NamedSlot.getInstanceBySlots(slots);
    expect(recieved).toHaveSlots(slots);
  });

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div');
    // When
    new Slots({ target });
    // Then
    const slots = ['second'];
    const recieved = Slot.getInstanceBySlots(slots);
    expect(recieved).toBeUndefined();
  });
});
