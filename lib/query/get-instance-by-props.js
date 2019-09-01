const { find } = require('lodash')
const { isComponentMatchingProps } = require('../utils')

export function getInstanceByProps(mockComponent, props) {
  return find(mockComponent.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingProps(component, props)
  }).value
}
