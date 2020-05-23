/* eslint-disable camelcase */
import { getSupportedImplementation } from '@utils/version';
import { get, pickBy, mapValues, has } from 'lodash';
import { getProps } from './get-props';

// V2
const bindPropRegExpV2 = /childState\.(.+?);/gm;
const getBoundPropsV2 = (component) => {
  const props = getProps(component);
  const bindString = get(component, '_bind', '').toString();
  if (bindString === '') return {};
  const matches = {};
  // get matches
  let match = bindPropRegExpV2.exec(bindString);
  while (match != null) {
    const capture = match[1];
    matches[capture] = get(props, [capture]);
    match = bindPropRegExpV2.exec(bindString);
  }
  return matches;
};

// V3

const getBoundPropsV3_12_0 = (component) => {
  const bound = get(component, ['$$', 'bound'], []);
  const ctx = get(component, ['$$', 'ctx'], []);
  return pickBy(ctx, (_, prop) => has(bound, prop));
};

const getBoundPropsLatest = (component) => {
  const bound = get(component, ['$$', 'bound'], []);
  const ctx = get(component, ['$$', 'ctx'], []);
  const propIndices = get(component, ['$$', 'props'], {});
  const boundIndices = pickBy(propIndices, (index) => has(bound, index));
  return mapValues(boundIndices, (index) => ctx[index]);
};

export const getBoundProps = (() => {
  const implementations = [
    { implementation: getBoundPropsV2, supportedUntil: '3.0.0' },
    { implementation: getBoundPropsV3_12_0, supportedUntil: '3.13.0' },
    { implementation: getBoundPropsLatest },
  ];
  return getSupportedImplementation(implementations);
})();
