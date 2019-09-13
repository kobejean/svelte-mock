import Slots from '@test/fixtures/Slots.svelte'

jest.mock('@test/fixtures/Slot.svelte')
jest.mock('@test/fixtures/NamedSlot.svelte')
import Slot from '@test/fixtures/Slot.svelte'
import NamedSlot from '@test/fixtures/NamedSlot.svelte'
svelteMock.mockImplementation(Slot)
svelteMock.mockImplementation(NamedSlot)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveAnInstanceWithNamedSlots(namedSlots)', () => {
  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Slot).toHaveAnInstanceWithNamedSlots(['default'])
  })

  it('should pass if named slots match a subset of an instance\'s named slots', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(NamedSlot).toHaveAnInstanceWithNamedSlots(['second'])
  })

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Slot).not.toHaveAnInstanceWithNamedSlots(['first'])
  })
})
