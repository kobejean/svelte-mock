import HelloWorld from '../fixtures/HelloWorld.svelte'
import MockComponent from '../fixtures/MockComponent.svelte'

jest.mock('../fixtures/Paragraph.svelte')
import Paragraph from '../fixtures/Paragraph.svelte'

beforeEach(() => {
  Paragraph.mockReset()
})

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    svelteMock.mockImplementation(Paragraph, 'Mock Hello World')
    const el = document.createElement('div')
    new HelloWorld({ target: el })
    expect(el.textContent).toBe('Mock Hello World')
  })

  it('should update the dom', () => {
    svelteMock.mockImplementation(Paragraph, MockComponent)
    const el = document.createElement('div')
    const component = new HelloWorld({ target: el })

    expect(el.textContent).toBe('Mock Component')

    component.set({ message: 'Test' })

    expect(el.textContent).toBe('Mock Component')
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Hello Test'})

    const paragraph = Paragraph.getInstanceByProps({ text: 'Hello Test'})
    expect(paragraph).toHaveProps({ text: 'HelloTest'})
  })

  it('should be Svelte instance', () => {
    svelteMock.mockImplementation(Paragraph)
    const el = document.createElement('div')
    const component = new HelloWorld({ target: el })

    expect(component.get().message).toBe('World')

    component.set({ message: 'Test' })

    console.log(Paragraph)

    expect(component.get().message).toBe('Test')
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Hello Test'})
  })
})
