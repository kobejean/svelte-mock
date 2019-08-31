const { every, keys, get } = require('lodash')

function isComponentMatchingProps(component, props) {
  const componentProps = component.get()
  return every(keys(props), function (key) {
    return get(componentProps, key) === get(props, key)
  })
}

exports.isComponentMatchingProps = isComponentMatchingProps
