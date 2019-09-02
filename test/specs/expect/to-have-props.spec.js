jest.mock('../../fixtures/Fullname.svelte')
import Fullname from '../../fixtures/Fullname.svelte'
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(component).toHaveProps(props)', () => {
  it('should pass if props match', () => {
    // Given
    const target = document.createElement('div')
    const data = { firstname: 'Rick', lastname: 'Flaherty' }
    // When
    const component = new Fullname({ target, data })
    // Then
    expect(component).toHaveProps({ firstname: 'Rick', lastname: 'Flaherty' })
  })

  it('should pass if props match a subset of an instances props', () => {
    // Given
    const target = document.createElement('div')
    const data = { firstname: 'Jean', lastname: 'Flaherty' }
    // When
    const component = new Fullname({ target, data })
    // Then
    expect(component).toHaveProps({ firstname: 'Jean' })
  })

  it('should pass if props match after state updates', () => {
    // Given
    const target = document.createElement('div')
    const data = { firstname: 'Jean', lastname: 'Flaherty' }
    const component = new Fullname({ target, data })
    // When
    component.set({ firstname: 'Sachico' })
    // Then
    expect(component).toHaveProps({ firstname: 'Sachico', lastname: 'Flaherty' })
  })

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div')
    const data = { firstname: 'Jean', lastname: 'Flaherty' }
    // When
    const component = new Fullname({ target, data })
    // Then
    expect(component).not.toHaveProps({ lastname: 'Furuhata' })
  })
})
