const { find } = require('lodash')
const { isComponentMatchingProps } = require('../utils')

function getInstanceByProps(mockComponent, props) {
  return find(mockComponent.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingProps(component, props)
  }).value
}

exports.getInstanceByProps = getInstanceByProps
