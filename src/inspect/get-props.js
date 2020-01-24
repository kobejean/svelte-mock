/* eslint-disable camelcase */
import { mapValues, get, pickBy, includes } from 'lodash';
import { getSupportedImplementation } from '@utils/version';

const getPropsV2 = (component) => component.get();
const getPropsV3_12_0 = (component) => {
  const props = get(component, ['$$', 'props'], []);
  const ctx = get(component, ['$$', 'ctx'], {});
  return pickBy(ctx, (_, key) => includes(props, key));
};
const getPropsV3_15_0 = (component) => {
  const propKeys = get(component, ['$$', 'props'], {});
  const ctx = get(component, ['$$', 'ctx'], {});
  return mapValues(propKeys, (key) => ctx[key]);
};
const getPropsLatest = (component) => {
  const propIndices = get(component, ['$$', 'props'], {});
  const ctx = get(component, ['$$', 'ctx'], []);
  return mapValues(propIndices, (index) => ctx[index]);
};

export const getProps = (() => {
  const implementations = [
    { implementation: getPropsV2, supportedUntil: '3.0.0' },
    { implementation: getPropsV3_12_0, supportedUntil: '3.13.0' },
    { implementation: getPropsV3_15_0, supportedUntil: '3.16.0' },
    { implementation: getPropsLatest },
  ];
  return getSupportedImplementation(implementations);
})();
