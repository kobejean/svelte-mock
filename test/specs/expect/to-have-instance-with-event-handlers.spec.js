import EventHandlers from '@test/fixtures/EventHandlers.svelte'

jest.mock('@test/fixtures/Paragraph.svelte')
import Paragraph from '@test/fixtures/Paragraph.svelte'
svelteMock.mockImplementation(Paragraph)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveInstanceWithEventHandlers(eventHandlers)', () => {
  it('should pass if event handler matches', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).toHaveInstanceWithEventHandlers(['click'])
  })

  it('should pass if event handlers match a subset of an instance\'s event handlers', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).toHaveInstanceWithEventHandlers(['custom'])
  })

  it('should fail if event handlers do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    expect(Paragraph).not.toHaveInstanceWithEventHandlers(['custom', 'nonExistent'])
  })
})
