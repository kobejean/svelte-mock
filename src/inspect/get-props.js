import { mapValues, get } from 'lodash';
import { isSvelteVersion } from '@utils/version';

const getPropsV2 = (component) => component.get();
const getPropsV3 = (component) => {
  const propIndices = get(component, ['$$', 'props'], {});
  const ctx = get(component, ['$$', 'ctx'], []);
  return mapValues(propIndices, (index) => ctx[index]);
};
export const getProps = isSvelteVersion('3.0.0', '<') ?
  getPropsV2 : getPropsV3;
