import { getFixturePath, resolveDefault } from '@test/utils/import'

jest.mock(getFixturePath('Slot.svelte'))
jest.mock(getFixturePath('NamedSlot.svelte'))
jest.mock(getFixturePath('Paragraph.svelte'))
const Slot = resolveDefault(jest.requireMock(getFixturePath('Slot.svelte')))
const NamedSlot = resolveDefault(jest.requireMock(getFixturePath('NamedSlot.svelte')))
const Paragraph = resolveDefault(jest.requireMock(getFixturePath('Paragraph.svelte')))
svelteMock.mockImplementation(Slot)
svelteMock.mockImplementation(NamedSlot)
svelteMock.mockImplementation(Paragraph)

const Slots = resolveDefault(jest.requireActual(getFixturePath('Slots.svelte')))

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
