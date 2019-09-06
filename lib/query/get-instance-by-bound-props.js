import { find, get } from 'lodash'
import { isComponentMatchingBoundProps } from '@check'

export function getInstanceByBoundProps(mockComponent, props) {
  const match = find(mockComponent.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingBoundProps(component, props)
  })
  return get(match, 'value')
}
