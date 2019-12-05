import { transform, get } from 'lodash';
import { isSvelteVersion } from '@utils/version';

const getPropsV2 = (component) => component.get();
const getPropsV3 = (component) => {
  const props = get(component, ['$$', 'props'], {});
  return transform(props, (result, index, prop) => {
    result[prop] = get(component, ['$$', 'ctx', index]);
  }, {});
};
export const getProps = isSvelteVersion('3.0.0', '<') ?
  getPropsV2 : getPropsV3;
