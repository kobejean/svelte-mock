import { find, map } from 'lodash';
import { hasBoundProps } from '@check/instance/has-bound-props';

export function getInstanceByBoundProps(mockComponent, boundProps) {
  const instances = map(mockComponent.mock.results, 'value');
  return find(instances, (instance) => hasBoundProps(instance, boundProps));
}
