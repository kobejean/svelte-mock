import Slots from '@test/fixtures/Slots.svelte'

jest.mock('@test/fixtures/Slot.svelte')
jest.mock('@test/fixtures/NamedSlot.svelte')
jest.mock('@test/fixtures/Paragraph.svelte')
import Slot from '@test/fixtures/Slot.svelte'
import NamedSlot from '@test/fixtures/NamedSlot.svelte'
import Paragraph from '@test/fixtures/Paragraph.svelte'
svelteMock.mockImplementation(Slot)
svelteMock.mockImplementation(NamedSlot)
svelteMock.mockImplementation(Paragraph)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveInstanceWithSlots(slots)', () => {
  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Slot).toHaveInstanceWithSlots()
  })

  it('should fail if there are no instances with slots', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Paragraph).not.toHaveInstanceWithSlots()
  })

  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Slot).toHaveInstanceWithSlots(['default'])
  })

  it('should pass if named slots match a subset of an instance\'s named slots', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(NamedSlot).toHaveInstanceWithSlots(['second'])
  })

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    expect(Slot).not.toHaveInstanceWithSlots(['first'])
  })
})
