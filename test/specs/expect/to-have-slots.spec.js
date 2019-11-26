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

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(component).toHaveSlots()', () => {
  it('should pass if the component has a slot', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment()
    }
    // When
    const component = new Slot({ target , slots })
    // Then
    expect(component).toHaveSlots()
  })

  it('should fail if the component does not have a slot', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Paragraph({ target })
    // Then
    expect(component).not.toHaveSlots()
  })

  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment(),
      first: document.createDocumentFragment(),
    }
    // When
    const component = new NamedSlot({ target, slots })
    // Then
    expect(component).toHaveSlots(['default'])
  })

  it('should pass if named slots match a subset of an instance\'s named slots', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment(),
      first: document.createDocumentFragment(),
      second: document.createDocumentFragment(),
    }
    // When
    const component = new NamedSlot({ target, slots })
    // Then
    expect(component).toHaveSlots(['second'])
  })

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment(),
    }
    // When
    const component = new NamedSlot({ target, slots })
    // Then
    expect(component).not.toHaveSlots(['first'])
  })
})
