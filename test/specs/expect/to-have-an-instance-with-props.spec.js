import MultipleInstance from '../../fixtures/MultipleInstance.svelte'
import Bindings from '../../fixtures/Bindings.svelte'

jest.mock('../../fixtures/Paragraph.svelte')
jest.mock('../../fixtures/Fullname.svelte')
import Paragraph from '../../fixtures/Paragraph.svelte'
import Fullname from '../../fixtures/Fullname.svelte'
svelteMock.mockImplementation(Paragraph)
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveAnInstanceWithProps(props)', () => {
  it('should pass if props match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new MultipleInstance({ target })
    // Then
    expect(Paragraph).toHaveAnInstanceWithProps({ text: 'Goodbye World' })
  })

  it('should pass if props match a subset of an instances props', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new MultipleInstance({ target })
    // Then
    expect(Fullname).toHaveAnInstanceWithProps({ lastname: 'Flaherty' })
  })

  it('should pass if props match after state updates', () => {
    // Given
    const target = document.createElement('div')
    const component = new MultipleInstance({ target })
    // When
    component.set({ message: 'Kitty' })
    // Then
    expect(Paragraph).toHaveAnInstanceWithProps({ text: 'Hello Kitty' })
  })

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new MultipleInstance({ target })
    // Then
    expect(Paragraph).not.toHaveAnInstanceWithProps({ text: 'Sayonara' })
  })
})
