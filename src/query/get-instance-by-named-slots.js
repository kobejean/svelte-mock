const { find, map } = require('lodash')
const { hasNamedSlots } = require('@check/has-named-slots')

export function getInstanceByNamedSlots(mockComponent, namedSlots) {
  const instances = map(mockComponent.mock.results, 'value')
  return find(instances, instance => hasNamedSlots(instance, namedSlots))
}
