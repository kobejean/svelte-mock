const { every, keys, find, get } = require('lodash')

function isComponentMatchingProps(component, props) {
  const componentProps = component.get()
  return every(keys(props), function (key) {
    return get(componentProps, key) === get(props, key)
  })
}

function getMockInstanceWithProps(mockComponent, props) {
  return find(mockComponent.mock.results, function (result) {
    const component = result.value
    return isComponentMatchingProps(component, props)
  })
}

exports.isComponentMatchingProps = isComponentMatchingProps
exports.getMockInstanceWithProps = getMockInstanceWithProps
