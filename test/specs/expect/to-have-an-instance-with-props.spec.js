import MultipleInstance from '@test/fixtures/MultipleInstance.svelte'

jest.mock('@test/fixtures/Paragraph.svelte')
jest.mock('@test/fixtures/Fullname.svelte')
import Paragraph from '@test/fixtures/Paragraph.svelte'
import Fullname from '@test/fixtures/Fullname.svelte'
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
    new MultipleInstance({ target })
    // Then
    expect(Paragraph).toHaveAnInstanceWithProps({ text: 'Goodbye World' })
  })

  it('should pass if props match a subset of an instance\'s props', () => {
    // Given
    const target = document.createElement('div')
    // When
    new MultipleInstance({ target })
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
    new MultipleInstance({ target })
    // Then
    expect(Paragraph).not.toHaveAnInstanceWithProps({ text: 'Sayonara' })
  })
})
