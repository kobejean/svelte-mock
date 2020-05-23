const { find, map } = require('lodash');
const { hasSlots } = require('@check/instance/has-slots');

export function getInstanceBySlots(mockComponent, slots) {
  const instances = map(mockComponent.mock.results, 'value');
  return find(instances, (instance) => hasSlots(instance, slots));
}
