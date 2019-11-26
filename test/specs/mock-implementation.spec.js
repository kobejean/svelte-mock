import { getFixturePath, resolveDefault } from '@test/utils/import'

jest.mock(getFixturePath('Paragraph.svelte'))
const Paragraph = resolveDefault(jest.requireMock(getFixturePath('Paragraph.svelte')))

const HelloWorld = resolveDefault(jest.requireActual(getFixturePath('HelloWorld.svelte')))
const MockComponent = resolveDefault(jest.requireActual(getFixturePath('MockComponent.svelte')))

beforeEach(() => {
  Paragraph.mockReset()
})

describe('svelteMock.mockImplementation(Component)', () => {
  it('should mock svelte component with empty text', () => {
    // Given
    svelteMock.mockImplementation(Paragraph)
    const target = document.createElement('div')
    // When
    new HelloWorld({ target })
    // Then
    expect(target.textContent).toBe('')
  })

  it('should mock svelte component with specified text', () => {
    // Given
    svelteMock.mockImplementation(Paragraph, 'Mock Hello World')
    const target = document.createElement('div')
    // When
    new HelloWorld({ target })
    // Then
    expect(target.textContent).toBe('Mock Hello World')
  })

  it('should mock svelte component with specified mock component', () => {
    // Given
    svelteMock.mockImplementation(Paragraph, MockComponent)
    const target = document.createElement('div')
    // When
    new HelloWorld({ target })
    // Then
    expect(target.textContent).toBe('Mock Component')
  })
})
