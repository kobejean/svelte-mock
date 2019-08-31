import HelloWorld from '../fixtures/HelloWorld.svelte'
import Paragraph from '../fixtures/Paragraph.svelte'

jest.mock('../fixtures/Paragraph.svelte')

beforeEach(() => {
  Paragraph.mockReset()
})

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const MockParagraph = svelteMock.makeMockComponent('Mock Hello World')
    Paragraph.mockImplementation(MockParagraph)
    const el = document.createElement('div')
    new HelloWorld({ target: el })
    expect(el.textContent).toBe('Mock Hello World')
  })

  it('should update the dom', () => {
    const MockParagraph = svelteMock.makeMockComponent('Mock Hello Test')
    Paragraph.mockImplementation(MockParagraph)
    const el = document.createElement('div')
    const component = new HelloWorld({ target: el })

    expect(el.textContent).toBe('Mock Hello Test')

    component.set({ message: 'Test' })

    expect(el.textContent).toBe('Mock Hello Test')
  })

  it('should be Svelte instance', () => {
    const MockParagraph = svelteMock.makeMockComponent()
    Paragraph.mockImplementation(MockParagraph)
    const el = document.createElement('div')
    const component = new HelloWorld({ target: el })

    expect(component.get().message).toBe('World')

    component.set({ message: 'Test' })

    expect(component.get().message).toBe('Test')
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Hello Test'})
  })
})
