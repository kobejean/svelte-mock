import Bindings from '@test/fixtures/Bindings.svelte'

jest.mock('@test/fixtures/Fullname.svelte')
import Fullname from '@test/fixtures/Fullname.svelte'
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveInstanceWithBoundProps(boundProps)', () => {
  it('should pass if bound props match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    const expected = { firstname: 'Jean' , lastname: 'Flaherty' }
    expect(Fullname).toHaveInstanceWithBoundProps(expected)
  })

  it('should pass if bound props match a subset of an instance\'s bound props', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    const expected = { lastname: 'Flaherty' }
    expect(Fullname).toHaveInstanceWithBoundProps({ lastname: 'Flaherty' })
  })

  it('should pass if bound props match after state updates', () => {
    // Given
    const target = document.createElement('div')
    const component = new Bindings({ target })
    // When
    component.set({ firstname: 'Loyd' })
    // Then
    expect(Fullname).toHaveInstanceWithBoundProps({ firstname: 'Loyd' })
  })

  it('should fail if bound props do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Bindings({ target })
    // Then
    expect(Fullname).not.toHaveInstanceWithBoundProps({ firstname: 'Rick' })
  })
})
