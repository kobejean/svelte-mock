jest.mock('@test/fixtures/Slot.svelte')
jest.mock('@test/fixtures/Paragraph.svelte')
import Slot from '@test/fixtures/Slot.svelte'
import Paragraph from '@test/fixtures/Paragraph.svelte'
svelteMock.mockImplementation(Slot)
svelteMock.mockImplementation(Paragraph)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(component).toHaveSlots()', () => {
  it('should pass if the component has a slot', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment()
    };
    // When
    const component = new Slot({ target , slots })
    // Then
    expect(component).toHaveSlots()

    console.log(Slot.mock);
  })

  it('should fail if the component does not have a slot', () => {
    // Given
    const target = document.createElement('div')
    // When
    const component = new Paragraph({ target })
    // Then
    expect(component).not.toHaveSlots()
  })
})
