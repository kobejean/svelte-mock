import HelloWorld from '@test/fixtures/HelloWorld.svelte'
import MockComponent from '@test/fixtures/MockComponent.svelte'

jest.mock('@test/fixtures/Paragraph.svelte')
import Paragraph from '@test/fixtures/Paragraph.svelte'

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
