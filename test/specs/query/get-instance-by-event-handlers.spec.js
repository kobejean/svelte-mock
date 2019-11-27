import { getFixturePath, resolveDefault } from '@test/utils/import'

jest.mock(getFixturePath('Paragraph.svelte'))
const Paragraph = resolveDefault(jest.requireMock(getFixturePath('Paragraph.svelte')))
svelteMock.mockImplementation(Paragraph)

const EventHandlers = resolveDefault(jest.requireActual(getFixturePath('EventHandlers.svelte')))

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
