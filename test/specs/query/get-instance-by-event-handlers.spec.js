import EventHandlers from '@test/fixtures/EventHandlers.svelte'

jest.mock('@test/fixtures/Paragraph.svelte')
import Paragraph from '@test/fixtures/Paragraph.svelte'
svelteMock.mockImplementation(Paragraph)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Component.getInstanceByEventHandlers(eventHandlers)', () => {
  it('should return instances with matching event handlers', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    const eventHandlers = ['click']
    const recieved = Paragraph.getInstanceByEventHandlers(eventHandlers)
    expect(recieved).toHaveEventHandlers(eventHandlers)
  })

  it('should return instances with matching subset of event handlers', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    const eventHandlers = ['random']
    const recieved = Paragraph.getInstanceByEventHandlers(eventHandlers)
    expect(recieved).toHaveEventHandlers(eventHandlers)
  })

  it('should return undefined if event handlers do not match any instance', () => {
    // Given
    const target = document.createElement('div')
    // When
    new EventHandlers({ target })
    // Then
    const eventHandlers = ['random', 'nonExistent']
    const recieved = Paragraph.getInstanceByEventHandlers(eventHandlers)
    expect(recieved).toBeUndefined()
  })
})
