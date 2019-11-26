import { getFixturePath, resolveDefault } from '@test/utils/import'

jest.mock(getFixturePath('Slot.svelte'))
jest.mock(getFixturePath('NamedSlot.svelte'))
const Slot = resolveDefault(jest.requireMock(getFixturePath('Slot.svelte')))
const NamedSlot = resolveDefault(jest.requireMock(getFixturePath('NamedSlot.svelte')))
svelteMock.mockImplementation(Slot)
svelteMock.mockImplementation(NamedSlot)

const Slots = resolveDefault(jest.requireActual(getFixturePath('Slots.svelte')))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Component.getInstanceBySlots(slots)', () => {
  it('should return instances with matching named slot', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const slots = ['default', 'first']
    const recieved = NamedSlot.getInstanceBySlots(slots)
    expect(recieved).toHaveSlots(slots)
  })

  it('should return instance with matching named slot subset', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const slots = ['second']
    const recieved = NamedSlot.getInstanceBySlots(slots)
    expect(recieved).toHaveSlots(slots)
  })

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Slots({ target })
    // Then
    const slots = ['second']
    const recieved = Slot.getInstanceBySlots(slots)
    expect(recieved).toBeUndefined()
  })
})
