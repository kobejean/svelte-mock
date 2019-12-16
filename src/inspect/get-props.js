/* eslint-disable camelcase */
import { mapValues, get } from 'lodash';
import { isSvelteVersion } from '@utils/version';

const getPropsV2 = (component) => component.get();
const getPropsV3_15_0 = (component) => {
  const propKeys = get(component, ['$$', 'props'], {});
  const ctx = get(component, ['$$', 'ctx'], []);
  return mapValues(propKeys, (key) => ctx[key]);
}; ;
const getPropsLatest = (component) => {
  const propIndices = get(component, ['$$', 'props'], {});
  const ctx = get(component, ['$$', 'ctx'], []);
  return mapValues(propIndices, (index) => ctx[index]);
};


export const getProps = (() => {
  if (isSvelteVersion('3.0.0', '<')) {
    return getPropsV2;
  } else if (isSvelteVersion('3.16.0', '<')) {
    return getPropsV3_15_0;
  }
  return getPropsLatest;
})();
