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

describe('Component.getInstanceByNamedSlots(namedSlots)', () => {
  it('should return instances with matching named slot', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const namedSlots = ['default', 'first']
    const recieved = NamedSlot.getInstanceByNamedSlots(namedSlots)
    expect(recieved).toHaveNamedSlots(namedSlots)
  })

  it('should return instance with matching named slot subset', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const namedSlots = ['second']
    const recieved = NamedSlot.getInstanceByNamedSlots(namedSlots)
    expect(recieved).toHaveNamedSlots(namedSlots)
  })

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const namedSlots = ['second']
    const recieved = Slot.getInstanceByNamedSlots(namedSlots)
    expect(recieved).toBeUndefined()
  })
})
