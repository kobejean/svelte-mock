import Bindings from '../../fixtures/Bindings.svelte'

jest.mock('../../fixtures/Fullname.svelte')
import Fullname from '../../fixtures/Fullname.svelte'
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveBoundProps(boundProps)', () => {
  it('should pass if bound props match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' })
    const expected = { firstname: 'Jean' , lastname: 'Flaherty' }
    expect(fullname).toHaveBoundProps(expected)
  })

  it('should pass if bound props match a subset of an instances bound props', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' })
    expect(fullname).toHaveBoundProps({ lastname: 'Flaherty' })
  })

  it('should pass if bound props match after state updates', () => {
    // Given
    const target = document.createElement('div')
    const component = new Bindings({ target })
    const fullname = Fullname.getInstanceByProps({ firstname: 'Jean' })
    // When
    component.set({ firstname: 'Loyd' })
    // Then
    expect(fullname).toHaveBoundProps({ firstname: 'Loyd' })
  })

  it('should fail if bound props do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    const fullname = Fullname.getInstanceByProps({ firstname: 'Rick' })
    expect(fullname).not.toHaveBoundProps({ lastname: 'Flaherty' })
  })
})
