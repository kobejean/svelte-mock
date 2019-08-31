import HelloWorld from '../fixtures/HelloWorld.svelte'

jest.mock('../fixtures/Paragraph.svelte')
import Paragraph from '../fixtures/Paragraph.svelte'


describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const MockParagraph = svelteMock.mockComponent('Mock Hello World')
    Paragraph.mockImplementation(MockParagraph)
    const el = document.createElement('div')
    new HelloWorld({
      target: el
    })
    expect(el.textContent).toBe('Mock Hello World')
  })

  it('should update the dom', () => {
    const MockParagraph = svelteMock.mockComponent('Mock Hello Test')
    Paragraph.mockImplementation(MockParagraph)
    const el = document.createElement('div')
    const component = new HelloWorld({
      target: el
    })

    expect(el.textContent).toBe('Mock Hello Test')

    component.set({
      message: 'Test'
    })

    expect(el.textContent).toBe('Mock Hello Test')
  })

  it('should be Svelte instance', () => {
    const el = document.createElement('div')
    const component = new HelloWorld({
      target: el
    })

    expect(component.get().message).toBe('World')

    component.set({
      message: 'Test'
    })

    expect(component.get().message).toBe('Test')
  })
})
