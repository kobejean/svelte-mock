import MultipleInstance from '../../fixtures/MultipleInstance.svelte'

jest.mock('../../fixtures/Paragraph.svelte')
jest.mock('../../fixtures/Fullname.svelte')
import Paragraph from '../../fixtures/Paragraph.svelte'
import Fullname from '../../fixtures/Fullname.svelte'
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
