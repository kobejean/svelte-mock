const { find, map } = require('lodash')
const { hasEventHandlers } = require('@check/has-event-handlers')

export function getInstanceByEventHandlers(mockComponent, eventHandlers) {
  const instances = map(mockComponent.mock.results, 'value')
  return find(instances, instance => hasEventHandlers(instance, eventHandlers))
}
