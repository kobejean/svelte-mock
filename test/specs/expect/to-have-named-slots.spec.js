jest.mock('@test/fixtures/NamedSlot.svelte')
import NamedSlot from '@test/fixtures/NamedSlot.svelte'
svelteMock.mockImplementation(NamedSlot)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('expect(component).toHaveNamedSlots(namedSlots)', () => {
  it('should pass if named slots match', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment()
    };
    // When
    const component = new NamedSlot({ target , slots })
    // Then
    expect(component).toHaveNamedSlots(['default'])
  })

  it('should pass if named slots match a subset of the component\'s named slots', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment(),
      first: document.createDocumentFragment(),
      second: document.createDocumentFragment()
    };
    // When
    new NamedSlot({ target, slots })
    // Then
    expect(NamedSlot).toHaveAnInstanceWithNamedSlots(['second'])
  })

  it('should fail if named slots do not match', () => {
    // Given
    const target = document.createElement('div')
    const slots = {
      default: document.createDocumentFragment()
    };
    // When
    new NamedSlot({ target, slots })
    // Then
    expect(NamedSlot).not.toHaveAnInstanceWithNamedSlots(['first'])
  })
})
