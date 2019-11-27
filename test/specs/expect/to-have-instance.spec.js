import { getFixturePath, resolveDefault } from '@test/utils/import'

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

describe('expect(Component).toHaveInstance()', () => {
  it('should pass if instance is created', () => {
    // Given
    const target = document.createElement('div')
    // When
    new MultipleInstance({ target })
    // Then
    expect(Paragraph).toHaveAnInstance()
  })

  it('should fail if instance is not created', () => {
    // Then
    expect(Paragraph).not.toHaveInstance()
  })
})
