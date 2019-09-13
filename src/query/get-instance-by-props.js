const { find, map } = require('lodash')
const { hasProps } = require('@check/has-props')

export function getInstanceByProps(mockComponent, props) {
  const instances = map(mockComponent.mock.results, 'value')
  return find(instances, instance => hasProps(instance, props))
}
