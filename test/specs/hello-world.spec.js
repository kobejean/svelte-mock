import HelloWorld from '../fixtures/HelloWorld.svelte'

describe('Svelte Jest', () => {
  it('should import Svelte component', () => {
    const el = document.createElement('div')
    new HelloWorld({
      target: el
    })
    expect(el.textContent).toBe('Hello World')
  })

  it('should update the dom', () => {
    const el = document.createElement('div')
    const component = new HelloWorld({
      target: el
    })

    expect(el.textContent).toBe('Hello World')

    component.set({
      message: 'Test'
    })

    expect(el.textContent).toBe('Hello Test')
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
