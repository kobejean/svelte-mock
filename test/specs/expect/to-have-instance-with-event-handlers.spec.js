import EventHandlers from '@test/fixtures/EventHandlers.svelte'

jest.mock('@test/fixtures/Paragraph.svelte')
import Paragraph from '@test/fixtures/Paragraph.svelte'
svelteMock.mockImplementation(Paragraph)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveInstanceWithEventHandlers(eventHandlers)', () => {
  it('should pass if event match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).toHaveInstanceWithEventHandlers(['click'])
  })

  it('should pass if props match a subset of an instance\'s props', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).toHaveInstanceWithEventHandlers(['custom'])
  })

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).not.toHaveInstanceWithEventHandlers(['custom', 'nonExistent'])
  })
})
