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

describe('expect(Component).toHaveAnInstance()', () => {
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
    expect(Paragraph).not.toHaveAnInstance()
  })
})
