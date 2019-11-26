import { getFixturePath, resolveDefault } from '@test/utils/import'
import { SVELTE_CHANGES } from '@utils/version'
import { tick } from 'svelte'

jest.mock(getFixturePath('Paragraph.svelte'))
jest.mock(getFixturePath('Fullname.svelte'))
const Paragraph = resolveDefault(jest.requireMock(getFixturePath('Paragraph.svelte')))
const Fullname = resolveDefault(jest.requireMock(getFixturePath('Fullname.svelte')))
svelteMock.mockImplementation(Paragraph)
svelteMock.mockImplementation(Fullname)

const MultipleInstance = resolveDefault(jest.requireActual(getFixturePath('MultipleInstance.svelte')))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(Component).toHaveInstanceWithProps(props)', () => {
  it('should pass if props match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new MultipleInstance({ target })
    // Then
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Goodbye World' })
  })

  it('should pass if props match a subset of an instance\'s props', () => {
    // Given
    const target = document.createElement('div')
    // When
    new MultipleInstance({ target })
    // Then
    expect(Fullname).toHaveInstanceWithProps({ lastname: 'Flaherty' })
  })

  it('should pass if props match after state updates', async () => {
    // Given
    const target = document.createElement('div')
    const component = new MultipleInstance({ target })
    // When
    component[SVELTE_CHANGES.SET_METHOD]({ message: 'Kitty' })
    await tick()
    // Then
    expect(Paragraph).toHaveInstanceWithProps({ text: 'Hello Kitty' })
  })

  it('should fail if props do not match', () => {
    // Given
    const target = document.createElement('div')
    // When
    new MultipleInstance({ target })
    // Then
    expect(Paragraph).not.toHaveInstanceWithProps({ text: 'Sayonara' })
  })
})
