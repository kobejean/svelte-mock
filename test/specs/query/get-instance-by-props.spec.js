import { getFixturePath, resolveDefault } from '@test/utils/import'

jest.mock(getFixturePath('Fullname.svelte'))
const Fullname = resolveDefault(jest.requireMock(getFixturePath('Fullname.svelte')))
svelteMock.mockImplementation(Fullname)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Component.getInstanceByProps(props)', () => {
  it('should return instances with matching props', () => {
    // Given
    const target = document.createElement('div')
    const data1 = { firstname: 'Jean', lastname: 'Flaherty' }
    const data2 = { firstname: 'Rick', lastname: 'Flaherty' }
    // When
    const component1 = new Fullname({ target, data: data1 })
    const component2 = new Fullname({ target, data: data2 })
    // Then
    expect(Fullname.getInstanceByProps(data2)).toBe(component2)
  })

  it('should return instances with matching prop subset', () => {
    // Given
    const target = document.createElement('div')
    const data1 = { firstname: 'Jean', lastname: 'Flaherty' }
    const data2 = { firstname: 'Rick', lastname: 'Flaherty' }
    // When
    const component1 = new Fullname({ target, data: data1 })
    const component2 = new Fullname({ target, data: data2 })
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Jean' })
    expect(recieved).toBe(component1)
  })

  it('should return instances with matching props after state updates', () => {
    // Given
    const target = document.createElement('div')
    const data1 = { firstname: 'Jean', lastname: 'Flaherty' }
    const data2 = { firstname: 'Rick', lastname: 'Flaherty' }
    const component1 = new Fullname({ target, data: data1 })
    const component2 = new Fullname({ target, data: data2 })
    // When
    component1.set({ firstname: 'Sachico' })
    component2.set({ firstname: 'Loyd' })
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Loyd' })
    expect(recieved).toBe(component2)
  })

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div')
    const data1 = { firstname: 'Jean', lastname: 'Flaherty' }
    const data2 = { firstname: 'Rick', lastname: 'Flaherty' }
    // When
    const component1 = new Fullname({ target, data: data1 })
    const component2 = new Fullname({ target, data: data2 })
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Loyd' })
    expect(recieved).toBe(undefined)
  })
})
