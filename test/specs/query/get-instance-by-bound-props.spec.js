import Bindings from '../../fixtures/Bindings.svelte'

jest.mock('../../fixtures/Fullname.svelte')
import Fullname from '../../fixtures/Fullname.svelte'
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Component.getInstanceByBoundProps(props)', () => {
  it('should return instances with matching props', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Bindings({ target })
    // Then
    const boundProps = { firstname: 'Jean', lastname: 'Flaherty' }
    const recieved = Fullname.getInstanceByProps(boundProps)
    expect(recieved).not.toBe(undefined)
  })

  it('should return instances with matching prop subset', () => {
    // Given
    const target = document.createElement('div')
    // When
    new Bindings({ target })
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Jean' })
    expect(recieved).not.toBe(undefined)
  })

  it('should return instances with matching props after state updates', () => {
    // Given
    const target = document.createElement('div')
    const component = new Bindings({ target })
    // When
    component.set({ firstname: 'Sachico' })
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Sachico' })
    expect(recieved).not.toBe(undefined)
  })

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    expect(Fullname.getInstanceByProps({ firstname: 'Sachico' })).toBe(undefined)
  })
})
