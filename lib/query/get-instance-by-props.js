const { find, get } = require('lodash')
const { isComponentMatchingProps } = require('../utils/checks')

export function getInstanceByProps(mockComponent, props) {
  const match = find(mockComponent.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingProps(component, props)
  })
  return get(match, 'value')
}
